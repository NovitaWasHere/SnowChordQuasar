<template>
  <q-dialog v-model="toolbar" full-height full-width persistent>
    <q-card class="bg-primary" style="overflow-y: hidden; overflow-x: hidden">
      <div>
        <!--Titulo-->
        <div
          class="bg-secondary"
          style="
            width: 70%;

            border-radius: 0px 5px 160px 0px;
            border: 3px solid black;
          "
        >
          <div
            class="bg-black no-margin"
            style="width: 55%; border-radius: 0px 5px 160px 0px"
          >
            <p
              class="text-h3 text-white my-fontAcme q-pa-xl text-weight-bolder"
              style="text-shadow: -3px -1px 1px #eab114"
            >
              {{ song.nombre }}
            </p>
          </div>
          <div class="q-pl-xl" style="width: 80%">
            <p
              class="text-h5 text-black my-fontAcme q-ml-xl q-pa-md text-weight-bolder"
              style="text-shadow: -3px -1px 1px #ffffff"
            >
              {{ song.artista }}
              <q-btn
                class="absolute-top-right bg-secondary q-ma-md"
                flat
                round
                dense
                icon="close"
                v-close-popup
                size="20px"
              />
            </p>
          </div>
        </div>
        <!--Targeta de video-->
        <div class="q-pl-xl q-pt-xl">
          <div>
            <div class="row" style="width: 70%">
              <div
                class="col bg-accent flex flex-center"
                style="border-radius: 150px 5px 15px 10px;min-width: 150px;max-width: 500px"
              >
                <img
                  :src="song.imgCancion"
                  alt=""
                  style="max-width: 50%">

              </div>
              <div
                class="col"
                style="height: 100%; text-shadow: -3px -1px 1px #000"
              >
                <div class="row text-justify text-h4 text-white my-fontAcme">
                  <div
                    class="column easy"
                    style="width: 50%; border-bottom: 10px solid black"
                  >
                    <div
                      class="bg-accent"
                      style="
                        border-radius: 0px 0px 100px 0px;
                        border-right: 10px solid black;
                        border-top: 10px solid black;
                      "
                    >
                      <div class="col q-pa-md">Tiempo</div>
                      <div class="col q-pa-md">Dificultad</div>
                      <div class="col q-pa-md">Genero</div>
                    </div>
                  </div>
                  <div
                    class="column "
                    :style="{
                        backgroundColor: song.dificultad === 1 ? '#62e573' : song.dificultad === 2 ? '#dcb367' : 'red',
                    }"
                    style="
                      width: 50%;
                      border-radius: 0px 0px 150px 0px;
                      border-right: 10px solid black;
                      border-bottom: 10px solid black;
                      border-top: 10px solid black;
                    "
                  >
                    <div class="col q-pa-md">{{ song.tiempo }} Secs</div>
                    <div class="col q-pa-md">{{ song.dificultad == 1 ? "Facil": song.dificultad == 2 ? "Medio" : "Dificil" }}</div>
                    <div class="col q-pa-md">{{ song.genero }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          style="
            z-index: 2000;
            bottom: 450px;
            left: 1100px;
            position: relative;
            width: 250px;
          "
          class="my-fontAcme text-white text-h4 text-center"
        >
          <p>{{ song.instrumento === 1 ? "Guitarra": "Piano" }}</p>
          <img
            v-if="song.instrumento === 1"
            src="~assets/Img/SnowiGuitar.png"
            alt="Guitarra"
            class="radius"
            style="width: 100%"
          />
          <img
            v-else
            src="~assets/Img/SnowiPiano.png"
            alt="Piano"
            class="radius"
            style="width: 100%"
          />
        </div>

        <q-btn
          class="absolute-bottom-right bg-accent text-white my-fontAcme"
          flat
          dense
          v-close-popup
          size="20px"
          style="
            width: 15%;
            height: 10%;
            text-shadow: -3px -1px 1px #000000;
            border-radius: 45px 0px 0px 0px;
            border: 5px solid black;
          "
        >
          Jugar
        </q-btn>
      </div>
    </q-card>
  </q-dialog>
</template>
<script setup>
import {ref, defineProps} from "vue";

const props = defineProps({
  song: Object
});

</script>
