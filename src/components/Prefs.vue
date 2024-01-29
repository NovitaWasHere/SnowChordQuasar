<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="flex flex-center q-pt-md">
    <div class="flex flex-center q-pt-xl bg-dark" style="width: 80%">
      <div class="column">
        <p class="col text-h2 my-fontAcme" style="color: rgb(255, 255, 255)">
          ¿Qué instrumento deseas aprender?
        </p>
        <div class="col q-pa-md">
          <div class="flex flex-center q-pa-xl">
            <q-btn
              color="brown "
              round
              style="width: 200px; height: 200px"
              class="border q-mr-xl"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/1913/1913235.png"
                alt=""
                style="width: 100px"
            /></q-btn>
            <q-btn
              color="white"
              round
              style="width: 200px; height: 200px"
              class="border q-ml-xl"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/727/727244.png"
                alt=""
                style="width: 100px"
            /></q-btn>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-center q-pt-xl radius bg-dark" style="width: 80%">
      <div class="column">
        <p class="col text-h2 my-fontAcme" style="color: rgb(255, 255, 255)">
          ¿Qué tan experimentado eres ?
        </p>
        <div class="col q-pa-md">
          <div class="flex flex-center q-pa-md">
            <q-btn
              color="green"
              round
              style="width: 200px; height: 200px"
              class="border q-mr-xl"
            >
              <q-icon
                name="fa-solid fa-graduation-cap"
                color="black"
                size="4rem"
              />
            </q-btn>
            <q-btn color="yellow" round style="width: 200px; height: 200px">
              <q-icon name="fa-brands fa-leanpub" color="black" size="4rem"
            /></q-btn>
            <q-btn
              color="red"
              round
              style="width: 200px; height: 200px"
              class="border q-ml-xl"
            >
              <q-icon
                name="fa-solid fa-fire-flame-curved"
                color="black"
                size="4rem"
            /></q-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
</script>
