import axios from 'axios';
import config from '../config.js';
import persistenciaFactory from '../model/DAO/persistenciaFactory.js'

const headerAxios = {headers:{"fiware-service":"respirar","fiware-servicepath":  "/"}}

class OrionApi {


    constructor() {
        this.stationsModel = persistenciaFactory.get(config.MODO_PERSISTENCIA)
    }

    async getStations(id) {
        //return id? this.stationsModel.findStation(id) : await this.stationsModel.findStations()
        return id? "" : await this.getStations()
    }

    //Al ser una regla de negocio, acá pedimos los datos actuales a orion y los enviamos a nuestro mongo propio, donde también tendríamos el histórico de las estaciones
    async getStations(){ 
        try {
            return (await axios.get("http://localhost:1026/v2/entities?type=IoT-Device&options=keyValues", headerAxios)).data
        } catch (error) {
            console.error('Error en getStations()', error.message)
        }
    }

    async getAtributes(id){
        try {
            return (await axios.get(`http://localhost:1026/v2/entities/${id}/attrs?options=keyValues`, headerAxios)).data
        } catch (error) {
            console.error('Error en getStations()', error.message)
        }
    }

    async getCSV(a,b,c){
        //implementar

    }

    async getHistorico(id){
        try {
            return await this.stationsModel.getHistorico(id)
        } catch (error) {
            console.error('Error en getHistorico(id)', error.message)
        }
    }
}

export default OrionApi