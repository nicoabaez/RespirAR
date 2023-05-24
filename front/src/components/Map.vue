<template>
  <div style="height:92.9vh">
    <l-map :zoom="zoom" :center="center">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker
      v-for="marker in markers"
      :key="marker.id"
      :lat-lng="marker.coordinates "
      @click="menuLateral(marker)">
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
    name: 'src-componentes-mapa',
    props: [],
    mounted () {},
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
    computed: {}
  }

</script>