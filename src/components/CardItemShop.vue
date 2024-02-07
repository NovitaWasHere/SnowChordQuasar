<template>
  <q-card class="my-card q-mt-xl q-mb-md">
    <q-btn flat @click="buy = true">
      <div class="row q-pt-md">
        <div class="col">
          <img src="src\assets\Img\LogoSnow.png" alt="" style="width: 30%" />
        </div>
        <div class="col">
          <p class="text-justify text-h4 my-fontAcme q-pt-lg">
            Muñeco de nieve
          </p>
        </div>
      </div>
    </q-btn>
  </q-card>
  <CardItemBuy v-model="buy"></CardItemBuy>
</template>
<script setup>
import CardItemBuy from "./CardItemBuy.vue";
import { ref } from "vue";
const buy = ref(false);
</script>
