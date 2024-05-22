<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="my-fontAcme q-pt-md">
    <p class="text-center text-h3 q-pa-sm" style="color: white;">
      Buscar
    </p>
    <div style="width: 100%">
      <div class="flex flex-center">
        <div class="flex flex-center q-mb-md" style="width: 40%">
          <q-input
            flat
            v-model="text"
            class="text-center bg-white"
            style="width: 90%"
          >
            <q-btn color="accent" icon="search" @click="onClick"/>
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
    <div class="flex flex-center q-mb-md">
      <div class="row" style="width: 90%">
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
          @click="elegida(n)"
        ></CardLevel>
      </div>
    </div>
  </div>
  <PreviewGame v-model="previewGame" :song="cancionElegida"></PreviewGame>
</template>
<script setup>
import {onMounted, ref} from "vue"
import api from "src/boot/httpSingleton";
import CardLevel from "./CardLevel.vue";
import PreviewGame from "./PreviewGame.vue";
const previewGame = ref(false);
const cancionElegida = ref(null)
const not = ref(false);
const api_ = api
const canciones = ref([]);

window.onload = function(){
  conseguirCanciones()
}
const props = defineProps(['id', 'nombre', 'artista', 'instrumento',
  'tiempo', 'dificultad', 'genero', 'imgCancion'])

function elegida(song){
  previewGame.value = true
  cancionElegida.value = song
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
      console.log(datos);
      if (!datos.exito === false) {

        canciones.value = []

        datos.datos.forEach(objeto => {
          canciones.value.push(objeto);
        });

        console.log(canciones.value[0].nombre)
      }
    });
}
</script>
