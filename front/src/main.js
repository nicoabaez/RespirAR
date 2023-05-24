import { createApp } from 'vue';
import { router } from './router.js';
import { LMap, LTileLayer, LMarker, LPopup } from '@vue-leaflet/vue-leaflet';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import './map.js'

const app = createApp(App);
app.use(router);

app.component('l-map', LMap);
app.component('l-tile-layer', LTileLayer);
app.component('l-marker', LMarker);
app.component('l-popup', LPopup);

app.mount('#app');