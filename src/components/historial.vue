<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="my-fontAcme bg-primary q-mt-xl" style="border: 10px solid black">
    <div style="background-color: #c39339">
      <h2 class="q-pl-xl q-pt-md q-pb-md" style="color: white">
        Últimas Canciones
      </h2>
    </div>
    <div class="flex flex-center q-mb-md">
      <div class="row" style="width: 100%">
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
</template>
<script setup>
import { ref } from "vue";
const model = ref(7);
</script>
