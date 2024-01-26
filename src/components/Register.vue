<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="flex flex-center">
    <div
      class="bg-white q-pa-xl q-mt-xl q-mb-xl flex flex-center"
      style="width: 80%"
    >
      <div class="" style="width: 80%">
        <div class="q-pa-md q-mt-xl">
          <div class="column flex flex-center">
            <div class="text-h3 my-fontAcme text-weight-bolder">
              <P>Regístrate con:</P>
            </div>
            <div>
              <div>
                <q-btn class="q-ma-xl">
                  <img
                    src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                    alt=""
                    style="width: 70px"
                  />
                </q-btn>

                <q-btn class="q-ma-xl">
                  <img
                    src="https://cdn3.iconfinder.com/data/icons/picons-social/57/06-facebook-512.png"
                    alt=""
                    style="width: 70px"
                  />
                </q-btn>
              </div>
            </div>
            <div class="text-h3 my-fontAcme text-weight-bolder">
              <P>Regístrate con email:</P>
            </div>
            <div
              class="text-justify text-body1 my-fontRubik text-weight-regular q-mt-xl"
            >
              <P class="text-justify">Nombre de Usuario</P>
            </div>

            <q-field
              :dense="dense"
              style="width: 50%"
              borderless
              hide-bottom-space
            >
              <template v-slot:prepend>
                <q-icon name="fa-solid fa-user" class="q-ml-xl" />
              </template>

              <template v-slot:control>
                <q-input
                  filled
                  square
                  class="q-ml-md"
                  style="width: 80%"
                  type="text"
                  v-model="usuario"
                  label="Nombre de Usuario"
                  lazy-rules
                  :rules="[
                    (val) =>
                      (val && val.length > 0) ||
                      'Por favor escriba su contraseña',
                  ]"
                />
              </template>
            </q-field>

            <div
              class="text-justify text-body1 my-fontRubik text-weight-regular q-mt-xl"
            >
              <P class="text-justify">Email</P>
            </div>
            <q-field
              :dense="dense"
              style="width: 50%"
              borderless
              hide-bottom-space
            >
              <template v-slot:prepend>
                <q-icon name="fa-solid fa-envelope" class="q-ml-xl" />
              </template>

              <template v-slot:control>
                <q-input
                  filled
                  square
                  class="q-ml-md"
                  style="width: 80%"
                  type="text"
                  v-model="email"
                  label="Email"
                  lazy-rules
                  :rules="[
                    (val) =>
                      (val && val.length > 0) ||
                      'Por favor escriba su contraseña',
                  ]"
                />
              </template>
            </q-field>

            <div
              class="text-justify text-body1 my-fontRubik text-weight-regular q-mt-xl"
            >
              <P class="text-justify">Contraseña</P>
            </div>
            <q-field
              :dense="dense"
              style="width: 50%"
              borderless
              hide-bottom-space
            >
              <template v-slot:prepend>
                <q-icon name="fa-solid fa-lock" class="q-ml-xl" />
              </template>

              <template v-slot:control>
                <q-input
                  filled
                  square
                  class="q-ml-md"
                  style="width: 80%"
                  type="text"
                  v-model="contraseña"
                  label="Contraseña"
                  lazy-rules
                  :rules="[
                    (val) =>
                      (val && val.length > 0) ||
                      'Por favor escriba su contraseña',
                  ]"
                />
              </template>
            </q-field>

            <div
              class="text-justify text-body1 my-fontRubik text-weight-regular q-mt-xl"
            >
              <P class="text-justify">Repetir Contraseña</P>
            </div>
            <q-field
              :dense="dense"
              style="width: 50%"
              borderless
              hide-bottom-space
            >
              <template v-slot:prepend>
                <q-icon name="fa-solid fa-lock" class="q-ml-xl" />
              </template>

              <template v-slot:control>
                <q-input
                  filled
                  square
                  class="q-ml-md"
                  style="width: 80%"
                  type="text"
                  v-model="contraseñaR"
                  label="Repetir Contraseña"
                  lazy-rules
                  :rules="[
                    (val) =>
                      (val && val.length > 0) ||
                      'Por favor escriba su contraseña',
                  ]"
                />
              </template>
            </q-field>
            <div class="column q-mt-xl" style="width: 50%">
              <q-toggle
                v-model="not"
                color="accent"
                class="col q-mt-xl"
                keep-color
                >Quiero recibir noticias y ofertas sobre SnowChord</q-toggle
              >
              <q-toggle
                v-model="comp"
                color="accent"
                class="col q-mt-xl q-mb-xl"
                keep-color
                >Compartir mis datos de registro con los proveedores de
                contenido de SnowChord para fines de marketing. Ten en cuenta
                que tus datos pueden ser transferidos a un país fuera del EEE,
                tal y como se describe en nuestra Política de
                Privacidad.</q-toggle
              >
            </div>
            <div class="q-pt-xl">
              <q-btn
                size="22px"
                class="q-px-xl q-py-xs"
                color="primary"
                label="Registrarse"
                to="/prefs"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const usuario = ref("");

const contraseña = ref("");

const contraseñaR = ref("");

const email = ref("");

const not = ref(false);
const comp = ref(false);
</script>
