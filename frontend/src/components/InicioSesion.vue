<!-- eslint-disable vue/multi-word-component-names -->
<!-- Template es el equivalente a HTML para la utilizacion de etiquetas HTML -->
<template>
  <q-dialog v-model="model" class="shadow-8 radius" transition-show="rotate">
    <q-card class="shadow-8 bg-secondary radius" round>
      <div
        class="shadow-8 bg-secondary radius q-pa-xl"
        style="width: 100%"
      >
        <div class="basicText">
          <div class="absolute-top-right" style="width: 100%">
            <q-card-actions>
              <q-btn
                flat
                label="X"
                v-close-popup
                class="basicText"
                text-color="black"
              />
            </q-card-actions>
          </div>
          <q-form q-form @submit="iniciarSesion" class="radius bg-secondary">
            <div class="row q-pa-md">
              <div class="col">
                <strong><p class=" text-h2 my-fontAcme">SnowChord</p></strong>
                <div style="width: 90%" class="q-ml-xl">
                  <!-- Formulario-->
                  <div
                    @submit="onSubmit"
                    @reset="onReset"
                    class="q-gutter-md vertical-middle"
                  >
                    <!-- Nombre -->
                    <div class="row q-pt-xl q-pr-xl q-pm-md">
                      <div class="col q-pr-xl">
                        <img
                          src="~assets/Img/LogoSnow.png"
                          style="width: 50px; height: 50px"
                        />
                      </div>
                      <q-input
                        filled
                        type="email"
                        class="q-ml-md col-10 q-pr-md"
                        style="width: 80%"
                        v-model="correo"
                        label="Correo"
                        lazy-rules
                        :rules="[
                          (val) =>
                            (val && val.length > 0) ||
                            'Por favor escriba su usuario',
                        ]"
                      />
                    </div>
                    <!-- Contraseña -->
                    <div class="row q-pt-xl q-pr-xl q-pm-md">
                      <div class="col q-pr-xl">
                        <img
                          src="~assets/Img/Candado.png"
                          style="width: 50px; height: 50px"
                        />
                      </div>
                      <q-input
                        filled
                        class="q-ml-md col-10 q-pr-md"
                        style="width: 80%"
                        type="password"
                        v-model="contra"
                        label="Contraseña"
                        lazy-rules
                        :rules="[
                          (val) =>
                            (val && val.length > 0) ||
                            'Por favor escriba su contraseña',
                        ]"
                      />
                    </div>
                    <div class="flex flex-center q-mr-xl">
                      <div class="column">
                        <q-toggle
                          class="col text-body1"
                          size="xl"
                          v-model="remember"
                          val="xl"
                          label="Recuerdame"
                        />
                        <div class="col">
                          <!-- Ingresar -->
                          <q-btn
                            label="Ingresar"
                            type="submit"
                            color="primary"
                          />
                        </div>
                        <div class="col q-pt-md">
                          <q-btn
                            to="/register" flat>
                            <p
                              class="text-body1"
                              style="text-decoration-line: underline"

                            >Registrarse</p>
                          </q-btn>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </q-form>
        </div>
      </div>
    </q-card>
  </q-dialog>
</template>
<script setup>
import {ref, defineModel, onBeforeUnmount} from "vue";
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";
import api from "src/boot/httpSingleton";


const $q = useQuasar();
const router = useRouter();
const api_ = api
const localStorage = window.localStorage;

const model = defineModel();
const correo = ref("");
const contra = ref("");
const remember = ref(false);

async function iniciarSesion() {
    await fetch(`${api_}/usuarios/auth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "correo": correo.value,
        "contra": contra.value
      })
    })
      .then((res) => res.json())
      .then((datos) => {
        console.log(datos);
        let datoss = ref(JSON.stringify(datos))
        console.log(datoss.value)
        if (!datos.exito === false)  {
          $q.notify({
            progress: true,
            message: "Inicio de sesión correcto",
            color: "positive",
            timeout: 1000,
          });

          localStorage.clear();

          if(remember.value){
            localStorage.setItem("MantenerSesion","Si")
          }else {
            localStorage.setItem("MantenerSesion","No")
          }
          localStorage.setItem("usuario", JSON.stringify(datos));
          window.location.href = "/#/home";

        }
        else if (datos.exito === false) {
          if(datos.error === "Usuario no encontrado"){
            $q.notify({
              progress: true,
              message: "El correo o contraseña que ha sido ingresado es incorrecto",
              color: "negative",
              timeout: 1000,
            });
          }else if(datos.error === "Contraseña incorrecta"){
            $q.notify({
              progress: true,
              message: "Contraseña incorrecta",
              color: "negative",
              timeout: 1000,
            });
          }else{
            $q.notify({
              progress: true,
              message: "Inicio de sesión incorrecto",
              color: "negative",
              timeout: 1000,
            })
          }
        }
      });
}
//onBeforeUnmount(() => {
  //Si no guardar sesion en cookie
//localStorage.clear();
//});

</script>
