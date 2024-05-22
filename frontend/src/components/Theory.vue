<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div v-if="cursoCargado" class="flex flex-center">
    <div class="q-pa-xl" style="width: 90%">
      <div class="bg-primary q-pa-xl">
        <p class="text-center my-fontAcme text-h2">
         {{object.nombrePractica}}
        </p>
      </div>
      <div class="column bg-white flex flex-center q-pa-xl">
        <div
          style="border: 1px solid black; border-radius: 45px 45px 45px 45px"
          class="col"
        >
          <q-img
            src="https://aulamusical.com/content/images/2023/06/partiturareducida-.jpeg"
            style="
              border: 10px solid black;

              width: 600px;
              border-radius: 45px 45px 45px 45px;
            "
            class="q-pa-xl bg-black"
          >
            <div class="column text-justify fixed-bottom my-fontAcme">
              <p class="col text-h4">Nombre de guia</p>
              <p class="col text-h5 text-primary">Parte X</p>
              <p class="col text-subtitle1 text-secondary">
                Orientación: General
              </p>
            </div>
          </q-img>
        </div>
        <div class="row" style="width: 80%">
          <div class="col column q-pt-xl my-fontRubik">
            <div class="col">
              <div class="column q-pa-md">
                <p class="col text-h4 my-fontAcme">
                  ¿Que vas a aprender de esta guia?
                </p>
                <p class="col q-pl-md q-pt-md text-body2">
                  <strong>- </strong>Vas a aprender bla bla bla bla bla bla.
                </p>
                <p class="col q-pl-md text-body2">
                  <strong>- </strong>Vas a aprender bla bla bla bla bla bla.
                </p>
                <p class="col q-pl-md text-body2">
                  <strong>- </strong>Vas a aprender bla bla bla bla bla bla.
                </p>
              </div>
            </div>
            <div class="col">
              <div class="column q-pa-md">
                <p class="col text-h4 my-fontAcme">Antes de comenzar...</p>
                <p class="col q-pl-md q-pt-md text-body2">
                  <strong>- </strong>Tienes que saber bla bla bla bla bla bla.
                </p>
                <p class="col q-pl-md text-body2">
                  <strong>- </strong>Tienes que saber bla bla bla bla bla bla.
                </p>
                <p class="col q-pl-md text-body2">
                  <strong>- </strong>Tienes que saber bla bla bla bla bla bla.
                </p>
              </div>
            </div>
          </div>
          <div class="col-4 column q-pt-xl my-fontRubik">
            <div class="col q-pt-md">
              <div
                style="
                  border: 5px solid black;
                  border-radius: 45px 45px 45px 45px;
                "
              >
                <p class="my-fontAcme text-h5 text-center q-pt-md">
                  Todos los capitulos de este tema:
                </p>
              </div>
              <div>
                <div class="q-pa-md">
                  <q-btn
                    color="black"
                    class="full-width"
                    label="Lectura de Partituras I"
                    to="/theory"
                  />
                </div>
                <div class="q-pa-md">
                  <q-btn
                    color="black"
                    class="full-width"
                    label="Lectura de Partituras II"
                    to="/theory"
                  />
                </div>
                <div class="q-pa-md">
                  <q-btn
                    color="black"
                    class="full-width"
                    label="Lectura de Partituras III"
                    to="/theory"
                  />
                </div>
                <div class="q-pa-md">
                  <q-btn
                    color="black"
                    class="full-width"
                    label="Lectura de Partituras VI"
                    to="/theory"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="q-pt-xl flex flex-center" style="width: 100%">
          <div class="q-pa-xl" style="width: 100%">
            <p class="my-fontAcme text-h3 text-center">Teoria</p>
          </div>
          <div class="q-pl-xl" style="width: 80%">
            <div class="row">
              <div class="col-5">
                <p class="text-justify my-fontAcme text-h4">
                  Titulo de la información
                </p>
                <p class="my-fontRubik text-body1">
                  Lorem ipsum dolor sit amet,<strong> consectetur </strong
                  >adipisicing elit. Incidunt adipisci eius inventore quos omnis
                  unde illo eligendi maxime nemo veniam magni, ipsa tempore,
                  labore repellat expedita id dolorum totam itaque.
                </p>
                <p class="my-fontRubik text-body1">
                  Lorem ipsum dolor sit amet,<strong> consectetur </strong
                  >adipisicing elit. Incidunt adipisci eius inventore quos omnis
                  unde illo eligendi maxime nemo veniam magni, ipsa tempore,
                  labore repellat expedita id dolorum totam itaque.
                </p>
              </div>
              <div class="col flex flex-center">
                <img
                  src="src\assets\Img\ChordPiano.jpg"
                  alt=""
                  style="width: 80%"
                />
              </div>
            </div>
            <div class="q-mt-md">
              <div class="column q-pa-md">
                <p class="col text-h4 my-fontAcme">
                  Este elemento tiene las caracteristicas de
                </p>
                <p class="col q-pl-md q-pt-md my-fontRubik text-body1">
                  <strong>- </strong>Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Labore consequuntur quo suscipit magni quas
                  sit esse veritatis dicta quaerat voluptatem, velit facilis
                  quidem non. Dolorum eligendi voluptatum quae laudantium natus!
                </p>
                <p class="col q-pl-md my-fontRubik text-body1">
                  <strong>- </strong>Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. At minus iusto explicabo sunt doloribus,
                  iste quo sequi possimus officiis distinctio non, ea
                  dignissimos repellendus? Obcaecati corporis incidunt nihil
                  consequuntur facilis?
                </p>
                <p class="col q-pl-md my-fontRubik text-body1">
                  <strong>- </strong>Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Libero quam harum adipisci reiciendis atque
                  vero perspiciatis asperiores maiores similique. Error,
                  repellendus nulla vitae maiores non placeat consequatur ipsa
                  debitis. Hic.
                </p>
              </div>
            </div>
          </div>
          <div class="row q-pt-xl">
            <p class="col my-fontAcme text-center text-h3 q-pt-md">Do</p>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACICAMAAABqWSYLAAAACVBMVEX///8AAABNkP4tV+LPAAABR0lEQVR4nO3SQQ6CMABFQfD+h3bhBkhr+kw0mMxfVqgvE7bNzG6w3Zb2wprCzUWPvyy8Pj1/HDa79PL24YVZ0uneWfna+TUJFixYsGDBggULFixYsGDBggULFixYsGDBggULFixYsGDBggULFixYsGDBggULFixYsGDBggULFixYsGDBggULFixYsGDBggULFixYsGDBggULFixYsGDBggULFixYsGDBggULFixYsGDBggULFixYf4K1cultsca1/fArl56+w9H3+MGTw396kwQrJMEKSbBCEqyQBCskwQpJsEISrJAEKyTBCkmwQhKskAQrJMEKSbBCEqyQBCskwQpJsEISrJAEKyTBCkmwQhKskAQrJMEKSbBCEqyQBCskwQpJsEISrJAEKyTBCkmwQhKskAQrJMEKSbBCEqyQtNvShtZm9tM9AUUCViKw9Lh0AAAAAElFTkSuQmCC"
              alt=""
              class="col"
            />
          </div>
        </div>
        <div class="q-pt-xl" style="width: 100%">
          <q-btn
            color="black"
            class="full-width"
            label="Siguiente Capitulo"
            to="/theory"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {useRoute} from "vue-router";
import api from "boot/httpSingleton";
import {onMounted, ref} from "vue";
const api_ = api
import { inject } from 'vue';

const routes = useRoute();
const cursoCargado = ref(false);
const jsonString  = routes.params.id
const jsonObject = JSON.parse(jsonString)
const id = jsonObject["$oid"];
console.log(id)

const object = ref(null)
window.onload = function(){
  conseguirCurso()
}
onMounted(conseguirCurso);
async function conseguirCurso() {
  await fetch(`${api_}/cursos/esp/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  })
    .then((res) => res.json())
    .then((datos) => {
      console.log(datos);
      if (!datos.exito === false) {
        object.value = datos.datos
        cursoCargado.value = true
      }
    });
}
</script>
