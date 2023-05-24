import { createRouter, createWebHistory } from 'vue-router';
import Inicio from './components/Inicio.vue';
import Map from './components/Map.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/inicio' },
    { path: '/inicio', component: Inicio },
    { path: '/mapa', component: Map },
  ],
});

export { router };

