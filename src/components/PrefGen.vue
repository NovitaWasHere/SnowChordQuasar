<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="flex flex-center q-pt-md">
    <div class="bg-dark" style="width: 70%">
      <h3 class="my-fontAcme text-center" style="color: white">
        Nos gustaría que nos contaras sobre tus gustos musicales
      </h3>
      <div class="row">
        <div class="col-3">
          <q-img
            src="~assets/Img/SnowiFeliz.png"
            spinner-color="primary"
            spinner-size="82px"
            style="width: 90%"
          />
        </div>
        <div class="col-6 flex flex-center my-fontAcme" style="width: 60%">
          <div
            class="bg-white radius"
            style="
              width: 80%;
              margin-left: 50px;
              color: brown;
              border: 5px solid rgb(238, 191, 22);
            "
          >
            <h6 class="text-center q-pa-xs">
              Escoge 3 preferencias musicales para recomendarte contenido de tu
              agrado
            </h6>
          </div>
          <div class="column">
            <div class="col q-pa-md">
              <q-btn
                style="
                  width: 140px;
                  height: 70px;
                  background-color: rgb(255, 255, 255);
                "
                class="q-ml-xl"
                id="clasica"
                @click="seleccionadoStyle"
              >
                <p>CLASICA</p>
              </q-btn>
              <q-btn
                style="
                  width: 140px;
                  height: 70px;
                  background-color: rgb(255, 255, 255);
                "
                class="q-ml-xl"
                id="rock"
                @click="seleccionadoStyle"
              >
                <p>ROCK</p>
              </q-btn>
              <q-btn
                style="
                  width: 140px;
                  height: 70px;
                  background-color: rgb(255, 255, 255);
                "
                class="q-ml-xl"
                id="jazz"
                @click="seleccionadoStyle"
              >
                <p>JAZZ</p>
              </q-btn>
            </div>
            <div class="col q-pa-md">
              <q-btn
                style="
                  width: 140px;
                  height: 70px;
                  background-color: rgb(255, 255, 255);
                "
                class="q-ml-xl"
                id="pop"
                @click="seleccionadoStyle"
              >
                <p>POP</p>
              </q-btn>
              <q-btn
                style="
                  width: 140px;
                  height: 70px;
                  background-color: rgb(255, 255, 255);
                "
                class="q-ml-xl"
                id="tecno"
                @click="seleccionadoStyle"
              >
                <p>TECNO</p>
              </q-btn>
              <q-btn
                style="
                  width: 140px;
                  height: 70px;
                  background-color: rgb(255, 255, 255);
                "
                class="q-ml-xl"
                id="videojuegos"
                @click="seleccionadoStyle"
              >
                <p>VIDEOJUEGOS</p>
              </q-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div style="z-index: 1000; position: relative; bottom: 250px; left: 80%">
    <q-btn
      color="primary"
      rounded
      style="width: 100px; height: 100px; display: none"
      to="/home"
      id="continuar"
      @click="habilitarDesplazamiento"
    >
      <q-icon name="fa-solid fa-arrow-right" color="black" size="5rem" />
    </q-btn>
  </div>
</template>
<script setup>
const gustos = [];
let maxGustos = 3;
function habilitarDesplazamiento() {
  document.body.style.overflow = "auto";
}

function aparecer() {
  document.getElementById("continuar").style.display = "block";
  document.body.style.overflow = "hidden";
}
function seleccionadoStyle(event) {
  const boton = event.currentTarget;
  const textoBoton = boton.innerText;
  boton.style.backgroundColor = "black";
  boton.style.color = "white";
  if (gustos.length === maxGustos - 1) {
    aparecer();
  }

  if (gustos.length === maxGustos) {
    console.log(gustos[2]);
    const botonEncontrado = encontrarBotonPorTexto(gustos[2]);
    botonEncontrado.style.backgroundColor = "white";
    botonEncontrado.style.color = "black";
    //console.log("boton encontrado = " + botonEncontrado);
    gustos.pop();
  }
  gustos.unshift(textoBoton);
  //console.log("Gustos:", gustos);
}
function encontrarBotonPorTexto(texto) {
  const botones = document.querySelectorAll(".q-btn");
  // Ajusta el selector según tu estructura

  for (const boton of botones) {
    const textoBoton = boton.querySelector("p").textContent.trim();
    //console.log(textoBoton);
    if (textoBoton === texto) {
      return boton;
    }
  }

  // Si no se encuentra ningún botón con el texto deseado
  return null;
}
</script>
