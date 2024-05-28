<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="row flex q-mt-xl q-mb-xl">
    <div class="col flex flex-center my-fontAcme">
      <div
        class="bg-primary flex flex-center q-ml-xl"
        style="border: 10px solid black; width: 80%"
      >
        <div style="background-color: #c39339; width: 100%" class="q-mt-xl">
          <h2 class="text-justify q-pl-xl q-pt-md q-pb-md" style="color: white">
            Tendencias
          </h2>
        </div>
        <div class="column flex flex-center q-mt-xl" style="width: 80%">
          <CardLevel
            v-for="n in canciones"
            :key="n"
            :id="n._id"
            :artista="n.artista"
            :dificultad="n.dificultad"
            :genero="n.genero"
            :img-cancion="n.imgCancion"
            :instrumento="n.instrumento"
            :nombre="n.nombre"
            :tiempo="n.tiempo"
            :img-snowi="snowiI"
            @click="elegida(n)"
          ></CardLevel>
        </div>
      </div>
    </div>
    <div class="col my-fontAcme">
      <div
        class="bg-primary q-pb-xl"
        style="border: 10px solid black; width: 90%"
      >
        <div style="background-color: #c39339; width: 100%">
          <h2 class="text-center q-pt-md q-pb-md" style="color: white">
            Cursos
          </h2>
        </div>
        <div class="flex flex-center">
          <div style="width: 80%" class="bg-secondary">
            <div class="q-pa-md"  v-for="n in cursos"
                 :key="n">
              <q-btn
                color="black"
                class="full-width"
                :label="n.nombrePractica"
                @click="navigateToTheory(n._id)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Theory v-if="showChild" :curso="curso"></Theory>
  <PreviewGame v-model="previewGame" :song="cancionElegida"></PreviewGame>
</template>
<script setup>
import {onMounted, ref} from "vue"
import api from "src/boot/httpSingleton";
import Theory from "./Theory.vue";
import {useRouter} from "vue-router";
import PreviewGame from "components/PreviewGame.vue";
import CardLevel from "components/CardLevel.vue";

const api_ = api
const localStorage = window.localStorage
const user = JSON.parse(localStorage.getItem("usuario")).datos
const previewGame = ref(false);
const cancionElegida = ref(null)
const router = useRouter();
const curso = ref(null)
const not = ref(false);
const cursos = ref([]);
const showChild = ref(false);
const canciones = ref([]);

const snowi = ref({})
const snowiI = ref('')
const loaded = ref(false)

window.onload = function(){
  conseguirCuros()
}
function elegida(song){
  previewGame.value = true
  cancionElegida.value = song
}

function navigateToTheory(id){
  const jsonObject = JSON.parse(id)
  router.push('/theory/'+ encodeURIComponent(JSON.stringify(jsonObject)))
}

onMounted(conseguirCuros);
async function conseguirCuros() {
  await fetch(`${api_}/cursos/all`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  })
    .then((res) => res.json())
    .then((datos) => {
      if (!datos.exito === false) {
        cursos.value = []
        datos.datos.forEach(objeto => {
          cursos.value.push(objeto);
        });
      }
    });
}

onMounted(conseguirCanciones);

async function conseguirCanciones() {
  await fetch(`${api_}/canciones/all`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  })
    .then((res) => res.json())
    .then((datos) => {
      if (!datos.exito === false) {

        const cancionesOrdenadas = datos.datos.sort((a, b) => b.reproducciones - a.reproducciones);

        // Tomar los primeros 3 objetos
        const top3Canciones = cancionesOrdenadas.slice(0, 3);

        canciones.value = [];
        top3Canciones.forEach(objeto => {
          canciones.value.push(objeto);
        });

      }
    });
}

onMounted(conseguirSnowi);
async function conseguirSnowi() {
  await fetch(`${api_}//mascotas/esp/${user.snowiSelected}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  })
    .then((res) => res.json())
    .then((datos) => {
      if (!datos.exito === false) {
        snowi.value = datos.datos
        loaded.value = true
        snowiI.value = snowi.value.imgSnowi
      }
    });
}

</script>

