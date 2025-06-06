<script setup lang="ts">
import Bonjour from '../components/bonjour/Bonjour.vue';
import Seance from '../components/seance/Seance.vue'
import Objectif from '../components/objectif/Objectif.vue';
import { useRouter } from 'vue-router';
import type { ObjectifModel } from '../model/ObjectifModel';

const objectifs: ObjectifModel[] = [
  { titre: "Soulever 170kg au squat" },
  { titre: "Soulever 100kg au bench" },
  { titre: "Soulever 180kg au deadlift" }
];

const router = useRouter();
function handleClick() {
  router.push('/objectifs/ajout');
}
</script>

<template>
  <div class="flex flex-col items-center">
    <Bonjour :message="'Bienvenue Utilisateur,'" :a-une-seance-prevue="true" />
    <Seance />
    <p class="text-red-600 font-bold w-full px-14 mb-2">
      Vos Objectifs
      <span class="pi pi-plus" v-on:click="handleClick"></span>
    </p>
    <Objectif v-for="objectif in objectifs" :titre="objectif.titre"/>
  </div>
</template>