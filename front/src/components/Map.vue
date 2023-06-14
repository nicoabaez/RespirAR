<template>
  <div class="d-flex flex-row" style="height: 92.1vh">
    <l-map :zoom="7" :center="center">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker
        v-for="estacion in this.estaciones"
        :key="estacion.id"
        :lat-lng="estacion.location"
        @click="menuLateral(estacion)">
        <l-tooltip>{{ estacion.location }}</l-tooltip>
      </l-marker>
    </l-map>

  <!-- <div class="bg-white" style="max-height: 100vh; width: 50vh; overflow-y: auto;"> -->
    <div class="bg-white" style="max-height: 100%; width: 50vh; overflow: auto;">
      <b-sidebar id="sidebar-right" title="Sidebar" shadow>
        <div v-if="showList" class="my-4">
          <b-button v-b-toggle.sidebar-right style="font-weight: 1000; font-size: 1.3em;">Estaciones</b-button>
          <div class="mx-2" v-for="estacion in this.estaciones" :key="estacion.id">
            <b-list-group>
              <div class="panel-header" style="background: rgb(247,247,247); border-radius: 4px; margin-top: 24px; border: 0px; overflow: hidden;">
                <div class="container">
                  <div class="row">
                    <p class="col" style="font-weight: 300; font-size: 1.2em; align-text: left;">{{ estacion.name }}</p>
                    <p class="col order-12" style="color: rgba(115, 114, 114, 0.81);">{{ estacion.type }}</p>
                  </div>
                  <button class="my-1 col order-1 btn btn-info" style="align-text: right;width: 100%;" @click="mostrarInfo(estacion)">Info</button>
                  <button class="my-1 col order-1 btn btn-info" style="align-text: right;width: 100%;" @click="obtenerCSV(estacion.id)">Exportar</button>
                </div>
                <div class="ant-collapse-content ant-collapse-content-inactive" role="tabpanel"></div>
              </div>
            </b-list-group>
          </div>
        </div>
        <div v-else>
          <li class="list-group-item text-left"><button type="button" class="btn-close" aria-label="Close" @click="closeList"></button></li>
          
          <div class="mx-2" v-for="(attribute, index) in this.attributes" :key="index">
            <b-list-group>
              <div class="panel-header" style="background: rgb(247,247,247); border-radius: 4px; margin-top: 24px; border: 0px; overflow: hidden;">
                <div class="container my-1">
                  <div class="row">
                    <p class="col" style="font-weight: 300; font-size: 1.2em; align-text: left;">{{ index.toUpperCase() }}</p>
                    <p class="col order-12" style="color: rgba(115, 114, 114, 0.81);">{{ attribute }}</p>
                  </div>
                </div>
                <div class="ant-collapse-content ant-collapse-content-inactive" role="tabpanel"></div>
              </div>
            </b-list-group>
          </div>
        </div>
      </b-sidebar>
    </div>

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
        estaciones: [], //getStations()
        attributes: {}, //getAtributes(id)
        actualMarker: {},
        showList: true,
        showInfo: false,
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution:'&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        zoom: 5,
        center: [-38.4192641, -63.5989206],
        markerLatLng: [51.504, -0.159],
      };
    },
    methods: {
      menuLateral(station){
        this.mostrarInfo(station)
        this.actualMarker = station
      },
      closeList() {
        this.showInfo = false;
        this.showList = true;
      },
      mostrarInfo(station){
        this.showInfo = true
        this.showList = false
        this.setAtributos(station.id)
      },
      async setAtributos(id){
        try{
          let atrs = (await this.axios.get(`http://localhost:3000/atributos/${id}`)).data
          this.attributes = {...atrs}
        }catch{
          console.log("Error en setAtributos(id)")
        }
      },
      async getStations() {
        try{
          let e = (await this.axios.get('http://127.0.0.1:3000/estaciones')).data
          this.estaciones = {...e}
        }
        catch{
          console.log("Error en getStations()")
        }
      },
      async obtenerCSV(id){
        window.location.href = `http://localhost:3000/getCSV/${id}`;
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
