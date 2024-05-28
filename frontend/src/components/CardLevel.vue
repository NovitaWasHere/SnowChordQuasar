<template>
  <q-card-section v-ripple.center class="col-4 q-pa-md cursor-pointer" flat>
    <div class="col-4">
      <q-btn
        class="bg-white border radius"
        style="border: 4px solid #136066"
        flat
      >
        <div class="row">
          <div class="col">
            <div>
              <div
                :style="{
                  width: '50%',
                  position: 'relative',
                  zIndex: 1,
                  top: '50px',
                  backgroundColor: dificultad === 1 ? 'green' : dificultad === 2 ? '#dcb367' : 'red',
                  color: 'white',
                  border: '3px solid black'
              }"
              >
                {{ dificultad === 1 ? 'Facil' : dificultad === 2 ? 'Medio' : 'Dificil' }}
              </div>

              <img
                :src="imgCancion"
                alt=""
                class="q-ma-xs"
                style="border: 4px solid #136066; width: 80%"
              />
            </div>
            <div class="text-justify q-pa-xs" style="word-break: keep-all">
              <p class="text-h5 text-center text-weight-bolder">{{ nombre }}</p>
              <p class=" text-center text-body2">
                {{ artista }}
              </p>

            </div>
          </div>
          <div class="col-5 q-mt-xl q-pa-md">
            <p class="text-center text-weight-bolder text-h5">{{ instrumento === 1 ? "guitarra" : "piano" }}</p>
            <img
              v-if="instrumento === 1 && imgSnowi"
              :src="imgSnowi"
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
            <p class="q-pl-md text-subtitle1" style="color: #136066">
              <q-icon name="shutter_speed"/>
              <strong
                class="q-pl-xs q-pt-xl"
                style="position: relative; top: 3px"
              >
                {{ tiempo }} secs</strong
              >
            </p>
          </div>
        </div>
      </q-btn>
    </div>
  </q-card-section>
</template>
<script setup>
const props = defineProps(['id', 'nombre', 'artista', 'instrumento',
  'tiempo', 'dificultad', 'genero', 'imgCancion', 'imgSnowi'])
</script>
