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
          <CardLevel v-for="n in 3" :key="n"></CardLevel>
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
                flat
                v-model="text"
                class="text-center bg-white"
                style="width: 90%"
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
import CardLevel from "./CardLevel.vue";
const model = ref(7);
</script>
