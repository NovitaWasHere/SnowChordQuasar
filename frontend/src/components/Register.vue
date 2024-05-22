<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="flex flex-center">
    <div
      class="bg-white q-mt-xl q-mb-xl flex flex-center"
      style="width: 80%"
    >
      <div style="width: 80%">
        <q-form q-form @submit="registrar" class="q-pa-xl q-mt-xl">
          <P class=" text-h3 my-fontAcme text-center">¡ Regístrate !</P>
          <div class="row flex flex-center">
            <div class="col-6 my-fontAcme text-weight-bolder">
              <div
                class="text-justify text-body1 my-fontRubik text-weight-regular q-mt-xl"
              >
                <P class="text-justify">Nombre de Usuario</P>
              </div>
              <q-field
                :dense="dense"
                style="width: 90%"
                borderless
                hide-bottom-space
              >
                <template v-slot:prepend>
                  <q-icon name="fa-solid fa-user" class="q-ml-md" />
                </template>

                <template v-slot:control>
                  <q-input
                    filled
                    square
                    class="q-ml-md"
                    style="width: 90%"
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
                class="text-justify text-body1 my-fontRubik text-weight-regular q-mt-sm"
              >
                <P class="text-justify">Email</P>
              </div>
              <q-field
                :dense="dense"
                style="width: 90%"
                borderless
                hide-bottom-space
              >
                <template v-slot:prepend>
                  <q-icon name="fa-solid fa-envelope" class="q-ml-md" />
                </template>

                <template v-slot:control>
                  <q-input
                    filled
                    square
                    class="q-ml-md"
                    style="width: 90%"
                    type="email"
                    v-model="email"
                    label="Email"
                    lazy-rules
                    :rules="[
                    (val) =>
                      (val && val.length > 0) ||
                      'Por favor escriba su email',
                  ]"
                  />
                </template>
              </q-field>
            </div>
            <div class="col-6 flex flex-center">
              <!--
              <div class="my-fontAcme text-weight-bolder">
                <P class="text-h4">Regístrate con:</P>
              </div>
              <div style="width: 60%" class="q-ml-xl">
                <q-btn class="q-ma-sm q-ml-md"  style="width: 30%">
                  <img
                    src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                    alt=""
                    style="width: 100%"
                  />
                </q-btn>

                <q-btn class="q-ma-sm q-ml-md"  style="width: 30%">
                  <img
                    src="https://cdn3.iconfinder.com/data/icons/picons-social/57/06-facebook-512.png"
                    alt=""
                    style="width: 100%"
                  />
                </q-btn>
              </div>
              -->
              <div
                class="text-justify text-body1 my-fontRubik text-weight-regular q-mt-xl"
              >
                <P class="text-justify">Contraseña</P>
              </div>
              <q-field
                :dense="dense"
                style="width: 90%"
                borderless
                hide-bottom-space
              >
                <template v-slot:prepend>
                  <q-icon name="fa-solid fa-lock" class="q-ml-md" />
                </template>

                <template v-slot:control>
                  <q-input
                    filled
                    square
                    class="q-ml-md"
                    style="width: 90%"
                    type="password"
                    v-model="contrasena"
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
                class="text-justify text-body1 my-fontRubik text-weight-regular q-mt-sm"
              >
                <P class="text-justify">Repetir Contraseña</P>
              </div>
              <q-field
                :dense="dense"
                style="width: 90%"
                borderless
                hide-bottom-space
              >
                <template v-slot:prepend>
                  <q-icon name="fa-solid fa-lock" class="q-ml-md" />
                </template>

                <template v-slot:control>
                  <q-input
                    filled
                    square
                    class="q-ml-md"
                    style="width: 90%"
                    type="password"
                    v-model="contrasenaR"
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
            </div>
          </div>
          <div class="flex flex-center">
            <div class="flex flex-center" style="width: 50%">
              <div class="column q-mt-sm" style="width: 80%">
                <q-toggle
                  v-model="not"
                  color="accent"
                  class="col q-mt-xl"
                  keep-color
                >Quiero recibir noticias y ofertas sobre SnowChord</q-toggle
                >
              </div>
              <div class="q-pt-xl">
                <q-btn
                  size="22px"
                  class="q-px-xl q-py-xs"
                  color="primary"
                  label="Registrarse"
                  type="submit"
                />
              </div>
            </div>
          </div>
        </q-form>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue"
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";
import api from "src/boot/httpSingleton";


const usuario = ref("");
const contrasena = ref("");
const contrasenaR = ref("");
const email = ref("");
const not = ref(false);
const $q = useQuasar();
const router = useRouter();
const api_ = api
const localStorage = window.localStorage;

async function registrar() {
   if(contrasena.value === contrasenaR.value){
     await fetch(`${api_}/usuarios/agregar`, {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify({
         "nombre": usuario.value,
         "correo": email.value,
         "contra": contrasena.value,
         "noti": not.value
       })
     })
       .then((res) => res.json())
       .then((datos) => {
         console.log(datos);
         if (!datos.exito === false)  {
           $q.notify({
             progress: true,
             message: "Inicio de sesión correcto",
             color: "positive",
             timeout: 1000,
           });

           localStorage.clear();
           localStorage.setItem("usuario", JSON.stringify(datos));
           window.location.href = "/#/prefs";

         }
         else if (datos.exito === false) {
           if(datos.error === "El correo ya esta en uso"){
             $q.notify({
               progress: true,
               message: "El correo que ha ingresado ya tiene una cuenta asociada",
               color: "negative",
               timeout: 1000,
             });
           }else if(datos.error === "El correo electronico no es valido"){
             $q.notify({
               progress: true,
               message: "Se ha ingresado un caracter invalido en el correo",
               color: "negative",
               timeout: 1000,
             });
           }else{
             $q.notify({
               progress: true,
               message: "Inicio de sesión incorrecto",
               color: "negative",
               timeout: 1000,
             });
           }
         }
       });
   }else{
     $q.notify({
       progress: true,
       message: "Las contraseñas no coinciden",
       color: "negative",
       timeout: 1000,
     });
   }
}
</script>
