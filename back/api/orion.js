import axios from 'axios';
import config from '../config.js';
import persistenciaFactory from '../model/DAO/persistenciaFactory.js'
import csvWriter from 'csv-writer'
import moment from 'moment'

const headerAxios = {headers:{"fiware-service":"respirar","fiware-servicepath":  "/"}}
const filtro = '&attrs=!TimeInstant,!location,!name,pm1,pm10,pm25,reliability,temperature'

class OrionApi {

    constructor() {
        this.stationsModel = persistenciaFactory.get(config.MODO_PERSISTENCIA)
    }

    async getStation(id) {
        return id? this.getOneStation(id) : this.getStations()
    }

    async getStations(){ 
        try {  
            return (await axios.get(`http://localhost:1026/v2/entities?type=IoT-Device&options=keyValues`, headerAxios)).data
        } catch (error) {
            console.error('Error en getStations()', error.message)
        }
    }

    async getOneStation(id){
        try {
            return (await axios.get(`http://localhost:1026/v2/entities/${id}/attrs?options=keyValues${filtro}`, headerAxios)).data
        } catch (error) {
            console.error('Error en getStations()', error.message)
        }
    }

    async generateCsvData(id, attr) {
        let station = await (await axios.get(`http://localhost:1026/v2/entities/${id}/attrs?options=keyValues`, headerAxios)).data
        let sth
        let fileName
        const date = moment(Date.now()).format('YYYY-MM-DD_HH-mm-ss')
        
        console.log(attr)
        if (attr) {
            sth = await this.getHistoricoByAttribute(id, attr)
            fileName = `Historico_${station.name}_${attr}_${date}.csv`
        } else {
            sth = await this.getHistorico(id)
            fileName = `Historico_${station.name}_${date}.csv`
        }
        
        const writer = csvWriter.createObjectCsvWriter({
            path: fileName,
            header: [
            { id: 'n', title: 'ATRIBUTO' },
            { id: 'd', title: 'FECHA' },
            { id: 'v', title: 'VALOR' },
            // Agrega más columnas aquí
            ],
        });
        
        const csvData = sth.map((e) => ({
            n: e.attrName.toUpperCase(),
            d: moment(e.recvTime).format('YYYY-MM-DD HH:mm:ss'),
            v: e.attrValue,
        }));
        
        await writer.writeRecords(csvData);
        
        return fileName;
    }
    
    async getHistorico(id){
        try {
            return await this.stationsModel.getHistorico(id)
        } catch (error) {
            console.error('Error en getHistorico(id)', error.message)
        }
    }

    async getHistoricoByAttribute(id, attr){
        try {
            return await this.stationsModel.getHistoricoByAttribute(id, attr)
        } catch (error) {
            console.error('Error en getHistorico(id)', error.message)
        }
    }
    
}

export default OrionApi