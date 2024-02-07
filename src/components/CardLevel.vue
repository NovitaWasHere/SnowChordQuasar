<template>
  <q-card-section v-ripple.center class="col-4 q-pa-md cursor-pointer" flat>
    <div class="col-4">
      <q-btn
        @click="play"
        class="bg-white border radius"
        style="border: 4px solid #136066"
        flat
      >
        <div class="row">
          <div class="col">
            <div>
              <div
                style="
                  width: 50%;
                  position: relative;
                  z-index: 1;
                  top: 50px;
                  background-color: #dcb367;
                  color: white;
                  border: 3px solid black;
                "
              >
                Intermedio
              </div>
              <img
                src="~assets/Img/phoenix.png"
                alt=""
                class="q-ma-xs"
                style="border: 4px solid #136066; width: 100%"
              />
            </div>
            <div class="text-justify q-pa-xs" style="word-break: break-all">
              <p class="q-pl-md text-h5 text-weight-bolder">Phoenix</p>
              <p class="q-pl-md text-h6">
                <strong>League of legends</strong>
              </p>
              <p class="q-pl-md text-subtitle1" style="color: #136066">
                <q-icon name="shutter_speed" /><strong
                  class="q-pl-xs q-pt-xl"
                  style="position: relative; top: 3px"
                >
                  3:22</strong
                >
              </p>
            </div>
          </div>
          <div class="col-5 q-pa-xl">
            <p class="text-center q-pl-lg text-weight-bolder text-h5">Piano</p>
            <img
              src="~assets/Img/SnowiPiano.png"
              alt=""
              class="radius q-ml-md"
              style="width: 100%"
            />
          </div>
        </div>
        <q-slider
          v-model="model"
          :min="0"
          :max="10"
          color="accent"
          track-size="21px"
          readonly
          style="width: 95%"
        />
      </q-btn>
    </div>
    <audio src="src\assets\Audio\Phoenix-Piano.mp3" id="audio" />
    <q-slide-transition>
      <div v-show="model" class="text-subtitle2 text-azul-oscuro">
        {{ contenidoItem }}
      </div>
    </q-slide-transition>
  </q-card-section>
</template>
<script setup>
/*
function play() {
  document.getElementById("audio").currentTime = 100;
  document.getElementById("audio").volume = 0.4;
  document.getElementById("audio").play();
  setTimeout(() => {
    document.getElementById("audio").pause();
  }, 20000);
}
function detenerTodosLosAudios() {
  var elementosDeAudio = document.querySelectorAll("audio");

  elementosDeAudio.forEach(function (elemento) {
    elemento.pause();
    elemento.currentTime = 0;
  });
}*/
</script>
