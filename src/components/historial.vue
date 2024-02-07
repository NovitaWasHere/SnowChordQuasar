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
        <CardLevel
          @click="previewGame = true"
          v-for="n in 3"
          :key="n"
        ></CardLevel>
      </div>
    </div>
  </div>
  <PreviewGame v-model="previewGame"></PreviewGame>
</template>
<script setup>
import { ref } from "vue";
import CardLevel from "./CardLevel.vue";
import PreviewGame from "./PreviewGame.vue";

const previewGame = ref(false);
</script>
