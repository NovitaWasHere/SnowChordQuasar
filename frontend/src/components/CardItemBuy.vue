<template>
  <q-dialog v-model="buy" persistent full-width transition-show>
    <q-card class="bg-dark">
      <div class="absolute-top-right">
        <div class="bg-white q-pa-xl" style="border-radius: 0px 0px 0px 100px">
          <q-avatar size="70px">
            <img src="~assets/Img/Copo.png" />
          </q-avatar>
          <p class="text-center q-pt-md">{{user.snows}}</p>
        </div>
      </div>
      <q-card-section class="row items-center">
        <div class="row">
          <span
            ><p
              class="text-h3 text-white my-fontAcme text-center q-pa-xl bg-primary"
              style="
                border: 10px solid black;
                border-radius: 100px 0px 100px 0px;
                text-shadow: -3px -1px 1px #000000;
              "
            >
              {{snowi.snowi}}
            </p></span
          >
        </div>
      </q-card-section>

      <q-card-section>
        <div class="row">
          <div
            class="col-3 q-pt-xl bg-primary"
            style="
              border: 10px solid black;
              border-radius: 100px 0px 100px 0px;
              text-shadow: -3px -1px 1px #000000;
            "
          >
            <p class="text-h4 text-white my-fontAcme radius q-pa-xl">
              El pack viene con lo siguiente:
            </p>
          </div>
          <q-space />
          <div class="col-4 bg-black" style="border-radius: 100px 0px 0px 0px">
            <div
              class="bg-white"
              style="border: 5px solid black; border-radius: 50px 0px 100px 0px"
            >
              <div class="row radius q-ma-lg">
                <div class="col">
                  <img
                    :src="snowi.imgIcono"
                    alt=""
                    style="width: 70px"
                  />
                </div>
                <div class="col-11">
                  <p class="q-pt-lg text-h5 my-fontAcme q-pl-xl text-black">
                    Icono de perfil
                  </p>
                </div>
              </div>
              <div class="row radius q-ma-lg">
                <div class="col">
                  <img
                    :src="snowi.imgSnowi"
                    alt=""
                    style="width: 70px"
                  />
                </div>
                <div class="col-11">
                  <p class="q-pt-lg text-h5 my-fontAcme q-pl-xl text-black">
                    Skin ayudante muñeco de nieve
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="bg-black"
            style="
              border-radius: 0px 0px 275px 0px;
              text-shadow: -3px -1px 1px #000000;
            "
          >
            <p
              class="text-h4 text-white my-fontAcme text-center radius q-pa-xl"
            >
              Total de SnowCoins <strong class="q-pl-md">{{snowi.precio}}</strong
              ><strong class="q-pl-sm text-secondary">S</strong>
            </p>
            <div class="flex flex-center">
              <q-btn
                v-if="s"
                disable
                color="secondary"
                icon="check"
                label="Ya en colección"
              />
              <q-btn
                v-else-if="user.snows >= snowi.precio"
                color="primary"
                icon="local_mall"
                label="Comprar"
                @click="buySnowi()"
              />
              <q-btn
                v-else
                disable
                color="negative"
                icon="block"
                label="Saldo Insuficiente"
              />
            </div>
          </div>
        </div>
      </q-card-section>
      <q-btn
        class="absolute-bottom-right bg-primary text-white my-fontAcme"
        flat
        color="black"
        dense
        icon="close"
        v-close-popup
        size="20px"
        style="
          width: 5%;
          height: 10%;

          border-radius: 35px 0px 0px 0px;
          border: 5px solid black;
        "
      />
    </q-card>
  </q-dialog>
</template>
<script setup>
import {computed, defineProps, onMounted} from "vue";
import {useQuasar} from "quasar";
const $q = useQuasar();
const buy = defineModel();
const localStorage = window.localStorage
const user = JSON.parse(localStorage.getItem("usuario")).datos
const inventario = user.inventario
const props = defineProps({
  "snowi": Object
})
const snowisArray = inventario
  .replace(/[\[\]]/g, '')
  .replace(/ObjectId\('/g, '')
  .replace(/'\)/g, '')
  .split(', ')
  .map(item => item.trim());
const idSnowi = JSON.parse(props.snowi._id).$oid
const newSnows = user.snows - props.snowi.precio
console.log(newSnows)
const checkStringInArray = (snowisArray, idSnowi) => {
  return snowisArray.includes(idSnowi);
};
const s = checkStringInArray(snowisArray,idSnowi)
async function buySnowi(){
  await fetch(`http://127.0.0.1:3000/usuarios/actStudent/${user.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body:JSON.stringify({
      "inventario": [idSnowi],
      "snows":newSnows
    })
  })  .then((res) => res.json())
    .then((datos) => {
      if(datos.exito){
        console.log(datos)
        window.location.href = "/#/home";
        $q.notify({
          progress: true,
          message: "Compra correcta",
          color: "positive",
          timeout: 1000,
        });
      }
    })
}
</script>
