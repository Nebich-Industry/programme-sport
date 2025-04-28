<script setup lang="ts">
import type { MessageArriveeModel } from '@/model/MessageArriveeModel';
defineProps<MessageArriveeModel>();
</script>

<template>
    <div class="flex flex-col">
        <p>{{ message }}</p>
        <p v-if="aUneSeancePrevue">Voici vote séance du jour :</p>
    </div>
</template>