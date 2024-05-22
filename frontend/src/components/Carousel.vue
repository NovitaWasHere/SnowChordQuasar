<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div v-if="loading" class="loading-screen bg-dark basicText">
    <!-- Puedes personalizar esta pantalla de carga según tus necesidades -->
    <div class="col q-pa-md">
      <div class="column items-center">
        <div class="col">
          <img src="~assets/Img/SnowiFeliz.png" alt="" />
        </div>
        <div class="col">
          <q-circular-progress
            indeterminate
            rounded
            size="50px"
            color="primary"
          />
        </div>
      </div>
    </div>
  </div>

  <div class="bg-dark" style="width:100%">
    <div>
      <div class="q-pa-md flex flex-center">
        <q-carousel
          animated
          autoplay
          v-model="slide"
          ref="carousel"
          infinite
          navigation
          v-show="!loading"
          style="width: 80%"
        >
          <q-carousel-slide :name="1" img-src="~assets/Img/PianoCarousel.png">
            <div
              class="row float-left custom-overlay basicText q-pt-xl q-pl-xl"
            >
              <!-- -->
              <div class="col q-pr-xl q-pt-xl">
                <div>
                  <p class="text-left text-h4">
                    Descubre un mundo de posibilidades en un solo acorde
                  </p>
                </div>
                <div>
                  <p class="text-justify text-body1">
                    Con nuestra aplicación totalmente gratis podras aprender y
                    divertirte al mismo tiempo...
                  </p>
                </div>
              </div>
              <!-- -->
              <div class="col center radius">
                <div class="q-pt-xl">
                  <div class="q-pt-xl">
                    <div class="col flex flex-center q-mt-xl">
                      <q-btn-group
                        push
                        spread
                        class="bg-secondary"
                        style="border: 1px solid rgb(211, 148, 39); width: 50%"
                      >
                        <q-btn
                          push
                          class="radius"
                          color="secondary"
                          text-color="black"
                          label="Empezar Aventura"
                          style="width: 30%"
                        ><q-icon class="q-pl-sm" name="arrow_forward"
                        /></q-btn>
                      </q-btn-group>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="2" img-src="~assets/Img/GuitarCarousel.png">
            <div class="row custom-overlay basicText q-pt-xl q-pl-xl">
              <!-- -->
              <div class="col q-pr-xl q-pt-xl" style="width: 10%">
                <div class="q-pt-md">
                  <div>
                    <p class="text-h4">SnowChord se preocupa por tu diversión</p>
                  </div>
                  <div>
                    <p class="text-body1">
                      Con nuestras divertidas actividades musicales podras
                      aprender y avanzar de manera rapida con tu aprendizaje
                    </p>
                  </div>
                </div>
              </div>
              <!-- -->
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="3" img-src="~assets/Img/ProfCarousel.jpg">
            <div
              class="row float-left custom-overlay basicText q-pt-xl q-pl-xl"
            >
              <!-- -->
              <div class="col q-pr-xl q-pt-xl">
                <div>
                  <p class="text-h4">Tambien nos preocupamos por los expertos</p>
                </div>
                <div>
                  <p class="text-body1">
                    Aunque la aplicacion es muy amigable con los usuarios nuevos
                    en el mundo de la musica no nos olvidamos de los expertos,
                    para ellos tenemos retos increibles
                  </p>
                </div>
                <div class="col flex flex-center q-mt-xl">
                  <q-btn-group
                    push
                    spread
                    class="bg-secondary"
                    style="border: 1px solid rgb(211, 148, 39); width: 20%"
                  >
                    <q-btn
                      push
                      class="radius"
                      color="secondary"
                      text-color="black"
                      label="Aceptar Reto"
                      style="width: 30%"
                    ><q-icon class="q-pl-sm" name="arrow_forward"
                    /></q-btn>
                  </q-btn-group>
                </div>
              </div>
              <!-- -->
            </div>
          </q-carousel-slide>
        </q-carousel>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const slide = ref(false);
let loading = true;
// Simula una carga de 5 segundos antes de mostrar el carousel
setTimeout(() => {
  loading = false;
}, 100);
</script>
<style>
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000; /* Asegura que la pantalla de carga esté sobre el contenido */
}
</style>
