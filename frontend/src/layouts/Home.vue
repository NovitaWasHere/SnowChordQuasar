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
import api from "boot/httpSingleton";

export default {
  components: {
    HeaderS,
    HeaderSE,
    HeaderSEA,
    Footere
  },
  setup() {
    const api_ = api
    const localStorage = window.localStorage;
    const user = localStorage.getItem("usuario");
    let headerComponent = ref();
    if(user==null){
      window.location.href = "/#/";
    }else{
      const object = ref(JSON.parse(localStorage.getItem("usuario")))
      const id = object.value.datos.id
      conseguirDatos(id,object)
      headerComponent = ref(user ? 'HeaderSE' : 'HeaderS');
      let accessData = object.value.datos
      if(accessData.admin){
        headerComponent.value = "HeaderSEA"
      }

    }
    async function conseguirDatos(id,object) {
      await fetch(`${api_}/usuarios/esp/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json())
        .then((datos) => {
          if (!datos.exito === false) {
            if (!deepEqual(datos.datos, object.value.datos)) {
              localStorage.clear()
              localStorage.setItem("usuario",JSON.stringify(datos))
              window.location.reload()
            }
          }
        })
    }
    const deepEqual = (obj1, obj2) => {
      if (obj1 === obj2) return true;

      if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
        console.log("Diferencia en ->", obj1);
        return false;
      }

      let keys1 = Object.keys(obj1);
      let keys2 = Object.keys(obj2);

      if (keys1.length !== keys2.length) {
        console.log("Diferencia en ->", keys1);
        return false;
      }

      for (let key of keys1) {
        if (key === 'generos') {
          continue;
        }

        if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
          console.log("Diferencia en ->", obj1[key], obj2[key]);
          return false;
        }
      }

      return true;
    };

          return {
      headerComponent
    };
  }
}
</script>
