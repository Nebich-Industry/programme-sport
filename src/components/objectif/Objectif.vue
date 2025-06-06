<script setup lang="ts">
import type { PropType } from 'vue';
import type { ObjectifProps } from './ObjectifProps';

defineProps<ObjectifProps>();
</script>
<template>
    <p class="flex items-center justify-between text-red-600 px-14 w-full text-nowrap pb-2">
        <span>
            <span class="pi pi-bullseye pr-2"></span>
            {{ titre }}
        </span>
        <span class="flex gap-4" v-if="estEditable">
            <span class="pi pi-trash text-red-800 cursor-pointer" v-on:click="onClickSupprimer"></span>
            <span class="pi pi-pencil text-red-800 cursor-pointer"></span>
        </span>
    </p>
</template>