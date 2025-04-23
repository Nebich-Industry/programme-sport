<script setup lang="ts">
import { ref } from 'vue';
import Exercice from '../exercice/Exercice.vue';
import type { ExerciceModel } from '@/model/ExerciceModel';

const exercices = ref<ExerciceModel[]>([
    {nom: "Squat", repetitions: 5, series: 5, rpe: 6},
    {nom: "Bench", repetitions: 5, series: 5, rpe: 6},
    {nom: "Deadlift", repetitions: 5, series: 5, rpe: 6}
]);

function estDernierExercice(exercice: ExerciceModel) {
    return exercices.value.indexOf(exercice) === exercices.value.length-1;
}

</script>

<template>
    <div class="full-width p-12">
        <div class="flex justify-start" v-for="exercice in exercices">
            <div class="relative">
                <div class="bg-blue-800 rounded-full border-3 border-blue-800 w-[20px] h-[20px] inline-block"></div>
                <div class="h-full absolute top-[20px] left-[8px] border-l-3 border-blue-800" v-if="!estDernierExercice(exercice)"></div>
            </div>
            <div class="ml-12 inline-block pb-4">
                <Exercice :nom="exercice.nom" :repetitions="exercice.repetitions" :rpe="exercice.rpe" :series="exercice.series"/>
            </div>
        </div>
    </div>
</template>