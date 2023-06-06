import axios from 'axios'; // no va
import persistenciaFactory from '../model/DAO/persistenciaFactory.js'

const headerAxios = {headers:{"fiware-service":"respirar","fiware-servicepath":  "/"}}

class OrionApi {


    constructor() {
        //this.stationsModel = persistenciaFactory.get(config.MODO_PERSISTENCIA)
    }

    async getStations(id) {
        return id? "" : await this.getStations()
    }

    //Al ser una regla de negocio, acá pedimos los datos actuales a orion y los enviamos a nuestro mongo propio, donde también tendríamos el histórico de las estaciones
    async getStations(){ 
        try {
            return (await axios.get("http://localhost:1026/v2/entities", headerAxios)).data
        } catch (error) {
            console.error('Error en getStations()', error.message)
        }
    }

    async setStations(){ 
        try {
            datos = {
                "devices": [
                 {
                    "device_id":   "device001",
                    "entity_name": "device001",
                    "entity_type": "IoT-Device",
                    "timezone":    "Europe/Berlin",
                    "attributes": [
                       { "object_id": "l", "name":"location", "type":"geo:json"},
                       { "object_id": "t", "name":"temperature", "type":"Integer"},
                       { "object_id": "r", "name":"reliability", "type":"Integer"},
                       { "object_id": "pm1", "name":"pm1", "type":"Integer"},
                       { "object_id": "pm10", "name":"pm10", "type":"Integer"},
                       { "object_id": "pm25", "name":"pm25", "type":"Integer"}
                   ]
                 }
                ]
               }
            return (await axios.post("http://localhost:4041/iot/devices", datos, headerAxios)).data;
        } catch (error) {
            console.error('Error en setStations()', error.message)
        }
    }

    async updateLocation(station,newValue){ 
        try {
            return (await axios.put(`http://localhost:1026/v2/entities/${station.attributes.device_id}/attrs/location/${newValue}`, datos, headerAxios)).data;
        } catch (error) {
            console.error('Error en setStations()', error.message)
        }
    }

    async updateTemperature(station,newValue){ 
        try {
            return (await axios.put(`http://localhost:1026/v2/entities/${station.attributes.device_id}/attrs/temperature/${newValue}`, datos, headerAxios)).data;
        } catch (error) {
            console.error('Error en setStations()', error.message)
        }
    }

}

export default OrionApi