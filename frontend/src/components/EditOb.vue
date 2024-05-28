<template>
  <q-dialog full-width transition-show>
    <q-card class="bg-primary" style="overflow-y: hidden; overflow-x: hidden">
          <q-btn
            class="absolute-top-right bg-secondary q-ma-md"
            flat
            round
            dense
            icon="close"
            v-close-popup
            size="20px"
          />
      <div>
        <form>
          <p class="q-pt-xl my-fontAcme text-h3 text-white text-center">Editando a:  <strong class="text-accent">{{props.song.nombre === undefined ? props.song.nombreGuia : props.song.nombre }}</strong></p>
          <div class="row q-pt-sm q-pm-md flex flex-center">
            <div v-for="(value, key) in props.song" :key="key" class="flex flex-center">
              <div class="column">
                <p class="my-fontAcme text-accent text-h5 col text-center"> {{ key === "_id" ? " " : key === "_cls" ?" ": key === "perfectos" ?" ": key === "creacionUser" ?" ": key === "dificiles" ?" ": key=== "medios" ?" ": key
                === "faciles" ?" ": key=== "inventario" ?" ": key=== "juegos" ?" ": key=== "snows" ?" ": key=== "cancionesC" ?" ": key === "generos" ?" ": key === "lyrics" ?" ": key}}</p>
                <q-input
                  v-if="key !== '_id' && key !== '_cls'&& key !== 'snows'&& key !== 'generos'&& key !== 'creacionUser'&& key !== 'perfectos'
                && key !== 'faciles'&& key !== 'noti'&& key !== 'admin'&& key !== 'medios'&& key !== 'dificiles'&& key !== 'inventario'&& key !== 'juegos'
                && key !== 'cancionesC' && key !== 'dificultad' && key !== 'instrumento' && key !== 'lyrics'"
                  class="col q-pa-xl"
                  filled
                  :type="key === 'contra' ? 'password' :
                key === 'nivel' ? 'number':
                key === 'correo' ? 'email':
                key === 'ad' ? 'number': 'text'"
                  v-model="formData[key]"
                  :id="key"
                  :name="key"
                  :label="key === 'contra'? 'Oculto':value"
                  :value="value"
                  lazy-rules
                  @input="updateValue(key, $event.target.value)"
                  :rules="[
                (val) =>
                (val && val.length > 0) ||
                'No puede dejar este campo vacío',
              ]"
                />
                <q-select
                  v-if="key === 'admin'"
                  class="col q-pa-xl"
                  filled
                  v-model="formData[key]"
                  :id="key"
                  :name="key"
                  :label="value"
                  :options="adminOptions"
                  lazy-rules
                  @input="updateValue(key, $event)"
                />
                <q-select
                  v-if="key === 'instrumento'"
                  class="col q-pa-xl"
                  filled
                  v-model="formData[key]"
                  :id="key"
                  :name="key"
                  :label="value"
                  :options="insOptions"
                  lazy-rules
                  @input="updateValue(key, $event)"
                />
                <q-select
                  v-if="key === 'dificultad'"
                  class="col q-pa-xl"
                  filled
                  v-model="formData[key]"
                  :id="key"
                  :name="key"
                  :label="value"
                  :options="updateValuede"
                  lazy-rules
                  @input="updateValue(key, $event)"
                />
                <q-select
                  v-if="key === 'noti'"
                  class="col q-pa-xl"
                  filled
                  v-model="formData[key]"
                  :id="key"
                  :name="value"
                  :label="value"
                  :options="notiOptions"
                  lazy-rules
                  @input="updateValue(key, $event)"
                />
              </div>
            </div>
          </div>
          <div class="flex flex-center q-pb-xl">
            <div>
              <q-btn
                size="20px"
                label="Actualizar"
                color="secondary"
                @click="actUser"
              />
            </div>
          </div>
        </form>
      </div>
    </q-card>
  </q-dialog>
</template>
<script setup>
import {defineProps, reactive, ref} from 'vue';
import {useQuasar} from "quasar";
import {useRouter} from "vue-router";
import api from "boot/httpSingleton";
const $q = useQuasar();
const router = useRouter();
const api_ = api

const formData = ref({
  nombre: '',
  correo: '',
  contra: '',
  admin: false,
  noti: false,
  nivel: 0,
});

const formDataSong = ref({
  nombre: '',
  correo: '',
  contra: '',
  admin: false,
  noti: false,
  nivel: 0,
});

const updateValue = (key, value) => {
  formData.value[key] = value;
};

const updateValuede = [
  { label: 'Facil', value: 1 },
  { label: 'Medio', value: 2 },
  { label: 'Dificil', value: 3 }
];

const notiOptions = [
  { label: 'Con notificaciones', value: true },
  { label: 'Sin notificaciones', value: false }
];

const adminOptions = [
  { label: 'Admin', value: true },
  { label: 'No Admin', value: false }
];

const insOptions = [
  { label: 'Guitarra', value: 1 },
  { label: 'Piano', value: 2 }
];

// Define los props
const props = defineProps({
  song: Object
});


async function actUser(){
  const ids = props.song._id;
  const valido = JSON.parse(ids)
  const id = valido.$oid
  await fetch(`${api_}/usuarios/actStudent/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData.value),
  })
    .then((res) => res.json())
    .then((datos) => {
      console.log(datos);
      if (!datos.exito === false)  {
        $q.notify({
          progress: true,
          message: "Datos actualizados correctamente",
          color: "positive",
          timeout: 1000,
        });
      }
      else if (datos.exito === false) {
          $q.notify({
            progress: true,
            message: "Error al actualizar",
            color: "negative",
            timeout: 1000,
          });
      }
    });
}
async function actSong(){
  const ids = props.song._id;
  const valido = JSON.parse(ids)
  const id = valido.$oid
  await fetch(`${api_}/usuarios/actStudent/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData.value),
  })
    .then((res) => res.json())
    .then((datos) => {
      console.log(datos);
      if (!datos.exito === false)  {
        $q.notify({
          progress: true,
          message: "Datos actualizados correctamente",
          color: "positive",
          timeout: 1000,
        });
      }
      else if (datos.exito === false) {
        $q.notify({
          progress: true,
          message: "Error al actualizar",
          color: "negative",
          timeout: 1000,
        });
      }
    });
}
async function actCourse(){
  const ids = props.song._id;
  const valido = JSON.parse(ids)
  const id = valido.$oid
  await fetch(`${api_}/usuarios/actStudent/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData.value),
  })
    .then((res) => res.json())
    .then((datos) => {
      console.log(datos);
      if (!datos.exito === false)  {
        $q.notify({
          progress: true,
          message: "Datos actualizados correctamente",
          color: "positive",
          timeout: 1000,
        });
      }
      else if (datos.exito === false) {
        $q.notify({
          progress: true,
          message: "Error al actualizar",
          color: "negative",
          timeout: 1000,
        });
      }
    });
}
</script>

