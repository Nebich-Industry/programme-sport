<script setup lang="ts">
import type { ExerciceModel } from '@/model/ExerciceModel';
defineProps<ExerciceModel>()
</script>

<template>
    <div class="flex flex-col">
        <p class="font-bold text-blue-800">{{ nom }} - RPE {{ rpe }}</p>
        <span class="text-gray-500">Série(s): {{ series }}</span>
        <span class="text-gray-500">Répétitions: {{ repetitions }}</span>
    </div>
</template>