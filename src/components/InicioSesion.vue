<!-- eslint-disable vue/multi-word-component-names -->
<!-- Template es el equivalente a HTML para la utilizacion de etiquetas HTML -->
<template>
  <q-dialog
    v-model="model"
    class="shadow-8 radius"
    full-height
    full-width
    @hide="inicioSesion"
  >
    <q-card class="shadow-8 bg-secondary radius" round>
      <div
        class="shadow-8 bg-secondary radius absolute-center"
        style="width: 100%"
      >
        <q-card-actions>
          <q-btn
            flat
            label="X"
            v-close-popup
            class="fixed-right basicText"
            full-height
          />
        </q-card-actions>
        <!---->
        <div class="basicText">
          <div class="radius bg-secondary">
            <q-row class="row q-pa-md">
              <div class="col">
                <strong><h1 class="my-fontRubik">SnowChord</h1></strong>
                <div style="width: 90%" class="q-ml-xl">
                  <!-- Formulario-->
                  <q-form
                    @submit="onSubmit"
                    @reset="onReset"
                    class="q-gutter-md vertical-middle"
                  >
                    <!-- Nombre -->
                    <div class="row">
                      <div>
                        <img
                          src="~assets/Img/LogoSnow.png"
                          style="width: 50px; height: 50px"
                        />
                      </div>
                      <q-input
                        filled
                        class="q-ml-md"
                        style="width: 80%"
                        v-model="nombre"
                        label="Usuario *"
                        lazy-rules
                        :rules="[
                          (val) =>
                            (val && val.length > 0) ||
                            'Por favor escriba su usuario',
                        ]"
                      />
                    </div>
                    <!-- Contraseña -->
                    <div class="row">
                      <div>
                        <img
                          src="~assets/Img/Candado.png"
                          style="width: 50px; height: 50px"
                        />
                      </div>
                      <q-input
                        filled
                        class="q-ml-md"
                        style="width: 80%"
                        type="password"
                        v-model="contra"
                        label="Contraseña *"
                        lazy-rules
                        :rules="[
                          (val) =>
                            (val && val.length > 0) ||
                            'Por favor escriba su contraseña',
                        ]"
                      />
                    </div>
                    <q-toggle
                      class=""
                      size="xl"
                      v-model="shape"
                      val="xl"
                      label="Recuerdame"
                    />
                    <div>
                      <!-- Ingresar -->
                      <q-btn
                        label="Ingresar"
                        type="submit"
                        color="primary"
                        to="/home"
                      />
                    </div>
                  </q-form>
                  <!---->
                </div>
              </div>
              <div class="col-1 lad-cen allCenter q-ml-xl">
                <div
                  class="bg-primary radius"
                  style="border: 5px solid white; width: 40%; height: 100%"
                ></div>
              </div>
              <div class="col">
                <h3 class="my-fontRubik" style="color: black">
                  Inicia sesión con
                </h3>
                <div class="row justify-evenly">
                  <div class="row q-pa-md">
                    <q-col class="col q-pa-xl" padding>
                      <q-btn class="q-ma" size="35px" color="white" round>
                        <q-avatar size="50px">
                          <img
                            src="https://pbs.twimg.com/profile_images/1311763847775125516/mvBRhlDs_400x400.jpg"
                          />
                        </q-avatar>
                      </q-btn>
                    </q-col>
                    <q-col class="col q-pa-xl" padding>
                      <q-btn class="q-ma" size="35px" color="info" round>
                        <q-avatar size="50px">
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Logo_de_Facebook.png/1200px-Logo_de_Facebook.png"
                          />
                        </q-avatar>
                      </q-btn>
                    </q-col>
                  </div>
                </div>
                <h5>
                  <p>No tienes cuenta?</p>
                  <q-btn flat to="/register">
                    <p class="q-pt-md" style="color: blue">Registrate aquí</p>
                  </q-btn>
                </h5>
              </div>
            </q-row>
          </div>
        </div>
      </div>
    </q-card>
  </q-dialog>
</template>
<script setup>
import { ref, defineModel } from "vue";
const props = defineProps({
  modelValue: Boolean,
});
const model = defineModel();
const nombre = ref("");
const contra = ref("");
const shape = ref(false);
const iniciarSesion = ref(false);

function inicioSesion() {
  iniciarSesion.value = false;
}
</script>
