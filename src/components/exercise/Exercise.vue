<script setup lang="ts">
    defineProps<{
        name: string
        rpe: number
        repetitions: number
        sets: number
    }>()
</script>

<template>
    <div class="flex flex-col">
        <p class="font-bold text-blue-800">{{ name }} - RPE {{ rpe }}</p>
        <span class="text-gray-500">Série(s): {{ sets }}</span>
        <span class="text-gray-500">Répétitions: {{ repetitions }}</span>
    </div>
</template>