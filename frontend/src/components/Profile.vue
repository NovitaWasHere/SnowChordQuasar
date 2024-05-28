<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="flex flex-center my-fontAcme q-pb-xl">
    <div
      class="bg-white q-mt-xl"
      style="
        width: 60%;
        border: 5px solid black;
        border-radius: 0px 45px 45px 0px;
      "
    >
      <div class="row ">
        <div
          class="col bg-accent q-mt-xl"
          style="
            width: 30%;
            border: 5px solid black;
            border-radius: 0px 45px 45px 0px;
            color: white;
          "
        >
          <p class=" text-h3 text-center q-pa-md">{{ object.datos.nombre }}</p>
        </div>
        <div class="col flex flex-center q-pt-xl">
          <div class="flex flex-center " style="width: 20%">
            <img src="~assets/Img/LogoSnow.png" alt="" style="width: 100%"/>
          </div>
        </div>
      </div>
      <div class="column q-mt-xl">
        <div class="row">
          <div class="col flex flex-center">
            <div class=" flex flex-center">
              <div>
                <p class="text-h4">Snows</p>
                <div class="col flex flex-center">
                  <q-icon class="q-mr-md q-mb-md" name="ac_unit" size="25px"/>
                  <p class="text-h5">{{ object.datos.snows !== null ? object.datos.snows : 0 }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col flex flex-center">
            <div class="flex flex-center">
              <div>
                <p class="text-h4">Faciles</p>
                <div class="col flex flex-center">
                  <div style="width: 20px" class="bg-green q-mr-md q-mb-md radius">
                    ‎
                  </div>
                  <p class="text-h5">{{ object.datos.faciles !== null ? object.datos.faciles : 0 }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col flex flex-center">
            <div class="flex flex-center">
              <div>
                <p class="text-h4">Perfectos</p>
                <div class="col flex flex-center">
                  <q-icon class="q-mr-md q-mb-md" name="star" size="25px"/>
                  <p class="text-h5">{{ object.datos.perfectos !== null ? object.datos.perfectos : 0 }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col flex flex-center">
            <div class="flex flex-center">
              <div>
                <p class="text-h4">Medios</p>
                <div class="col flex flex-center">
                  <div style="width: 20px" class="bg-yellow  q-mr-md q-mb-md radius">
                    ‎
                  </div>
                  <p class="text-h5">{{ object.datos.medios !== null ? object.datos.medios : 0 }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col flex flex-center">
            <div class="flex flex-center">
              <div>
                <p class="text-h4">Juegos Terminados</p>
                <div class="col flex flex-center">
                  <q-icon class="q-mr-md q-mb-md" name="headset_mic" size="25px"/>
                  <p class="text-h5">{{ object.datos.juegos !== null ? object.datos.juegos : 0 }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col flex flex-center">
            <div class="flex flex-center">
              <div>
                <p class="text-h4"> Dificiles</p>
                <div class="col flex flex-center">
                  <div style="width: 20px" class="bg-red q-mr-md q-mb-md radius">
                    ‎
                  </div>
                  <p class="text-h5">{{ object.datos.dificiles !== null ? object.datos.dificiles : 0 }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {ref} from "vue";

const usuario = ref(false);

const localStorage = window.localStorage;
const user = localStorage.getItem("usuario");
const object = ref(JSON.parse(localStorage.getItem("usuario")))
</script>
