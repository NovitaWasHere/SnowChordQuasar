<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="bg-dark" style="width: 100%">
    <div>
      <div class="q-pa-md">
        <q-carousel
          animated
          autoplay
          v-model="slide"
          ref="carousel"
          infinite
          thumbnails="true"
        >
          <q-carousel-slide :name="1" img-src="~assets/Img/PianoCarousel.png">
            <div
              class="row float-left custom-overlay basicText q-pt-xl q-pl-xl"
            >
              <!-- -->
              <div class="col q-pr-xl">
                <div>
                  <h4 class="text-left">
                    Descubre un mundo de posibilidades en un solo acorde
                  </h4>
                </div>
                <div>
                  <h6 class="text-justify">
                    Con nuestra aplicación totalmente gratis podras aprender y
                    divertirte al mismo tiempo...
                  </h6>
                </div>
              </div>
              <!-- -->
              <div class="col center radius">
                <div class="q-pt-xl">
                  <div class="q-pt-xl">
                    <div class="q-pt-xl">
                      <q-btn
                        flat
                        class="radius"
                        color="secondary"
                        label="Empezar aventura"
                        style="width: 30%; border: 1px solid white"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="2" img-src="~assets/Img/GuitarCarousel.png">
            <div class="row custom-overlay basicText q-pt-xl q-pl-xl">
              <!-- -->
              <div class="col q-pr-xl" style="width: 20%">
                <div>
                  <h3>SnowChord se preocupa por tu diversión</h3>
                </div>
                <div>
                  <h4>
                    Con nuestras divertidas actividades musicales podras
                    aprender y avanzar de manera rapida con tu aprendizaje
                  </h4>
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
              <div class="col q-pr-xl">
                <div>
                  <h4>Tambien nos preocupamos por los expertos</h4>
                </div>
                <div>
                  <h6>
                    Aunque la aplicacion es muy amigable con los usuarios nuevos
                    en el mundo de la musica no nos olvidamos de los expertos,
                    para ellos tenemos retos increibles
                  </h6>
                </div>
                <div class="col center">
                  <q-btn
                    flat
                    class="radius"
                    color="secondary"
                    label="Aceptar Reto"
                    style="width: 30%"
                    ><q-icon class="q-pl-sm" name="arrow_forward"
                  /></q-btn>
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
</script>
