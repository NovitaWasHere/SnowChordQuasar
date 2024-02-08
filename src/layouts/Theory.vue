<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <q-layout view="hhh lpR fff" class="fondoPref">
    <HeaderSE></HeaderSE>
    <q-page-container>
      <router-view />
    </q-page-container>
    <Footer></Footer>
  </q-layout>
</template>
<script setup>
import HeaderSE from "src/components/HeaderSE.vue";
import Footer from "src/components/Footer.vue";
</script>
