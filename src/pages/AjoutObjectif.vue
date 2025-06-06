<script setup lang="ts">
import type { ObjectifModel } from '@/model/ObjectifModel';
import Objectif from '../components/objectif/Objectif.vue';
import { ref, useId } from 'vue';
import { useRouter } from 'vue-router';
const objectifs = ref<ObjectifModel[]>([
  { titre: "Soulever 170kg au squat" },
  { titre: "Soulever 100kg au bench" },
  { titre: "Soulever 180kg au deadlift" }
])
const id = useId();
function ajouterObjectif(event: Event) {
    event.preventDefault();
    const input = event.target as HTMLFormElement;
    const objectifInput = input.querySelector('input[type="text"]') as HTMLInputElement;
    if (objectifInput.value.trim() !== '') {
        objectifs.value.push({ titre: objectifInput.value });
        objectifInput.value = '';
    }
}
function supprimerObjectif(index: number) {
    objectifs.value.splice(index, 1);
}
</script>
<template>
    <a class="text-red-600 text-2xl font-bold mb-4 px-14" href="/">
        <span class="pi pi-arrow-left"></span>
        Retour
    </a>
    <form class="flex items-end px-14 gap-2 mb-4" v-on:submit="ajouterObjectif">
      <div class="flex flex-col">
        <label class="text-red-600 w-full mb-2 text-nowrap" :for="id">
                    Ajout d'un objectif
        </label>
        <input :id="id" type="text" placeholder="Ajouter un objectif" class="border border-red-800 p-2 w-full max-w-md rounded" maxlength="25"/>
      </div>
      <button class="bg-red-600 text-white p-2 rounded"><span class="pi pi-plus"></span></button>
    </form>
    <Objectif v-for="(objectif, index) in objectifs" :titre="objectif.titre" :est-editable="true" v-on:click-supprimer="supprimerObjectif(index)"/>
</template>