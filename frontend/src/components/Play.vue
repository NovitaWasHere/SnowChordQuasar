<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="flex flex-center q-pb-xl" v-if="isLoading">
    <div class="column bg-white q-mt-xl flex flex-center q-pa-md radius" style="width: 90%">
      <div
        class="col bg-primary radius q-pa-md"
        style="width: 70%"
      ><p class="my-fontAcme text-center text-h3">{{ cancion.nombre }}</p></div>
      <div class="col">
        <div class="column q-pa-sm text-center">
          <p class="col my-fontRubik text-h6">{{ cancion.artista }}</p>
          <p class="col my-fontRubik text-h6 text-secondary">{{ cancion.genero }}</p>
          <div class="col">
            <img :src="cancion.imgCancion" alt="imgCancion" style="width: 50%;border: 5px solid #E89D10"
                 class="radius"/>
          </div>
        </div>
      </div>
      <div class="col" style="width: 100%">
        <div class="row q-pa-sm flex flex-center " style="width: 100%">
          <div class="col-7 q-pa-sm text-center bg-primary radius">

            <div style="width: 100%">
              <p class="text-black my-fontRubik q-pa-xl text-h3 radius">Letra:</p>
              <div v-for="(line, index) in object.lyrics" :key="index">
                <div class="line-container">
                  <div class="text-black my-fontRubik q-pa-xl text-h6">
                    <div class="column flex- flex-center">
                      <!-- Mostrar los acordes -->
                      <div class="col text-white" style="min-width: 25%">
                         <span v-for="(chord, chordIndex) in line.chords" :key="chordIndex" class="chord">
                            {{ chord }} &nbsp;
                          </span>
                      </div>
                      <!-- Mostrar la letra -->
                      <div class="col">
                        <span class="lyrics-line">{{ line.text }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div class="col q-pa-sm " style="width: 100%">
            <div class="column">
              <div class="col flex flex-center " style="width: 100%">
                <img :src="snowi.imgSnowi" alt="imgSnowi" style="width: 40%"/>
              </div>
              <div class="col flex flex-center text-center" style="width: 100%">
                <div class="bg-accent radius" style="width: 60%">
                  <div class="column">
                    <p class="col q-mt-md my-fontAcme text-h5 text-white">Te facilito los acordes </p>
                    <div v-for="(acorde, index) in idsCoincidentes" :key="index" class="flex flex-center">
                      <div class="column">
                        <p class="col-5 text-white my-fontAcme q-pa-sm text-h6">Acorde:</p>
                        <p class="col-5 text-primary my-fontAcme q-pa-sm text-h6">{{ acorde.acorde }}
                          <q-tooltip class="bg-white" style="width: 10%">
                            <p class="text-black text-center my-fontAcme q-pa-sm text-h6">{{ acorde.nombre }}</p>
                            <img :src="acorde.imgAcorde" alt="imgAcorde" style="width: 100%"/>
                          </q-tooltip>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.chord {
  margin-right: 2em; /* Ajusta el espacio entre los acordes según sea necesario */
}
</style>
<script setup>
import {onBeforeUnmount, onMounted, ref, watch} from "vue";
import {useRoute, useRouter} from "vue-router";
import api from "boot/httpSingleton";

const api_ = api
const localStorage = window.localStorage
const user = JSON.parse(localStorage.getItem("usuario")).datos
const routes = useRoute();
const router = useRouter();
const object = ref(null)
const idCancion = ref('')
const cancion = ref(null)
const isLoading = ref(false);
const snowi = ref({})
const acordes = ref([])
const acordesCancion = ref([])
let idsCoincidentes = ref([])
const id = atob(routes.params.id)

watch(() => router.currentRoute.value.params, () => {
  onBeforeUnmount(() => {
    object.value = null
    cancion.value = null
  });
  router.go(0);
});
const loadSongs = async () => {
  try {
    const idCancion = await conseguirCanciones(api_, id);
    await conseguirSnowi()
    await conseguirAcordes()
    await cancionF(api_, idCancion);
  } catch (error) {
    console.error('Error al cargar las canciones:', error);
  } finally {
    idsCoincidentes.value = acordes.value.filter(acorde => acordesCancion.value.includes(acorde._id));
    console.log(idsCoincidentes)
    isLoading.value = true;
  }
};

onMounted(() => {
  loadSongs();
});


async function conseguirCanciones() {
  await fetch(`${api_}/lyricGames/esp/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  })
    .then((res) => res.json())
    .then((datos) => {
      object.value = null
      object.value = datos.datos
      idCancion.value = datos.datos.cancion
      acordesCancion.value = object.value.acordes
      generarLineas();
    });
}
// Función para generar las líneas de texto y acordes
const generarLineas = () => {
  object.value.lyrics.forEach(line => {
    const chords = line.linea.map(chord => chord.acorde);
    const text = line.letra;
    // Actualizar las líneas de acordes y texto
    line.chords = chords;
    line.text = text;
  });
};
async function cancionF() {
  await fetch(`${api_}/canciones/esp/${idCancion.value}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  })
    .then((res) => res.json())
    .then((datos) => {
      cancion.value = null
      cancion.value = datos.datos
    });
}

async function conseguirSnowi() {
  await fetch(`${api_}/mascotas/esp/${user.snowiSelected}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  })
    .then((res) => res.json())
    .then((datos) => {
      if (!datos.exito === false) {
        snowi.value = datos.datos
      } else {
        console.error("No encontrado snowi")
      }
    });
}

async function conseguirAcordes() {
  await fetch(`${api_}/acordes/all`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  })
    .then((res) => res.json())
    .then((datos) => {
      if (!datos.exito === false) {
        acordes.value = datos.datos
      } else {
        console.error("No encontrados los acordes")
      }
    });
}
</script>

