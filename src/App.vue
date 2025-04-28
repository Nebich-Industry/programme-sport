<script setup lang="ts">
import Bonjour from './components/bonjour/Bonjour.vue';
import Seance from './components/seance/Seance.vue'
</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <Bonjour :message="'Bienvenue Utilisateur,'" :a-une-seance-prevue="true" />
    <Seance />
  </div>
</template>
