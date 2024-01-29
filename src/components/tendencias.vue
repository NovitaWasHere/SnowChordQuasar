<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="row flex q-mt-xl q-mb-xl">
    <div class="col flex flex-center my-fontAcme">
      <div
        class="bg-primary flex flex-center q-ml-xl"
        style="border: 10px solid black; width: 80%"
      >
        <div style="background-color: #c39339; width: 100%" class="q-mt-xl">
          <h2 class="text-justify q-pl-xl q-pt-md q-pb-md" style="color: white">
            Tendencias
          </h2>
        </div>
        <div class="column flex flex-center q-mt-xl" style="width: 80%">
          <!-- Separado -->
          <div class="col q-pa-md">
            <q-btn
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
                  <div
                    class="text-justify q-pa-xs"
                    style="word-break: break-all"
                  >
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
                  <p class="text-center q-pl-lg text-weight-bolder text-h5">
                    Piano
                  </p>
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
          <!-- Separado -->
          <div class="col q-pa-md">
            <q-btn
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
                  <div
                    class="text-justify q-pa-xs"
                    style="word-break: break-all"
                  >
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
                  <p class="text-center q-pl-lg text-weight-bolder text-h5">
                    Piano
                  </p>
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
          <!-- Separado -->
          <div class="col q-pa-md">
            <q-btn
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
                  <div
                    class="text-justify q-pa-xs"
                    style="word-break: break-all"
                  >
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
                  <p class="text-center q-pl-lg text-weight-bolder text-h5">
                    Piano
                  </p>
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
        </div>
      </div>
    </div>
    <div class="col my-fontAcme">
      <div class="bg-primary" style="border: 10px solid black; width: 70%">
        <div
          style="
            background-color: #000000;
            width: 70%;
            border-radius: 0px 0px 45px 0px;
          "
        >
          <h2 class="text-justify q-pl-md q-pt-md q-pb-xl" style="color: white">
            Buscar
          </h2>
        </div>
        <div style="width: 100%">
          <div>
            <div class="flex flex-center q-mb-md" style="width: 60%">
              <q-input
                rounded
                v-model="text"
                class="bg-white radius"
                style="width: 100%"
              >
                <q-btn color="accent" icon="search" @click="onClick" />
              </q-input>
            </div>
          </div>
        </div>
      </div>
      <div
        class="bg-primary q-mt-xl q-pb-xl"
        style="border: 10px solid black; width: 90%"
      >
        <div style="background-color: #c39339; width: 100%" class="q-mt-xl">
          <h2 class="text-center q-pt-md q-pb-md" style="color: white">
            Cursos
          </h2>
        </div>
        <div class="flex flex-center">
          <div style="width: 80%" class="bg-secondary">
            <div class="q-pa-md">
              <q-btn
                color="black"
                class="full-width"
                label="Escala Cromatica I"
              />
            </div>
            <div class="q-pa-md">
              <q-btn
                color="black"
                class="full-width"
                label="Escala Cromatica II"
              />
            </div>
            <div class="q-pa-md">
              <q-btn
                color="black"
                class="full-width"
                label="Escala Cromatica III"
              />
            </div>
            <div class="q-pa-md">
              <q-btn
                color="black"
                class="full-width"
                label="Escala Cromatica IV"
              />
            </div>
            <div class="q-pa-md">
              <q-btn
                color="black"
                class="full-width"
                label="Lectura de Partituras I"
              />
            </div>
            <div class="q-pa-md">
              <q-btn
                color="black"
                class="full-width"
                label="Lectura de Partituras II"
              />
            </div>
            <div class="q-pa-md">
              <q-btn
                color="black"
                class="full-width"
                label="Lectura de Partituras III"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const model = ref(7);
</script>
