<template>
  <div class="d-flex flex-row">
    <l-map style="height:92.9vh" :zoom="zoom" :center="center">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker
      v-for="marker in markers"
      :key="marker.id"
      :lat-lng="marker.coordinates "
      @click="menuLateral(marker)">
          <l-tooltip>{{ marker.coordinates  }}</l-tooltip>
      </l-marker>
    </l-map>

    <ul class="list-group list-group-flush" v-show="showList" >
      <li class="list-group-item flex"><button type="button" class="btn-close" aria-label="Close" @click="closeList"></button></li>
      

      <li class="list-group-item">{{ actualMarker.name }}</li>
      <li class="list-group-item">{{ actualMarker.coordinates }}</li>
      <li class="list-group-item">Morbi leo risus</li>
      <li class="list-group-item">Porta ac consectetur ac</li>
      <li class="list-group-item">Vestibulum at eros</li>
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
          { name: "Estacion Orion",
            coordinates : [-38, -60]},
          { name: "Estacion Neptuno",
            coordinates : [-30, -65]},
          { name: "this.estacion1.id",
            coordinates: [-39, -59] || this.estaciones[0].location.value },
          ],
        actualMarker: {},
        showList: false,
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution:'&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        zoom: 5,
        center: [-38.4192641, -63.5989206],
        markerLatLng: [51.504, -0.159],
      };
    },
    methods: {
      menuLateral(marker){
        this.showList = true;
        this.actualMarker = {...marker}
        console.log(this.actualMarker);
      },
      closeList() {
        this.showList = false;
      },
      async getStations(){
        try {
          let e = (await this.axios.get(this.urlEstaciones)).data
          this.estaciones = e
          console.log(e[0].location.value)
          window.alert("Estaciones encontradas: " + this.estaciones.length  )
        } catch (error) {
          console.error('****Error en getStations****', {cause: error})
        }
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
