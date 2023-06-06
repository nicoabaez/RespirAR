<template>
  <div class="d-flex flex-row">
    <l-map style="height:92.9vh" :zoom="zoom" :center="center">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker
        v-for="estacion in this.estaciones"
        :key="estacion.id"
        :lat-lng="estacion.location.value"
        @click="menuLateral(estacion)">
        <l-tooltip>{{ estacion.location.value }}</l-tooltip>
      </l-marker>
    </l-map>

    <ul class="list-group list-group-flush" v-show="showList" >
      <li class="list-group-item flex"><button type="button" class="btn-close" aria-label="Close" @click="closeList"></button></li>
      
      <li class="list-group-item">{{ actualMarker.id }}</li>
      <li class="list-group-item">{{ actualMarker.type }}</li>
      <li class="list-group-item">{{ actualMarker.temperature.value }}</li>
      <li class="list-group-item">{{ actualMarker.location.value }}</li>
      <li class="list-group-item">{{ actualMarker.TimeInstant.value }}</li>
    </ul>

  </div>
</template>

<script lang="js">

  export default  {
    name: 'src-componentes-mapa',
    props: [],
    async mounted () {
      await this.getStations()
    },
    data () {
      return {
        urlEstaciones: "http://127.0.0.1:3000/estaciones",
        estaciones: [],
        markers: [
          // { name: "Estacion Orion",
          //   coordinates : [-38, -60]},
          // { name: "Estacion Neptuno",
          //   coordinates : [-30, -65]},
          // { name: "this.estacion1.id",
          //   coordinates: [51.504, -0.159] || this.estaciones[0].location.value },
          ],
        actualMarker: {
          id: "id",
          type: "type",
          temperature: 0,
          location: {
            value: [] // Sin esto VUE no reconoce value como atributo sino que lo reconoce como string
          },
          TimeInstant: {
            value: "TimeInstant"
          },
          pm1: 0,
          pm10: 0,
          pm25: 0,
          reliability: 0,
        },
        showList: false,
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution:'&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        zoom: 5,
        center: [-38.4192641, -63.5989206],
        markerLatLng: [51.504, -0.159],
      };
    },
    methods: {
      menuLateral(station){
        this.showList = true;
        this.actualMarker = station
      },
      closeList() {
        this.showList = false;
      },
      async getStations() {
        let e = (await this.axios.get(this.urlEstaciones)).data
        this.estaciones = {...e}
        // console.log(e)
        // console.log(e[0].location.value)
      }
    },
    computed: {}
  }

</script>

<style scoped>
.list-group-item.flex {
  display: flex;
  align-items: center;
}

.list-group-item.flex .btn-close {
  margin-left: auto; /* Mover el botón a la derecha */
}
</style>
