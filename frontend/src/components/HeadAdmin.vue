<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class=" border flex flex-center q-pa-md">
    <div class="q-gutter-y-md" style="width: 90%">
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="Usuarios" label="Usuarios" @click="conseguirUsers"/>
          <q-tab name="Canciones" label="Canciones" @click="conseguirSongs"/>
          <q-tab name="Cursos" label="Cursos"/>
        </q-tabs>

        <q-separator/>

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="Usuarios" >
           <div class="q-pa-md">
             <div class="text-h4 text-center my-fontAcme q-pa-md">Usuarios</div>
             <div class="row q-pt-md q-pa-md" >
               <p class="col text-justify text-weight-bolder">Accion</p>
               <p class="col text-weight-bolder">Nombre</p>
               <p class="col text-weight-bolder">Creacion usuario</p>
               <p class="col text-weight-bolder">Admin</p>
               <p class="col text-weight-bolder">Notificacion</p>
               <p class="col text-weight-bolder">Snows</p>
               <p class="col text-weight-bolder">Correo</p>
             </div>
             <div v-for="x in usuarios"
                  :key="x._id"
             >
               <div class="row  q-pa-md">
                 <q-btn round color="primary" icon="edit"  class="q-mr-lg"/>
                 <p class="col q-ml-xl q-pl-xl">{{x.nombre}}</p>
                 <p class="col ">{{formatearFecha(x.creacionUser)}}</p>
                 <p class="col">{{x.admin}}</p>
                 <p class="col">{{x.noti}}</p>
                 <p class="col">{{x.snows}}</p>
                 <p class="col">{{x.correo}}</p>
               </div>
             </div>
           </div>
          </q-tab-panel>

          <q-tab-panel name="Canciones">
            <div class="q-pa-md">
              <div class="text-h4 text-center my-fontAcme q-pa-md">Canciones</div>
            <div class="row ">
              <p class="col text-justify text-weight-bolder q-pt-md q-pa-sm">Accion</p>
              <div class="col-11 q-pl-xl">
                <div class="row  q-pt-md q-pa-sm">
                  <p class="col text-weight-bolder">Nombre</p>
                  <p class="col text-weight-bolder">instrumento</p>
                  <p class="col text-weight-bolder" style="position: relative;z-index: 1;left: 30px">tiempo</p>
                  <p class="col text-weight-bolder" style="position: relative;z-index: 1;left: 40px" >dificultad</p>
                  <p class="col text-weight-bolder" style="position: relative;z-index: 1;right: 30px">Artista</p>
                </div>
              </div>
            </div>
              <div v-for="x in canciones"
                   :key="x._id"
              >
                <div class="row text-center  q-pa-md">
                  <q-btn round color="primary" icon="edit"/>
                  <p class="col">{{x.nombre}}</p>
                  <p class="col">{{x.instrumento}}</p>
                  <p class="col">{{x.tiempo}}</p>
                  <p class="col ">{{x.dificultad}}</p>
                  <p class="col" style="white-space: nowrap;">{{x.artista}}</p>
                </div>
              </div>
            </div>
          </q-tab-panel>

          <q-tab-panel name="Cursos">
            <div class="text-h6">Movies</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </div>
</template>
<script setup>
import {useQuasar} from "quasar";
import {useRouter} from "vue-router";
import api from "src/boot/httpSingleton";
import {ref} from "vue";

const tab = ref(`data`)
const $q = useQuasar();
const router = useRouter();
const api_ = api
const usuarios = ref([]);
const canciones = ref([]);

const formatearFecha = (fechaISO) => {
  // Eliminar los últimos 12 caracteres de la fecha ISO
  return fechaISO.slice(0, -13);
};
async function conseguirUsers() {
  await fetch(`${api_}/usuarios/all`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((datos) => {
      console.log(datos);
      if (!datos.exito === false) {

        usuarios.value = []

        datos.datos.forEach(objeto => {
          usuarios.value.push(objeto);
        });
        console.log(usuarios.value[0].nombre)
      } else if (datos.exito === false) {
        $q.notify({
          progress: true,
          message: "Peticion fallida",
          color: "negative",
          timeout: 1000,
        });
      }
    });
}
async function conseguirSongs() {
  await fetch(`${api_}/canciones/all`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((datos) => {
      console.log(datos);
      if (!datos.exito === false) {

        canciones.value = []

        datos.datos.forEach(objeto => {
          canciones.value.push(objeto);
        });
      } else if (datos.exito === false) {
        $q.notify({
          progress: true,
          message: "Peticion fallida",
          color: "negative",
          timeout: 1000,
        });
      }
    });
}
async function conseguirCourse() {
  await fetch(`${api_}/usuarios/all`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((datos) => {
      console.log(datos);
      if (!datos.exito === false) {

        datos.datos.forEach(objeto => {
          usuarios.value.push(objeto);
        });
        console.log(usuarios.value[0].nombre)
      } else if (datos.exito === false) {
        $q.notify({
          progress: true,
          message: "Peticion fallida",
          color: "negative",
          timeout: 1000,
        });
      }
    });
}
</script>
