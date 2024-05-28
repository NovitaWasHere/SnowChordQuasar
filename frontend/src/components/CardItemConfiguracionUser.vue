<template>
  <q-dialog v-model="ConfiguracionUser" persistent full-width transition-show>
    <q-card class="bg-dark">
      <q-card-section class="column items-center">
        <div class="bg-accent radius" style="width: 50%"><p class="my-fontAcme text-h3 text-white q-pa-md text-center">Escoge tu Skin </p></div>
        <div class="row q-ma-md">
          <CardSnowi
            class="col q-ma-md bg-secondary radius"
            v-for="n in snowis" :key="n" :id="n._id" :allowed="snowisArray"
            :object="n"
          />
        </div>
      </q-card-section>
      <q-btn
        class="absolute-top-right text-white my-fontAcme q-mt-md q-mr-md"
        flat
        color="white"
        dense
        icon="close"
        v-close-popup
        size="20px"
      />
    </q-card>
  </q-dialog>
</template>
<script setup>
import {onMounted, ref} from "vue";
import api from "boot/httpSingleton";
import CardSnowi from "components/CardSnowi.vue";

const api_ = api
const ConfiguracionUser = defineModel();
const snowis = ref([])
const localStorage = window.localStorage
const user = JSON.parse(localStorage.getItem("usuario")).datos
const inventarioUser = user.inventario
const snowisArray = inventarioUser
  .replace(/[\[\]]/g, '')
  .replace(/ObjectId\('/g, '')
  .replace(/'\)/g, '')
  .split(', ')
  .map(item => item.trim());


window.onload = function(){
  conseguirSnowis()
}

onMounted(conseguirSnowis);
async function conseguirSnowis() {
  await fetch(`${api_}/mascotas/all`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  })
    .then((res) => res.json())
    .then((datos) => {
      if (!datos.exito === false) {

        snowis.value = datos.datos
      }
    });
}

</script>
