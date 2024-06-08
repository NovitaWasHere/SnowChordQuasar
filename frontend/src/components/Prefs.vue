<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="flex flex-center q-pt-md">
    <div class="flex flex-center q-pt-xl bg-dark" style="width: 80%">
      <div class="column">
        <p class="col text-h3 my-fontAcme" style="color: rgb(255, 255, 255)">
          ¿Qué instrumento deseas aprender?
        </p>
        <div class="col q-pa-md">
          <div class="flex flex-center q-pa-md">
            <q-btn
              round
              style="
                width: 170px;
                height: 170px;
                background-color: rgb(141, 109, 68);
              "
              class="border q-mr-xl"
              @click="guitarraSel()"
              id="botonGuitarra"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/1913/1913235.png"
                alt=""
                style="width: 80px"
            /></q-btn>
            <q-btn
              disable
              round
              style="
                width: 170px;
                height: 170px;
                background-color: rgb(255, 255, 255);
              "
              class="border q-ml-xl"
              @click="pianoSel()"
              id="botonPiano"
            >
              <p style="z-index:1;position: relative" class=" q-pt-md">Proximamente</p>
              <img
                src="https://cdn-icons-png.flaticon.com/512/727/727244.png"
                alt=""
                style="width: 70px"
                class=" q-pb-xl"
            /></q-btn>
          </div>
        </div>
      </div>
    </div>

    <div
      class="flex flex-center text-center q-pt-xl radius bg-dark"
      style="width: 80%"
    >
      <div class="column">
        <p class="col text-h3 my-fontAcme" style="color: rgb(255, 255, 255)">
          ¿Qué tan experimentado eres ?
        </p>
        <div class="col q-pa-md">
          <div class="flex flex-center q-pa-md">
            <q-btn
              round
              style="
                width: 170px;
                height: 170px;
                background-color: rgb(109, 226, 113);
              "
              class="q-mr-xl"
              id="botonEasy"
              @click="easySel()"
            >
              <q-icon
                name="fa-solid fa-graduation-cap"
                color="black"
                size="4rem"
              />
            </q-btn>
            <q-btn
              round
              style="
                width: 170px;
                height: 170px;
                background-color: rgb(243, 255, 15);
              "
              id="botonMedium"
              @click="mediumSel()"
            >
              <q-icon name="fa-brands fa-leanpub" color="black" size="4rem"
            /></q-btn>
            <q-btn
              round
              style="
                width: 170px;
                height: 170px;
                background-color: rgb(230, 41, 41);
              "
              class="q-ml-xl"
              id="botonHard"
              @click="hardSel()"
            >
              <q-icon
                name="fa-solid fa-fire-flame-curved"
                color="black"
                size="4rem"
            /></q-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div style="z-index: 1000; position: relative; bottom: 370px; left: 80%">
    <q-btn
      color="primary"
      rounded
      style="width: 100px; height: 100px; display: none"
      id="continuar"
      @click="crearEstudiante"
    >
      <q-icon name="fa-solid fa-arrow-right" color="black" size="5rem" />
    </q-btn>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {useQuasar} from "quasar";
import {useRouter} from "vue-router";
import api from "boot/httpSingleton";
let guitar = false;
let diE = false;
let diM = false;
let diH = false;
let selD = false;
let selI = false;

function aparecer() {
  if (selD && selI) {
    document.getElementById("continuar").style.display = "block";
    document.body.style.overflow = "hidden";
  }
}

function desSeleccionarDif() {
  selD = true;
  aparecer();
  if (diE) {
    document.getElementById("botonMedium").style.backgroundColor =
      "rgb(243, 255, 15)";
    document.getElementById("botonHard").style.backgroundColor =
      "rgb(230, 41, 41)";
  }
  if (diM) {
    document.getElementById("botonEasy").style.backgroundColor =
      "rgb(109, 226, 113)";
    document.getElementById("botonHard").style.backgroundColor =
      "rgb(230, 41, 41)";
  }
  if (diH) {
    document.getElementById("botonEasy").style.backgroundColor =
      "rgb(109, 226, 113)";
    document.getElementById("botonMedium").style.backgroundColor =
      "rgb(243, 255, 15)";
  }
}

function guitarraSel() {
  selI = true;
  aparecer();
  guitar = true;
  document.getElementById("botonGuitarra").style.backgroundColor =
    "rgb(61, 60, 60)";
  document.getElementById("botonPiano").style.backgroundColor =
    " rgb(255, 255, 255)";
}
function pianoSel() {
  selI = true;
  aparecer();
  guitar = false;
  document.getElementById("botonPiano").style.backgroundColor =
    "rgb(61, 60, 60)";
  document.getElementById("botonGuitarra").style.backgroundColor =
    "rgb(141, 109, 68)";
}
function easySel() {
  selI = true;
  diE = true;
  diM = false;
  diH = false;
  document.getElementById("botonEasy").style.backgroundColor =
    "rgb(61, 60, 60)";
  desSeleccionarDif();
}
function mediumSel() {
  diM = true;
  diE = false;
  diH = false;
  document.getElementById("botonMedium").style.backgroundColor =
    "rgb(61, 60, 60)";
  desSeleccionarDif();
}
function hardSel() {
  diH = true;
  diM = false;
  diE = false;
  document.getElementById("botonHard").style.backgroundColor =
    "rgb(61, 60, 60)";
  desSeleccionarDif();
}
let dificultadSeleccionada = 0;

if(diH){
  dificultadSeleccionada = 3
}else if(diM){
  dificultadSeleccionada = 2
}else if(diE){
  dificultadSeleccionada = 1
}
const localStorage = window.localStorage;
const user = localStorage.getItem("usuario");
if(user==null){
  window.location.href = "/#/";
}
const $q = useQuasar();
const router = useRouter();
const api_ = api
const object = ref(JSON.parse(localStorage.getItem("usuario")))
let accessData = object.value

async function crearEstudiante(){
  document.body.style.overflow = "auto";

  await fetch(`${api_}/usuarios/actStudent/${accessData._id.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "snows": 0,
      "nivel": dificultadSeleccionada,
      "inventario": ["664f01cb9d762c4ff6933e15"],
      "perfectos": 0,
      "cancionesC": 0,
      "juegos": 0,
      "faciles": 0,
      "medios": 0,
      "dificiles": 0,
      "snowiSelected":"664f01cb9d762c4ff6933e15",
      "reproducidas":[]
    })
  }).then((res) => res.json())
    .then((datos) => {
      if (!datos.exito === false)  {
        $q.notify({
          progress: true,
          message: "Inicio de sesión correcto",
          color: "positive",
          timeout: 1000,
        });
        window.location.href = "/#/prefsGen";

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
</script>
