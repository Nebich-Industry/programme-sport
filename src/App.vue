<script setup lang="ts">
import Bonjour from './components/bonjour/Bonjour.vue';
import Seance from './components/seance/Seance.vue'
import Objectif from './components/objectif/Objectif.vue';
import type { ObjectifModel } from './model/ObjectifModel';

const objectifs: ObjectifModel[] = [
  {
    objectif: "Soulever 170kg au squat"
  },
  {
    objectif: "Soulever 100kg au bench"
  },
  {
    objectif: "Soulever 180kg au deadlift"
  }
]
</script>

<template>
  <div class="flex flex-col items-center">
    <Bonjour :message="'Bienvenue Utilisateur,'" :a-une-seance-prevue="true" />
    <Seance />
    <p class="text-red-600 font-bold w-full px-14 mb-2">Vos Objectifs</p>
    <Objectif v-for="objectif in objectifs" :objectif="objectif.objectif"/>
  </div>
</template>
