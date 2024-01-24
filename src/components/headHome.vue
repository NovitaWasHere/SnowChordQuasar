<template>
  <div class="flex flex-center q-pt-xl">
    <q-btn-group
      push
      spread
      class="bg-secondary"
      style="border: 1px solid rgb(211, 148, 39); width: 80%"
    >
      <q-btn push label="Inicio" icon="home" to="/home" />
      <q-btn push label="Canciones" icon="library_music" to="/songs" />
      <q-btn push label="Perfil" icon="ac_unit" to="/profile" />
    </q-btn-group>
  </div>
</template>
<script setup></script>
