<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <q-layout view="hhh lpR fff" class="fondoPref">
    <HeaderS></HeaderS>
    <q-page-container>
      <router-view />
    </q-page-container>
    <Footer></Footer>
  </q-layout>
</template>
<script setup>
import HeaderS from "src/components/HeaderS.vue";
import Footer from "src/components/Footer.vue";
</script>
