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
            <p class="text-h3 text-black text-center q-pt-md my-fontAcme">
              Instrumento preferido
            </p>
          </div>
          <div
            class="col"
            style="border-radius: 25px 25px 25px 25px; width: 50%"
          >
            <p class="text-h3 text-black text-center q-pt-md my-fontAcme">
              Genero preferido
            </p>
          </div>

          <p class="text-h3 text-black text-center q-pt-md my-fontAcme">
            Nivel de dificultad
          </p>
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
</script>
