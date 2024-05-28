<template>
  <q-card class="my-card q-mt-xl q-mb-md" style="max-width: 55%;max-height: 150px">
    <q-btn flat @click="buy = true">
      <div class="row q-pt-md">
        <div class="col">
          <img :src="img" alt="" style="width: 30%" />
        </div>
        <div class="col">
          <p class="text-justify text-h4 my-fontAcme q-pt-lg">
            {{nombre}}
          </p>
        </div>
      </div>
    </q-btn>
  </q-card>
  <CardItemBuy v-model="buy" :snowi="snowi"></CardItemBuy>
</template>
<script setup>
import {defineProps, reactive, ref} from 'vue';
import CardItemBuy from "./CardItemBuy.vue";
const buy = ref(false);
const props = defineProps({
  "img": String,
  "nombre":String,
  "snowi":Object
})
</script>
