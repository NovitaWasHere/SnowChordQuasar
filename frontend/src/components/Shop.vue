<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="flex flex-center my-fontAcme q-pb-xl">
    <div class="bg-white q-mt-xl" style="width: 70%; border: 5px solid black">
      <div class="row">
        <div
          class="col-4 bg-accent q-mt-xl"
          style="
            border: 5px solid black;
            border-radius: 0px 45px 45px 0px;
            color: white;
          "
        >
          <h2 class="q-pl-xl">Tienda</h2>
        </div>
        <div class="col q-mt-xl">
          <div
            class="bg-secondary text-subtitle1 float-right"
            style="
              width: 50%;
              border: 5px solid black;
              border-radius: 45px 0px 0px 45px;
              color: white;
            "
          >
            <p class="q-pl-md q-pt-md">
              Snows <strong class="q-pl-md">{{usuario.datos.snows == null ? "0": usuario.datos.snows}}</strong
              ><strong class="q-pl-sm text-primary">S</strong>
            </p>
          </div>
        </div>
      </div>
      <div class="flex flex-center q-pa-xl q-pt-xl">
        <CardItemShop
          v-for="n in snowis"
          :key="n" :nombre="n.snowi" :img="n.imgIcono" :snowi="n"></CardItemShop>
      </div>
    </div>
  </div>
</template>
<script setup>
import CardItemShop from "./CardItemShop.vue";
import {onMounted, ref} from "vue";
const localStorage = window.localStorage
const snowis = ref([])

const usuario = JSON.parse( localStorage.getItem("usuario"))

onMounted(conseguirSnowis)

async function conseguirSnowis(){
  await fetch("http://127.0.0.1:3000/mascotas/all", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })  .then((res) => res.json())
    .then((datos) => {
      snowis.value = []
      datos.datos.forEach(x =>{
        if(x.snowi !== "Snowi Original"){
          snowis.value.push(x)
        }
      })
    })
}
</script>
