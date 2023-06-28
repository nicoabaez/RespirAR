<template>
  <div class="d-flex flex-row" style="height: 100vh">
    <l-map :zoom="zoom" :center="center">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker
        v-for="estacion in this.estaciones"
        :key="estacion.id"
        :lat-lng="estacion.location"
        @mouseover="mouseHover(estacion)"
        @click="mostrarInfo(estacion)">
        <l-tooltip>
          <div>{{ this.stationActual.name }}</div>
        </l-tooltip>      
      </l-marker>
    </l-map>

    <div class="bg-white" style="margin-top: 70px ;max-height: 100%; width: 60vh; overflow: auto;">
      <b-sidebar id="sidebar-right" title="Sidebar" shadow>
        <div v-if="showList" class="my-4">
          <p v-b-toggle.sidebar-right style="font-weight: 1000; font-size: 1.3em;">Estaciones</p>
          <div :class="{ 'marked': (stAux === this.stationActual) }" :id="'marker-' + stAux.id" class="mx-2" v-for="stAux in this.estaciones" :key="stAux.id"><hr>
            <b-list-group>
              <div class="panel-header" style="border-radius: 4px; margin-top: 24px; border: 0px; overflow: hidden;">
                <div class="container">
                  <div class="row">
                    <p class="col" style="font-weight: 300; font-size: 1.2em; align-text: left;">{{ stAux.name }}</p>
                    <p class="col order-12">{{ stAux.type }}</p>
                  </div>
                  <button class="my-1 col order-1 btn btn-info" style="align-text: right;width: 100%;" @click="mostrarInfo(stAux)">Info</button>
                  <button class="my-1 col order-1 btn btn-success" style="align-text: right;width: 100%;" @click="getCSV(stAux.id)">Exportar</button>
                </div>
              </div>
            </b-list-group>
          </div>
        </div>
        <div v-else>
          <div class="d-flex justify-content-between my-3 mx-3">
            <p class="text-center flex-grow-1" style="font-weight: 1000; font-size: 1.3em;">{{this.stationActual.name}}</p>
            <button class="btn-close" type="button" aria-label="Close" @click="closeList"></button>
          </div>
          <div class="mx-3 my-3" v-for="(value, attr) in this.attributes" :key="attr">
            <b-list-group>
              <div class="panel-header" style="background: rgb(247,247,247); border-radius: 4px; border: 0px; overflow: hidden;">
                <div class="container my-3">
                  <div class="row">
                    <p class="col" style="font-weight: 300; font-size: 1.2em; margin-bottom: 0;">{{ traduceToSpanish(attr.toUpperCase()) }}</p>
                    <p class="col" style="color: rgba(115, 114, 114, 0.81); margin-bottom: 0;">{{ value + addFormat(attr) }}</p>
                  </div>
                </div>
                <button class="col my-2 order-1 btn btn-info" style="align-text: right;width: 50%;" @click="getSTHAttr(this.stationActual.id, attr)">Ver Histórico</button>
                <button class="col order-1 btn btn-success" style="align-text: right;width: 90%;" @click="getCSVAttr(this.stationActual.id, attr)">Exportar</button>
              </div>
            </b-list-group>
          </div>
        </div>
      </b-sidebar>
    </div>
  </div>
</template>

<script lang="js">
  //const backendUrl = 'http://46.17.108.112:3000'
  const backendUrl = 'http://localhost:3000'

  export default  {
    name: 'src-componentes-mapa',
    props: [],
    async mounted () {
      await this.getStations()
      this.setCenter()
    },
    data () {
      return {
        estaciones: [], //getStations()
        attributes: {}, //getAtributes(id)
        stationActual: {},
        showList: true,
        showInfo: false,
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution:'&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        zoom: 6,
        center: [-38.4192641, -63.5989206],
        markerLatLng: [51.504, -0.159],
      };
    },
    methods: {
      closeList() {
        this.showInfo = false;
        this.showList = true;
      },
      mostrarInfo(station){
        this.showInfo = true
        this.showList = false
        this.stationActual = station
        this.setAtributos(station.id)
      },
      async setAtributos(id){
        try{
          let atrs = (await this.axios.get(`${backendUrl}/estaciones/${id}`)).data
          this.attributes = {...atrs}
        }catch{
          console.log("Error en setAtributos(id)")
        }
      },
      async getStations() {
        try{
          let e = (await this.axios.get(`${backendUrl}/estaciones`)).data
          this.estaciones = {...e}
        }
        catch(err){
          console.log("Error en getStations()", err)
        }
      },
      setCenter(){
        try{
          this.center = this.estaciones[0].location
          this.zoom = 13
        }
        catch(err){
          console.log("Error en setCenter()", err)
        }
      },
      async getCSV (id){
        window.location.href = `${backendUrl}/getCSV/${id}`;
      },
      async getCSVAttr (id, attr){
        window.location.href = `${backendUrl}/getCSV/${id}/${attr}/`;
      },
      async getSTHAttr (id, attr){
        window.location.href = `${backendUrl}/getHistorico/${id}/${attr}/`;
      },
      mouseHover(e){
        this.closeList()
        this.stationActual = e
        this.setAtributos(e.id)
        const markerElement = document.getElementById(`marker-${e.id}`)
        if (markerElement) {
          markerElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      },
      traduceToSpanish(attr){
        switch (attr) {
          case 'TEMPERATURE': 
            attr = 'TEMPERATURA' 
            break;
          case 'RELIABILITY': 
            attr = 'FIABILIDAD'
            break;
          case 'PM25': 
            attr = 'PM2.5' 
            break;
        }
        return attr
      },
      addFormat(attr){
        let unity = ''
        switch (attr) {
          case 'temperature': 
            unity = ' °C' 
            break;
          case 'reliability': 
            unity = ' %'
            break;
          default: 
            unity = ' μg/m³' 
            break;
        }
        return unity
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

.marked {
  background-color: rgba(109, 109, 245, 0.205);
  border-radius: 10px;
}
</style>
