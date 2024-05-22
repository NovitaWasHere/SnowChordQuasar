<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <q-header elevated class="bg-primary text-white shadow-24">
    <q-toolbar>
      <q-toolbar-title>
        <q-btn to="/" flat>
          <div
            class="row inline q-ma-md allCenter"
            style="width: 100%; height: 70px"
          >
            <div class="q-ml-md">
              <q-avatar style="width: 80px; height: 70px">
                <img
                  src="~assets/Img/SnowiFeliz.png"
                  style="width: 120px; height: 120px"
                />
              </q-avatar>
            </div>
            <div class="q-ml-xl">
              <h3 class="my-fontRubik">SnowChord</h3>
            </div>
          </div>
        </q-btn>
      </q-toolbar-title>
<!--      <q-btn class="row inline on-left" flat>
        <q-tooltip> Idioma </q-tooltip>
        <div class="center">
          <q-avatar size="70px">
            <img src="~assets/Img/Planeta.png" />
          </q-avatar>
          <q-menu fit anchor="bottom right" self="top middle" class="q-mr-xl">
            <q-list style="min-width: 100px">
              <q-item clickable v-close-popup>
                <q-item-section>Español</q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section>Ingles</q-item-section>
              </q-item>
              <q-separator />
              <q-separator />
              <q-item clickable v-close-popup>
                <q-item-section>Ayuda &amp; Retroalimentacion</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </div>
      </q-btn>-->

      <q-btn
        @click="iniciarSesion = true"
        class="row inline float-right on-left radius"
        round
        flat
      >
        <q-tooltip> Cuenta </q-tooltip>
        <div class="center">
          <q-btn round>
            <q-avatar size="60px">
              <img src="~assets/Img/LogoSnow.png" />
            </q-avatar>
          </q-btn>
        </div>

        <div>
          <p class="basicText q-mt-md"></p>
        </div>
      </q-btn>
    </q-toolbar>
  </q-header>
  <InicioSesion v-model="iniciarSesion"></InicioSesion>
</template>
<script setup>
import { ref } from "vue";
import InicioSesion from "./InicioSesion.vue";
const iniciarSesion = ref(false);
</script>
