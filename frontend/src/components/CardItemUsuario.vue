<template>
  <q-dialog v-model="Usuario" persistent full-width transition-show>
    <q-card class="bg-dark">
      <q-card-section class="row items-center">
        <div
          class="column bg-white flex flex-center q-pt-xl q-pb-xl"
          style="width: 100%"
        >
          <div
            class="col bg-dark"
            style="border-radius: 25px 25px 25px 25px; width: 40%"
          >
            <p class="text-h2 text-white text-center q-pt-md my-fontAcme">
              Configuración de usuario
            </p>
          </div>
          <div class="row col q-pt-xl my-fontAcme flex flex-center">
            <q-btn flat @click="iconoUser = true">
              <img :src="object.imgIcono" alt="" class="col-2" />
              <p class="col-6 text-h4 q-pt-xl q-pl-xl">Icono de usuario</p>
              <q-icon class="col-1 q-pt-lg q-pl-xl" name="edit" size="45px"
            /></q-btn>
          </div>
          <div class="q-pt-xl">
            <div class="row col q-pt-xl">
              <q-btn color="primary" @click="preferencias = true" v-close-popup>
                <p class="col-12 text-h6 q-pt-md my-fontAcme">
                  Cambiar Preferencias
                </p>
              </q-btn>
            </div>
          </div>
        </div>
      </q-card-section>
      <q-btn
        class="absolute-top-right text-white my-fontAcme q-mt-md q-mr-md"
        flat
        color="black"
        dense
        icon="close"
        v-close-popup
        size="20px"
      />
    </q-card>
  </q-dialog>
  <CardItemConfiguracionPrefs
    v-model="preferencias"
  ></CardItemConfiguracionPrefs>
  <CardItemConfiguracionUser
    v-model="iconoUser"
  ></CardItemConfiguracionUser>
</template>
<script setup>
import { ref, defineProps } from "vue";
import CardItemConfiguracionPrefs from "./CardItemConfiguracionPrefs.vue";
import CardItemConfiguracionUser from "./CardItemConfiguracionUser.vue";
const Usuario = defineModel();
const preferencias = ref(false);
const iconoUser = ref(false)


const props = defineProps({
  object: Object
})
</script>
