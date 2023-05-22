<template>
  <div class="d-flex flex-row">
    <l-map class="map" :zoom="zoom" :center="center">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker
        v-for="marker in markers"
        :key="marker.id"
        :lat-lng="marker.coordinates "
        @click="menuLateral(marker)"
      >
        <l-popup>{{ marker.coordinates  }}</l-popup>
      </l-marker>
    </l-map>

    <ul class="list-group list-group-flush" v-show="showList" >
      <li class="list-group-item"><button class="close" @click="closeList">&times;</button></li>

      <li class="list-group-item">{{this.actualMarker }}</li>
      <li class="list-group-item">Dapibus ac facilisis inaaaaaaaaaa</li>
      <li class="list-group-item">Morbi leo risus</li>
      <li class="list-group-item">Porta ac consectetur ac</li>
      <li class="list-group-item">Vestibulum at eros</li>
    </ul>
  </div>
</template>

<script lang="js">



  export default  {
      components: {

  },
    name: 'src-componentes-mapa',
    props: [],
    mounted () {
      
    },
  data () {
    return {
      markers: [
        {coordinates : [-38, -60]},
        {coordinates : [-30, -65]},
        ],
      actualMarker: null,
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
              this.actualMarker = marker;
              console.log("ejecutado" + marker.coodinates);

      },
      closeList() {
      this.showList = false;
      },

      
      

    },
    computed: {
     
    }
}
</script>

<style scoped lang="css">
.jumbotron {
  /*background: linear-gradient(to bottom right, red 0%,green 40%,blue 90%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  background: #283456;
  color: white;
}


.map {
  height: 800px;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 5px;

}

.contenedorGeneral {
  background: #202a46;
  background-attachment: fixed;
  border-radius: 20px;
  padding: 10px;
  border-style: solid;
  border-color: #1a2238;
}
</style>
