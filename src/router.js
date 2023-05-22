import Vue          from 'vue'
import VueRouter    from 'vue-router'

import Home       from './components/Home.vue'
//import Mapa from './components/Mapa.vue'
Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes : [
        { path: '/', redirect: '/inicio' },
        { path: '/inicio', component: Home },
    ]
})

