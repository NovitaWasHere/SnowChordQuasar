<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="my-fontAcme q-pt-md">
    <p class="text-center text-h3 q-pa-sm" style="color: white;">
      Buscar Canción
    </p>
    <div style="width: 100%">
      <div class="flex flex-center">
        <div class="flex flex-center q-mb-md" style="width: 40%">
          <q-input
            flat
            v-model="nombreCancion"
            class="text-center bg-white"
            style="width: 90%"
          >
            <q-btn color="accent" icon="search" @click="buscar"/>
          </q-input>
        </div>
      </div>
    </div>
  </div>
  <div class="my-fontAcme bg-primary q-mt-xl" style="border: 10px solid black">
    <div style="background-color: #c39339">
      <p class="q-pl-md q-pt-lg q-pb-sm text-h3" style="color: white">
        Últimas Canciones
      </p>
    </div>
    <div class="flex flex-center q-mb-md text-center  text-h3 text-black">
      <div v-if="!permiso">
        <p class="text-white">No has jugado ningún nivel</p>
        <p class="text-white">¡Prueba uno ahora!</p>
        <img
         alt="" src="src/assets/Img/SnowiFeliz.png"/>
      <div> <q-btn push label="Canciones" color="white" text-color="black" icon="library_music" to="/songs"  /></div>
      </div>
      <div class="row" style="width: 90%" v-if="songsArray.length !== 0 ">
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
  <q-dialog v-model="basic" transition-show="rotate" transition-hide="rotate" no-focus>
    <q-card>
      <q-card-section>
        <div class="my-fontAcme text-h3 text-center q-pa-md">Búsqueda</div>
      </q-card-section>
      <q-card-section>
        <CardLevel
          v-for="n in cancionesT"
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
      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat  text-color="primary" label="Atras" v-close-popup @click="reset"/>
      </q-card-actions>
    </q-card>
  </q-dialog>
  <PreviewGame v-model="previewGame" :song="cancionElegida"></PreviewGame>
</template>
<script setup>
import {onMounted, ref} from "vue"
import api from "src/boot/httpSingleton";
import CardLevel from "./CardLevel.vue";
import PreviewGame from "./PreviewGame.vue";
const basic = ref(false)
const previewGame = ref(false);
const cancionElegida = ref(null)
const not = ref(false);
const api_ = api
const localStorage = window.localStorage
const user = JSON.parse(localStorage.getItem("usuario")).datos
const permiso = ref(true)
if(user.reproducidas.length === 2){
  permiso.value = false
}

const songsArray = user.reproducidas
  .replace(/[\[\]]/g, '')  // Eliminar los corchetes
  .replace(/ObjectId\('/g, '')  // Eliminar ObjectId('
  .replace(/'\)/g, '')
  .split(', ')  // Separar por comas y espacios
  .map(item => item.trim());  // Quitar espacios adicionales si los hubiera
function elegida(song){
  previewGame.value = true
  cancionElegida.value = song
}

const cancionesT = ref([]);
const todas = ref([]);
const canciones = ref([]);
const nombreCancion = ref('');
const snowi = ref({})
const snowiI = ref('')
const loaded = ref(false)

function buscar() {

  const filtro = nombreCancion.value.toLowerCase();

  cancionesT.value = todas.value.filter(cancion =>
    cancion.nombre.toLowerCase().includes(filtro),
  );

  basic.value = true
}
function reset(){

  cancionesT.value = []
  basic.value = false
  nombreCancion.value = ""
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
        todas.value = [];
        datos.datos.forEach(objeto => {
          todas.value.push(objeto);
          for (let i = 0; i < songsArray.length; i++) {
            if (objeto._id === songsArray[i]) {
              canciones.value.push(objeto);
            }
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
