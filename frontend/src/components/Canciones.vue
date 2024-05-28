<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="flex flex-center my-fontAcme q-mb-xl">
    <div
      class="bg-primary q-mt-xl"
      style="border: 10px solid black; width: 80%"
    >
      <div class="row">
        <div class="col q-pa-xl" style="border: 10px solid black; width: 100%">
          <div
            style="background-color: #c39339; width: 100%"
            class="q-mt-xl flex flex-center"
          >
            <div class="row" style="width: 90%">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1913/1913235.png"
                alt=""
                class="col-3 q-mt-lg"
                style="height: 50%"
              />
              <h2
                class="col text-justify q-pl-xl q-pt-sm q-pb-md"
                style="color: white"
              >
                Guitarra
              </h2>
            </div>
          </div>
          <div>
            <CardLevel
              v-for="n in cancionesGuitar"
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
        <div
          class="bg-white col q-pa-xl"
          style="border: 10px solid black; width: 100%"
        >
          <div
            style="background-color: #ffffff; width: 100%"
            class="q-mt-xl flex flex-center"
          >
            <div class="row" style="width: 90%">
              <img
                src="https://cdn-icons-png.flaticon.com/512/727/727244.png"
                alt=""
                class="col-3 q-mt-lg"
                style="height: 50%"
              />
              <h2
                class="col text-justify q-pl-xl q-pt-sm q-pb-md"
                style="color: rgb(0, 0, 0)"
              >
                Piano
              </h2>
            </div>
            <div>
              <CardLevel
                v-for="n in cancionesPiano"
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
      </div>
    </div>
  </div>
  <PreviewGame v-model="previewGame" :song="cancionElegida"></PreviewGame>
</template>
<script setup>
import CardLevel from "components/CardLevel.vue";
import {onMounted, ref} from "vue"
import api from "src/boot/httpSingleton";
import PreviewGame from "components/PreviewGame.vue";
const api_ = api
const localStorage = window.localStorage
const user = JSON.parse(localStorage.getItem("usuario")).datos
const previewGame = ref(false);

const cancionElegida = ref(null)
const cancionesGuitar = ref([])
const cancionesPiano = ref([])

const snowi = ref({})
const snowiI = ref('')
const loaded = ref(false)


onMounted(conseguirCancionesG)
function elegida(song){
  previewGame.value = true
  cancionElegida.value = song
}


async function conseguirCancionesG() {
  await fetch(`${api_}/canciones/all`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  })
    .then((res) => res.json())
    .then((datos) => {
      console.log(datos);
      if (!datos.exito === false) {

        cancionesGuitar.value = []
        cancionesPiano.value = []

        datos.datos.forEach(objeto => {
          if(objeto.instrumento === 1){
            cancionesGuitar.value.push(objeto);
          }else{
            cancionesPiano.value.push(objeto);
          }
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
