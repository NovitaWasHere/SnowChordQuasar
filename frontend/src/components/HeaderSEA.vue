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
      <q-btn style="height: 60px" flat to="/shop">
        <q-tooltip> Copos</q-tooltip>
        <div class="center">
          <q-avatar size="50px">
            <q-icon name="ac_unit" />
          </q-avatar>
          <p>{{ object.datos.snows !== null ? object.datos.snows : 0 }}</p>
        </div>
      </q-btn>
      <q-btn style="height: 60px" flat to="/admin">
        <q-tooltip> Admin</q-tooltip>
        <div class="center">
          <q-avatar size="50px">
            <q-icon name="font_download" />
          </q-avatar>
        </div>
      </q-btn>
      <q-btn style="height: 60px" flat to="/home">
        <q-tooltip> Home</q-tooltip>
        <div class="center">
          <q-avatar size="50px">
            <q-icon name="home" />
          </q-avatar>
        </div>
      </q-btn>
      <!--<q-btn class="row inline on-left" flat>
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
      -->
      <q-btn
        color="accent"
        @click="iniciarSesion = true"
        class="row q-ml-md"
        style="max-width: 300px"
      >
        <div class="center q-pr-md">
          <q-btn round>
            <q-avatar size="50px">
              <img src="~assets/Img/LogoSnow.png"/>
            </q-avatar>
          </q-btn>
        </div>
        <div>
          <p class="basicText q-mt-md" >{{object.datos.nombre}}</p>
        </div>
        <q-menu anchor="bottom start" self="top left" style="width: 300px">
          <div class="flex flex-center">
            <div class="row no-wrap q-pa-md">
              <div class="column flex flex-center">
                <div class="text-h6 text-center q-mb-md">Settings</div>
                <q-btn
                  flat
                  class="bg-accent flex flex-center"
                  style="width: 90%"
                  @click="usuario = true"
                >
                  <p class="text-justify text-white q-pt-sm">Perfil</p></q-btn
                >
                <q-btn
                  flat
                  class="bg-accent flex flex-center q-mt-sm"
                  style="width: 90%"
                  @click="ConfiguracionUser = true"
                >
                  <p class="text-justify text-white q-pt-sm">
                    Configuracion
                  </p></q-btn
                >
              </div>
              <q-separator vertical inset class="q-mx-lg"/>
              <div class="column items-center">
                <q-avatar size="72px">
                  <img src="~assets/Img/LogoSnow.png"/>
                </q-avatar>

                <div class="text-subtitle1 q-mt-md q-mb-xs">Nombre</div>

                <q-btn
                  color="accent"
                  label="Logout"
                  push
                  size="sm"
                  v-close-popup
                  @click="cerrarSesion"
                />
              </div>
            </div>
          </div>
        </q-menu>
      </q-btn>
    </q-toolbar>
  </q-header>
  <CardItemUsuario v-model="usuario"></CardItemUsuario>
  <CardItemConfiguracion v-model="ConfiguracionUser"></CardItemConfiguracion>
</template>
<script setup>
import {ref} from "vue";
import CardItemUsuario from "./CardItemUsuario.vue";
import CardItemConfiguracion from "./CardItemConfiguracion.vue";

const usuario = ref(false);
const ConfiguracionUser = ref(false);

const localStorage = window.localStorage;
const user = localStorage.getItem("usuario");
const object = ref(JSON.parse(localStorage.getItem("usuario")))
console.log(object.value.datos.nombre)
function cerrarSesion() {
  localStorage.clear()
  window.location.reload()
  window.location.href = "/#/";
}
</script>
