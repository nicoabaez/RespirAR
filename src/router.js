import Vue          from 'vue'
import VueRouter    from 'vue-router'

import Inicio       from './components/Inicio.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes : [
        { path: '/', redirect: '/inicio' },
        { path: '/inicio', component: Inicio },
    ]
})

