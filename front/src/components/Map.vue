<template>
  <div class="d-flex flex-row">
    <l-map style="height: 92.4vh" :zoom="zoom" :center="center">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker
        v-for="estacion in this.estaciones"
        :key="estacion.id"
        :lat-lng="estacion.location.value"
        @click="menuLateral(estacion)">
        <l-tooltip>{{ estacion.location.value }}</l-tooltip>
      </l-marker>
    </l-map>

    <div class="px-3 py-4 bg-white" v-show="showList">
    <b-button v-b-toggle.sidebar-right style="font-weight: 1000; font-size: 1.3em;">Estaciones</b-button>
      <b-sidebar id="sidebar-right" title="Sidebar" right shadow>
        <div v-for="estacion in this.estaciones" :key="estacion.id">
          <b-list-group>

          <div class="ant-drawer-content-wrapper" style="width: 40vh;">
            <div class="ant-drawer-content">
              <div class="ant-drawer-wrapper-body" style="overflow: auto; height: 100%">
              <div class="ant-drawer-body">
              <div class="anr-spin-nested-loading">
                <div class="ant-spin-container">
                  <div class="ant-collapse ant-collapse-borderless ant-colapse-icon-position-right" role="tablist" style="margin-top: 1em">
                      <div class="ant-collapse-item panel-header" style="background: rgb(247,247,247); border-radius: 4px; margin-top: 24px; border: 0px; overflow: hidden;">
                          <div class="ant-collapse-header" role="tab" tabindex="0" aria-expanded="false">
                            <div>
                              <div class="container">
                                  <div class="row">
                                    <div class="col" style="font-weight: 300; font-size: 1.2em; align-text: left;">{{estacion.id}}</div>
                                    <div class="col order-12" style="color: rgba(115, 114, 114, 0.81); ">{{estacion.type}}</div>
                                    <button class="col order-1 btn btn-info" style="align-text: right;" @click="mostrarInfo(estacion)">Info</button>
                                  </div>
                                </div>
                            </div>
                            <div class="ant-collapse-content ant-collapse-content-inactive" role="tabpanel" style></div>
                          </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
              </div>
            </div>
          </div>  

          </b-list-group>
        </div>
      </b-sidebar>
    </div>

    <!--//Sidebar de la informaicon de las estacion especifica -->
    <div class="px-3 py-4 bg-white" v-show="showInfo">
    <li class="list-group-item text-left"><button type="button" class="btn-close" aria-label="Close" @click="closeList"></button></li>
    <!-- <b-button v-b-toggle.sidebar-right>{{estacionActual[0].id}}</b-button> -->
      <b-sidebar id="sidebar-right" title="Sidebar" right shadow>
        <div v-for="estacion in this.estaciones" :key="estacion.id">
          <b-list-group>
          <div class="ant-drawer-content-wrapper" style="width: 40vh;">
            <div class="ant-drawer-content">
              <div class="ant-drawer-wrapper-body" style="overflow: auto; height: 100%">
              <div class="ant-drawer-body">
              <div class="anr-spin-nested-loading">
                <div class="ant-spin-container">
                  <div class="ant-collapse ant-collapse-borderless ant-colapse-icon-position-right" role="tablist" style="margin-top: 1em">
                      <div class="ant-collapse-item panel-header" style="background: rgb(247,247,247); border-radius: 4px; margin-top: 24px; border: 0px; overflow: hidden;">
                          <div class="ant-collapse-header" role="tab" tabindex="0" aria-expanded="false">
                            <div>
                              <!-- contenedor de los atributos de las estaciones-->
                              <!-- <div class="container my-3">
                                  <div class="row">
                                    <div class="col" style="font-weight: 300; font-size: 1.2em; align-text: left;">{{estacionActual[0].id}}</div>
                                    <div class="col order-12" style="color: rgba(115, 114, 114, 0.81); ">Type Estacion</div>
                                    <button class="col order-1 btn btn-info" style="align-text: right;">Exportar</button>
                                  </div>
                                </div>
                                <div class="container my-3">
                                  <div class="row">
                                    <div class="col" style="font-weight: 300; font-size: 1.2em; align-text: left;">{{estacionActual[0].id}}</div>
                                    <div class="col order-12" style="color: rgba(115, 114, 114, 0.81); ">Type Estacion</div>
                                    <button class="col order-1 btn btn-info" style="align-text: right;">Exportar</button>
                                  </div>
                                </div>
                                <div class="container my-3">
                                  <div class="row">
                                    <div class="col" style="font-weight: 300; font-size: 1.2em; align-text: left;">{{estacionActual[0].id}}</div>
                                    <div class="col order-12" style="color: rgba(115, 114, 114, 0.81); ">Type Estacion</div>
                                    <button class="col order-1 btn btn-info" style="align-text: right;">Exportar</button>
                                  </div>
                                </div>
                                <div class="container my-3">
                                  <div class="row">
                                    <div class="col" style="font-weight: 300; font-size: 1.2em; align-text: left;">{{estacionActual[0].id}}</div>
                                    <div class="col order-12" style="color: rgba(115, 114, 114, 0.81); ">Type Estacion</div>
                                    <button class="col order-1 btn btn-info" style="align-text: right;">Exportar</button>
                                  </div>
                                </div>
                                <div class="container my-3">
                                  <div class="row">
                                    <div class="col" style="font-weight: 300; font-size: 1.2em; align-text: left;">{{estacionActual[0].id}}</div>
                                    <div class="col order-12" style="color: rgba(115, 114, 114, 0.81); ">Type Estacion</div>
                                    <button class="col order-1 btn btn-info" style="align-text: right;">Exportar</button>
                                  </div>
                                </div>
                                <div class="container my-3">
                                  <div class="row">
                                    <div class="col" style="font-weight: 300; font-size: 1.2em; align-text: left;">{{estacionActual[0].id}}</div>
                                    <div class="col order-12" style="color: rgba(115, 114, 114, 0.81); ">Type Estacion</div>
                                    <button class="col order-1 btn btn-info" style="align-text: right;">Exportar</button>
                                  </div>
                                </div>
                                <div class="container my-3">
                                  <div class="row">
                                    <div class="col" style="font-weight: 300; font-size: 1.2em; align-text: left;">{{estacionActual[0].id}}</div>
                                    <div class="col order-12" style="color: rgba(115, 114, 114, 0.81); ">Type Estacion</div>
                                    <button class="col order-1 btn btn-info" style="align-text: right;">Exportar</button>
                                  </div>
                                </div> -->
                            </div>
                            <div class="ant-collapse-content ant-collapse-content-inactive" role="tabpanel" style></div>
                          </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
              </div>
            </div>
          </div>  
          </b-list-group>
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
        urlEstaciones: "http://127.0.0.1:3000/estaciones",
        estaciones: [],
        atributes: {},
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
        this.showList = true;
        this.actualMarker = station
      },
      closeList() {
        this.showInfo = false;
        this.showList = true;
      },
      async getStations() {
        try{
          let e = (await this.axios.get(this.urlEstaciones)).data
          this.estaciones = {...e}
        }
        catch{
          console.log("Error en getStations() MAP VIEW")
        }
      },
     mostrarInfo(){
        this.showInfo = true
        this.showList = false
        //this.getAtributes(estacion.id)
        
      },
   /*async getAtributes(id){
        const headerAxios = {headers:{"fiware-service":"respirar","fiware-servicepath":  "/"}}
        let e = (await this.axios.get(`http://localhost:1026/v2/entities/${id}/attrs?options=keyValues`, headerAxios)).data
        this.atributes = {...e}
        console.log(e);
      }*/
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
