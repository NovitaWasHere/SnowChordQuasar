<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <q-header elevated class="bg-primary text-white shadow-24">
    <q-toolbar>
      <q-toolbar-title>
        <q-btn to="/" flat>
          <q-row
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
          </q-row>
        </q-btn>
      </q-toolbar-title>
      <q-btn style="height: 60px" flat>
        <q-tooltip> Copos </q-tooltip>
        <div class="center">
          <q-avatar size="50px">
            <img src="~assets/Img/Copo.png" />
          </q-avatar>
          <p>0</p>
        </div>
      </q-btn>
      <q-btn class="row inline on-left" flat>
        <q-tooltip> Idioma </q-tooltip>
        <div class="center">
          <q-avatar size="50px">
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
      </q-btn>
      <q-btn
        color="positive"
        @click="iniciarSesion = true"
        class="row inline float-right on-left"
      >
        <div class="center q-pr-md">
          <q-btn round>
            <q-avatar size="50px">
              <img src="~assets/Img/LogoSnow.png" />
            </q-avatar>
          </q-btn>
        </div>
        <div>
          <p class="basicText q-mt-md">Nombre del Usuario</p>
        </div>
        <q-menu class="border">
          <div class="row no-wrap q-pa-md">
            <div class="column">
              <div class="text-h6 q-mb-md">Settings</div>
              <q-btn flat>
                <q-avatar>
                  <img src="~assets/Img/LogoSnow.png" />
                </q-avatar>
              </q-btn>
              <q-btn flat>
                <q-avatar>
                  <img src="~assets/Img/LogoSnow.png" />
                </q-avatar>
              </q-btn>
            </div>
            <q-separator vertical inset class="q-mx-lg" />
            <div class="column items-center">
              <q-avatar size="72px">
                <img src="https://cdn.quasar.dev/img/avatar4.jpg" />
              </q-avatar>

              <div class="text-subtitle1 q-mt-md q-mb-xs">Nombre</div>

              <q-btn
                color="accent"
                label="Logout"
                push
                size="sm"
                v-close-popup
              />
            </div>
          </div>
        </q-menu>
      </q-btn>
    </q-toolbar>
  </q-header>
  <InicioSesion v-model="iniciarSesion"></InicioSesion>
</template>
<script setup>
import { ref } from "vue";

const mobileData = ref(false);
const bluetooth = ref(false);
</script>
