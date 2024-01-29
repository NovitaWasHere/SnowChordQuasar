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
              <img
                src="https://cdn-icons-png.flaticon.com/512/727/727244.png"
                alt=""
                style="width: 80px"
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
      to="/prefsGen"
      id="continuar"
      @click="habilitarDesplazamiento"
    >
      <q-icon name="fa-solid fa-arrow-right" color="black" size="5rem" />
    </q-btn>
  </div>
</template>

<script setup>
import { ref } from "vue";

let guitar = false;
let piano = false;
let diE = false;
let diM = false;
let diH = false;
let selD = false;
let selI = false;

function habilitarDesplazamiento() {
  document.body.style.overflow = "auto";
}

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
  piano = false;
  document.getElementById("botonGuitarra").style.backgroundColor =
    "rgb(61, 60, 60)";
  document.getElementById("botonPiano").style.backgroundColor =
    " rgb(255, 255, 255)";
}
function pianoSel() {
  selI = true;
  aparecer();
  piano = true;
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
</script>
