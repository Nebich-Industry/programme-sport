<script setup lang="ts">
import type { ObjectifModel } from '@/model/ObjectifModel';

defineProps<ObjectifModel>()
</script>
<template>
    <p class="flex items-center text-red-600 px-14 w-full text-nowrap pb-2">
        <span class="pi pi-bullseye pr-2"></span>
        {{ objectif }}
    </p>
</template>