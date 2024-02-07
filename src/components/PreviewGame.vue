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
              Phoenix
            </p>
          </div>
          <div class="q-pl-xl" style="width: 80%">
            <p
              class="text-h5 text-black my-fontAcme q-ml-xl q-pa-md text-weight-bolder"
              style="text-shadow: -3px -1px 1px #ffffff"
            >
              Cailin Russo and Chrissy Costanza
              <q-btn
                class="absolute-top-right bg-secondary q-ma-md"
                flat
                round
                dense
                icon="close"
                v-close-popup
                size="20px"
                @click="detenerTodosLosAudios"
              />
            </p>
          </div>
        </div>
        <!--Targeta de video-->
        <div class="q-pl-xl q-pt-xl">
          <div>
            <div class="row" style="width: 70%">
              <div
                class="col-6 bg-accent"
                style="border-radius: 30px 5px 65px 100px"
              >
                <video
                  loop
                  autoplay
                  style="
                    border-radius: 30px 10px 275px 30px;
                    border: 10px solid black;
                    background-color: black;
                    width: 102%;
                  "
                >
                  <source
                    src="src\assets\Video\ClipPhoenix.mp4"
                    type="video/mp4"
                  />
                  Tu navegador no soporta el elemento de video.
                </video>
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
                      <div class="col q-pa-md">Estado</div>
                    </div>
                  </div>
                  <div
                    class="column easy"
                    style="
                      width: 50%;
                      border-radius: 0px 0px 150px 0px;
                      border-right: 10px solid black;
                      border-bottom: 10px solid black;
                      border-top: 10px solid black;
                    "
                  >
                    <div class="col q-pa-md">3:40</div>
                    <div class="col q-pa-md">Facil</div>
                    <div class="col q-pa-md">Nuevo</div>
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
          <p>Instrumento</p>
          <img src="src\assets\Img\SnowiPiano.png" alt="" />
        </div>

        <q-btn
          class="absolute-bottom-right bg-accent text-white my-fontAcme"
          flat
          dense
          v-close-popup
          size="20px"
          @click="detenerTodosLosAudios"
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
import { ref, defineModel } from "vue";

const toolbar = defineModel();

// Función para bajar el volumen de todos los videos
function bajarVolumenVideos() {
  var videos = document.querySelectorAll("video");
  videos.volume = 0.1;
}

document.addEventListener("DOMContentLoaded", function () {
  // Llama a la función cuando la página se carga
  bajarVolumenVideos();
});
// También puedes llamar a la función en respuesta a otras acciones, por ejemplo, un clic
document.addEventListener("click", function () {
  bajarVolumenVideos();
});
/*
function detenerTodosLosAudios() {
  var elementosDeAudio = document.querySelectorAll("audio");

  elementosDeAudio.forEach(function (elemento) {
    elemento.pause();
    elemento.currentTime = 0;
  });
} */
</script>
