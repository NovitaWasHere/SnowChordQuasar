<template>
  <q-btn :disabled="isDisabled" @click="conseguirSnowis()">
    <div class="column flex flex-center q-pa-md" style="max-width:100%;max-height: 100%">
      <p class="my-fontAcme text-h5">{{object.snowi}}</p>
      <img :src="object.imgIcono" alt="" class="col-3" style="max-width:120px"/>
      <img :src="object.imgSnowi" alt=""  class="col"  style="max-width:200px"/>
    </div>
  </q-btn>
</template>
<script setup>
import {ref, defineModel, onBeforeUnmount, computed} from "vue";
import api from "boot/httpSingleton";
const api_ = api
const props = defineProps({
  object : Object,
  id: String,
  allowed:Array
})
const validId = JSON.parse(props.id).$oid
const isDisabled = computed(() => {
  return !props.allowed.includes(validId);
});
const user = JSON.parse(localStorage.getItem("usuario")).datos
async function conseguirSnowis() {
  await fetch(`${api_}/usuarios/actStudent/${user.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "snowiSelected": validId,
    })
  })
    .then((res) => res.json())
    .then((datos) => {
      if (!datos.exito === false) {
        window.location.href= '/#/home'
        window.location.reload()
      }
    });
}
</script>
