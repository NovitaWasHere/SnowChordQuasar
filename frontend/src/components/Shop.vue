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
              SnowCoins <strong class="q-pl-md">0</strong
              ><strong class="q-pl-sm text-primary">S</strong>
            </p>
          </div>
        </div>
      </div>
      <div class="flex flex-center q-pa-xl q-pt-xl">
        <CardItemShop v-for="n in 4" :key="n"></CardItemShop>
      </div>
    </div>
  </div>
</template>
<script setup>
import CardItemShop from "./CardItemShop.vue";
</script>
