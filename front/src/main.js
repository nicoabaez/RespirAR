import { createApp } from 'vue';
import { router } from './router.js';
import { LMap, LTileLayer, LMarker, LTooltip } from '@vue-leaflet/vue-leaflet';
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import './map.js';


const app = createApp(App);
app.use(router);
app.use(VueAxios, axios);
app.component('l-map', LMap);
app.component('l-tile-layer', LTileLayer);
app.component('l-marker', LMarker);
app.component('l-tooltip', LTooltip);

app.mount('#app');