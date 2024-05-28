<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <q-layout view="hhh lpR fff" class="bg-dark">
    <component :is="headerComponent"></component>
    <q-page-container>
      <router-view />
    </q-page-container>
    <Footere></Footere>
  </q-layout>
</template>

<script>
import { ref } from 'vue';
import HeaderS from "src/components/HeaderS.vue";
import HeaderSE from "src/components/HeaderSE.vue";
import HeaderSEA from "src/components/HeaderSEA.vue";
import Footere from "src/components/Footer.vue";

export default {
  components: {
    HeaderS,
    HeaderSE,
    HeaderSEA,
    Footere
  },
  setup() {
    const localStorage = window.localStorage;
    const user = localStorage.getItem("usuario");
    const headerComponent = ref(user ? 'HeaderSE' : 'HeaderS');

    if(user){
      const object = ref(JSON.parse(localStorage.getItem("usuario")))

      let accessData = object.value.datos

      if(accessData.admin){
        headerComponent.value = "HeaderSEA"
      }else{
        headerComponent.value = "HeaderSE"
      }
    }else{
      headerComponent.value = "HeaderS"
    }

    return {
      headerComponent
    };
  }
}
</script>

