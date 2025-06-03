<script setup lang="ts">
import Objectif from '../components/objectif/Objectif.vue';
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
    <Objectif v-for="objectif in objectifs" :objectif="objectif.objectif"/>
</template>