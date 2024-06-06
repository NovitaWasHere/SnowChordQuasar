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
              <p class="col text-h4">{{object.nombreGuia}}</p>
              <p class="col text-h5 text-primary">{{object.parte}}</p>
              <p class="col text-subtitle1 text-secondary">
                Orientación: {{object.orientacion}}
              </p>
            </div>
          </q-img>
        </div>
        <div class="row" style="width: 80%">
          <div class="col column q-pt-xl my-fontRubik">
            <div class="col">
              <div class="column q-pa-md">
                <p class="col text-h4 my-fontAcme">
                  ¿Qué vas a aprender de esta guía?
                </p>
                <div v-for="(item, index) in object.aprendizaje" :key="index" class="col q-pl-md q-pa-md text-body2">
                  <strong>- </strong>{{ item }}
                </div>
              </div>
            </div>
            <div class="col ">
              <div class="column q-pa-md q-pt-xl">
                <p class="col text-h4 my-fontAcme">Antes de comenzar...</p>
                <div v-for="(item, index) in object.conocimientos" :key="index" class="col q-pl-md q-pa-md text-body2">
                  <strong>- </strong>{{ item }}
                </div>
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
                <div class="q-pa-md"  v-for="n in cursos"
                     :key="n">
                  <q-btn
                    color="black"
                    class="full-width"
                    :label="n.nombrePractica"
                    @click="navigateToTheory(n._id)"
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
                <p class="text-center my-fontAcme text-h4">
                  {{object.teoria[0]}}
                </p>
                <div v-for="(item, index) in object.teoria.slice(1)" :key="index + 1" class="col q-pl-md q-pa-md text-body2">
                  <p class="my-fontRubik text-body1">{{ item }}</p>
                </div>
              </div>
              <div class="col flex flex-center">
                <img
                  :src="object.imgTeoria"
                  alt=""
                  style="width: 90%"
                />
              </div>
            </div>
            <div class="q-mt-md">
              <div class="column q-pa-md">
                <p class="col text-h4 my-fontAcme">
                  {{object.cuerpo[0]}}
                </p>
                <div v-for="(item, index) in object.cuerpo.slice(1)" :key="index + 1" class="col q-pl-md q-pa-md text-body2">
                  <p class="col q-pl-md q-pt-md my-fontRubik text-body1">
                      {{item}}
                  </p>
                </div>

              </div>
            </div>
          </div>
          <div class="row q-pt-xl">
            <div class="flex flex-center">
              <img
                :src="object.imgCuerpo"
                alt=""
                class="col"
                style="max-width: 50%"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {useRoute} from "vue-router";
import api from "boot/httpSingleton";
import {onBeforeUnmount, onMounted, ref, watch} from "vue";
const api_ = api
import {useRouter} from "vue-router";

const router = useRouter();

const routes = useRoute();
const cursoCargado = ref(false);
const cursos = ref([]);
const jsonString  = routes.params.id
const jsonObject = JSON.parse(jsonString)
const id = jsonObject["$oid"];

const object = ref(null)
window.onload = function(){
  conseguirCurso()
}

watch(() => router.currentRoute.value.params, () => {
  onBeforeUnmount(() => {
    object.value = null
  });
  router.go(0);
});


function navigateToTheory(id) {
  const jsonObject = JSON.parse(id);
  // Obtiene la ruta actual sin los parámetros de la URL
  const currentPath = window.location.pathname;
  // Navega a la misma ruta pero sin el parámetro de ID
  router.push({ path: currentPath });
  // Agrega el nuevo parámetro de ID a la URL y recarga la página
  router.push('/theory/' + encodeURIComponent(JSON.stringify(jsonObject)));
}

onMounted(conseguirCurso);
onMounted(conseguirCuros);
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
async function conseguirCuros() {
  await fetch(`${api_}/cursos/all`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  })
    .then((res) => res.json())
    .then((datos) => {
      console.log(datos);
      if (!datos.exito === false) {

        cursos.value = []

        datos.datos.forEach(objeto => {
          cursos.value.push(objeto);
        });

      }
    });
}
</script>
