<template>
  <q-dialog full-height full-width persistent v-if="loaded">
    <q-card class="bg-primary" style="overflow-y: hidden; overflow-x: hidden">
      <div>
        <!--Titulo-->
        <div
          class="bg-secondary"
          style="
            width: 70%;

            border-radius: 0px 5px 160px 0px;
            border: 3px solid black;
          "
        >
          <div
            class="bg-black no-margin"
            style="width: 55%; border-radius: 0px 5px 160px 0px"
          >
            <p
              class="text-h3 text-white my-fontAcme q-pa-xl text-weight-bolder"
              style="text-shadow: -3px -1px 1px #eab114"
            >
              {{ song.nombre }}
            </p>
          </div>
          <div class="q-pl-xl" style="width: 80%">
            <p
              class="text-h5 text-black my-fontAcme q-ml-xl q-pa-md text-weight-bolder"
              style="text-shadow: -3px -1px 1px #ffffff"
            >
              {{ song.artista }}
              <q-btn
                class="absolute-top-right bg-secondary q-ma-md"
                flat
                round
                dense
                icon="close"
                v-close-popup
                size="20px"
              />
            </p>
          </div>
        </div>
        <!--Targeta de video-->
        <div class="q-pl-xl q-pt-xl">
          <div>
            <div class="row" style="width: 70%">
              <div
                class="col bg-accent flex flex-center"
                style="border-radius: 150px 5px 15px 10px;min-width: 150px;max-width: 500px"
              >
                <img
                  :src="song.imgCancion"
                  alt=""
                  style="max-width: 50%">

              </div>
              <div
                class="col"
                style="height: 100%; text-shadow: -3px -1px 1px #000"
              >
                <div class="row text-justify text-h4 text-white my-fontAcme">
                  <div
                    class="column easy"
                    :style="{
                        backgroundColor: song.dificultad === 1 ? '#62e573' : song.dificultad === 2 ? '#dcb367' : 'red',
                    }"
                    style="width: 50%; border-bottom: 10px solid black"
                  >
                    <div
                      class="bg-accent"
                      style="
                        border-radius: 0px 0px 100px 0px;
                        border-right: 10px solid black;
                        border-top: 10px solid black;
                      "
                    >
                      <div class="col q-pa-md">Tiempo</div>
                      <div class="col q-pa-md">Dificultad</div>
                      <div class="col q-pa-md">Genero</div>
                    </div>
                  </div>
                  <div
                    class="column "
                    :style="{
                        backgroundColor: song.dificultad === 1 ? '#62e573' : song.dificultad === 2 ? '#dcb367' : 'red',
                    }"
                    style="
                      width: 50%;
                      border-radius: 0px 0px 150px 0px;
                      border-right: 10px solid black;
                      border-bottom: 10px solid black;
                      border-top: 10px solid black;
                    "
                  >
                    <div class="col q-pa-md">{{ song.tiempo }} Secs</div>
                    <div class="col q-pa-md">{{ song.dificultad == 1 ? "Facil": song.dificultad == 2 ? "Medio" : "Dificil" }}</div>
                    <div class="col q-pa-md">{{ song.genero }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          style="
            z-index: 2000;
            bottom: 350px;
            left: 1250px;
            position: relative;
            width: 250px;
          "
          class="my-fontAcme text-white text-h4 text-center"
        >
          <p>{{ song.instrumento === 1 ? "Guitarra": "Piano" }}</p>
          <img
            v-if=" loaded && song.instrumento === 1 && snowiI"
            :src="snowiI"
            alt="Guitarra"
            class="radius"
            style="width: 100%"
          />
          <img
            v-else
            src="~assets/Img/SnowiPiano.png"
            alt="Piano"
            class="radius"
            style="width: 100%"
          />
        </div>
        <q-btn
          class="absolute-bottom-right bg-accent text-white my-fontAcme"
          flat
          dense
          size="20px"
          style="
            width: 15%;
            height: 10%;
            text-shadow: -3px -1px 1px #000000;
            border-radius: 45px 0px 0px 0px;
            border: 5px solid black;
          "
          @click="actUser(song.lyrics,song._id)"
        >
          Jugar
        </q-btn>
      </div>
    </q-card>
  </q-dialog>
</template>
<script setup>
import {ref, defineProps, onMounted} from "vue";
import {useRouter} from "vue-router";
import api from "src/boot/httpSingleton";
const api_ = api
const router = useRouter()
const localStorage = window.localStorage
const user = JSON.parse(localStorage.getItem("usuario")).datos
const props = defineProps({
  song: Object
});
const snowi = ref({})
const snowiI = ref('')
const loaded = ref(false)

async function actUser(id,idCancion){
  await fetch(`${api_}/usuarios/actStudent/${user.id}`,{
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body:JSON.stringify({
      "reproducidas":[idCancion],
      "juegos": user.juegos + 1
    })
  }).then((res) => res.json())
    .then((datos) => {
      console.log(datos)
      router.push('/play/' + btoa(id))
    })
}

onMounted(conseguirSnowi);
async function conseguirSnowi() {
  await fetch(`${api_}//mascotas/esp/${user.snowiSelected}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  })
    .then((res) => res.json())
    .then((datos) => {
      if (!datos.exito === false) {
        snowi.value = datos.datos
        loaded.value = true
        snowiI.value = snowi.value.imgSnowi
      }
    });
}
</script>
