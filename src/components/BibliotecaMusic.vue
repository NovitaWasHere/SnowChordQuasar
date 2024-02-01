<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div
      class="flex flex-center"
      style="width: 100%; background-color: rgba(255, 255, 255, 0.099)"
    >
      <div style="width: 100%; background-color: rgba(255, 255, 255, 0.649)">
        <p
          class="q-pt-xl text-center text-h3 my-fontAcme text-uppercase"
          style="color: rgb(0, 0, 0)"
        >
          Biblioteca
        </p>
      </div>
    </div>
    <div class="column bg-white q-pa-xl my-fontAcme">
      <div class="col text-center text-h5">
        <div class="flex flex-center row q-pt-xl">
          <div class="col-6">
            <p>
              La aplicación se adaptará a tus gustos y te hará descubrir un
              nuevo mundo de canciones que probablemente tambien te gusten.
            </p>
          </div>
        </div>
        <div class="flex flex-center row q-pt-xl">
          <div class="col-1">
            <q-icon name="fa-solid fa-heart" size="70px" />
          </div>
          <div class="col-6">
            <p>
              Tendrás una lista de reproduccion privada en la cual podrás
              guardar tus niveles favoritos
            </p>
          </div>
        </div>
        <div class="flex flex-center row q-pt-xl">
          <div class="col-1">
            <q-icon name="fa-solid fa-user-group" size="70px" />
          </div>
          <div class="col-6">
            <p>
              Tienes la opción de compartir y valorar listas de reproduccion
              hechas por la comunidad de SnowChord
            </p>
          </div>
        </div>
        <div class="flex flex-center row q-pt-xl">
          <div class="col-1">
            <q-icon name="fa-solid fa-chart-simple" size="70px" />
          </div>
          <div class="col-6">
            <p>
              Veras en tiempo real los mayores records de las canciones que
              reproduzcas
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="row bg-white q-pa-xl">
      <div class="col-6 q-mt-xl">
        <img src="~assets/Img/vinilo.png" alt="" style="width: 70%" />
      </div>
      <div class="col-4">
        <div class="column q-pa-xl text-center my-fontRubik flex flex-center">
          <div class="col-6 text-h3">
            Podras aprender en 3 dificultades distintas
          </div>
          <div
            class="col-4 q-pa-md q-mt-xl"
            style="
              background-color: rgb(128, 211, 101);
              border: 2px solid black;
              width: 50%;
            "
          >
            Principiante
          </div>
          <div
            class="col-4 q-pa-md q-mt-xl"
            style="
              background-color: rgb(197, 217, 85);
              border: 2px solid black;
              width: 50%;
            "
          >
            Conocedor
          </div>
          <div
            class="col-4 q-pa-md q-mt-xl"
            style="
              background-color: rgb(209, 111, 111);
              border: 2px solid black;
              width: 50%;
            "
          >
            Avanzado
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
