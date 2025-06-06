import { createRouter, createWebHistory } from 'vue-router';
import AjoutObjectif from '@/pages/AjoutObjectif.vue';
import Acceuil from '@/pages/Acceuil.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Acceuil,
    },
    {
      path: '/objectifs/ajout',
      name: 'ajout-objectif',
      component: AjoutObjectif
    }
  ],
})

export default router
