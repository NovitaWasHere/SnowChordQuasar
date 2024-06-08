<template>
  <q-dialog v-model="Preferencias" persistent full-width transition-show>
    <q-card class="bg-dark">
      <q-card-section class="column items-center">
        <div
          class="col column bg-white flex flex-center q-pt-xl q-pb-xl"
          style="width: 100%"
        >
          <div
            class="col"
            style="border-radius: 25px 25px 25px 25px; width: 40%"
          >
            <p class="text-h3 text-black text-center q-pt-md my-fontAcme">
              Instrumento preferido
            </p>
            <div class="flex flex-center q-pa-md">
              <q-btn
                round
                disable
                style="
                  width: 70px;
                  height: 70px;
                  background-color: rgb(141, 109, 68);
                "
                class="border q-mr-xl"
                id="botonGuitarra"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1913/1913235.png"
                  alt=""
                  style="width: 40px"
              /></q-btn>
              <q-btn
                round
                disable
                style="
                  width: 70px;
                  height: 70px;
                  background-color: rgb(255, 255, 255);
                "
                class="border q-ml-xl"
                id="botonPiano"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/727/727244.png"
                  alt=""
                  style="width: 40px"
              /></q-btn>
            </div>
          </div>
          <div
            class="col"
            style="border-radius: 25px 25px 25px 25px; width: 50%"
          >
            <p class="text-h3 text-black text-center q-pt-md my-fontAcme">
              Genero preferido
            </p>
            <div class="flex flex-center">
              <div class="row q-pa-xl flex flex-center" style="width: 80%">
                <div class="q-pa-sm">
                  <q-btn
                    disable
                    color="primary"
                    label="Pop"
                    @click="onClick"
                    rounded />
                </div>
                <div class="q-pa-sm">
                  <q-btn
                    disable
                    color="primary"
                    label="Jazz"
                    @click="onClick"
                    rounded
                  />
                </div>
                <div class="q-pa-sm">
                  <q-btn
                    disable
                    color="primary"
                    label="Clasica"
                    @click="onClick"
                    rounded
                  />
                </div>
                <div class="q-pa-sm">
                  <q-btn
                    disable
                    color="primary"
                    label="Videojuegos"
                    @click="onClick"
                    rounded
                  />
                </div>
                <div class="q-pa-sm">
                  <q-btn
                    disable
                    color="primary"
                    label="Rock"
                    @click="onClick"
                    rounded
                  />
                </div>
                <div class="q-pa-sm">
                  <q-btn
                    disable
                    color="primary"
                    label="Tecno"
                    @click="onClick"
                    rounded
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            class="col"
            style="border-radius: 25px 25px 25px 25px; width: 40%"
          >
            <p class="text-h3 text-black text-center q-pt-md my-fontAcme">
              Nivel de dificultad
            </p>
            <div class="flex flex-center q-pa-md">
              <q-btn
                disable
                round
                style="
                  width: 70px;
                  height: 70px;
                  background-color: rgb(109, 226, 113);
                "
                class="q-mr-xl"
                id="botonEasy"
                @click="easySel()"
              >
                <q-icon
                  name="fa-solid fa-graduation-cap"
                  color="black"
                  size="2rem"
                />
              </q-btn>
              <q-btn
                disable
                round
                style="
                  width: 70px;
                  height: 70px;
                  background-color: rgb(243, 255, 15);
                "
                id="botonMedium"
                @click="mediumSel()"
              >
                <q-icon name="fa-brands fa-leanpub" color="black" size="2rem"
              /></q-btn>
              <q-btn
                disable
                round
                style="
                  width: 70px;
                  height: 70px;
                  background-color: rgb(230, 41, 41);
                "
                class="q-ml-xl"
                id="botonHard"
                @click="hardSel()"
              >
                <q-icon
                  name="fa-solid fa-fire-flame-curved"
                  color="black"
                  size="2rem"
              /></q-btn>
            </div>
          </div>
          <div class="q-pt-xl">
            <div class="row col q-pt-xl">
              <q-btn color="primary" v-close-popup>
                <p class="col-12 text-h6 q-pt-md my-fontAcme">Confirmar</p>
              </q-btn>
            </div>
          </div>
        </div>
      </q-card-section>

      <q-btn
        class="absolute-top-right text-white my-fontAcme q-mt-md q-mr-md"
        flat
        color="black"
        dense
        icon="close"
        v-close-popup
        size="20px"
      />
    </q-card>
  </q-dialog>
</template>
<script setup>
const Preferencias = defineModel();
</script>
