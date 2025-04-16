<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import Exercise from './components/exercise/Exercise.vue'
</script>

<template>
  <HelloWorld msg="You did it!" />
  <Exercise name="Exercice" :rpe="5" :sets="5" :repetitions="20"/>
</template>
