<template>
  <q-dialog v-model="ConfiguracionUser" persistent full-width transition-show>
    <q-card class="bg-dark">
      <q-card-section class="column items-center">
        <div
          class="col column bg-white flex flex-center q-pt-xl q-pb-xl"
          style="width: 100%"
        >
          <div
            class="col"
            style="border-radius: 25px 25px 25px 25px; width: 40%"
          >
            <p class="text-h2 text-black text-center q-pt-md my-fontAcme">
              Configuración
            </p>
            <p class="text-h3 text-black text-center q-pt-xl my-fontAcme">
              Volumen
            </p>
            <q-item>
              <q-item-section side>
                <q-icon name="volume_down" />
              </q-item-section>
              <q-item-section>
                <q-slider v-model="volume" :min="0" :max="10" label />
              </q-item-section>
              <q-item-section side>
                <q-icon name="volume_up" />
              </q-item-section>
            </q-item>
          </div>
        </div>
        <div
          class="col column bg-white flex flex-center q-pt-xl q-pb-xl"
          style="width: 100%"
        >
          <div
            class="row"
            style="border-radius: 25px 25px 25px 25px; width: 80%"
          >
            <div class="col q-pa-md">
              <div class="column">
                <q-checkbox v-model="val" class="col"
                  >Reproducir Clip pre-game</q-checkbox
                >
                <q-checkbox v-model="val" class="col"
                  >Ocultar contenido Explicito</q-checkbox
                >
              </div>
            </div>
            <div class="col q-pa-md flex flex-center">
              <div class="q-pa-sm">
                <q-btn v-model="val" style="width: 100%">
                  <q-icon name="edit" class="q-pr-sm" />Editar Usuario</q-btn
                >
              </div>
              <div class="q-pa-sm">
                <q-btn v-model="val" style="width: 100%">
                  <q-icon name="logout" class="q-pr-sm" />Cerrar Sesión</q-btn
                >
              </div>
            </div>
          </div>
        </div>
      </q-card-section>

      <q-btn
        class="absolute-top-right text-white my-fontAcme q-mt-md q-mr-md"
        flat
        color="black"
        dense
        icon="close"
        v-close-popup
        size="20px"
      />
    </q-card>
  </q-dialog>
</template>
<script setup>
const ConfiguracionUser = defineModel();
const volume = 0;
</script>
