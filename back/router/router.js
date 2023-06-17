import express from 'express'
import ControladorStations from '../controller/stations.js'

export class RouterMain {
    constructor() {
        this.router = express.Router()
        this.controladorStations = new ControladorStations()
    }

    start() {
        this.router.get('/estaciones/:id?', this.controladorStations.getStations)
       
        this.router.get('/getHistorico/:id', this.controladorStations.getHistorico)
        
        this.router.get('/getHistorico/:id/:atr', this.controladorStations.getHistoricoByAttribute)

        this.router.get('/getCSV/:id', this.controladorStations.getCSV)
        
        return this.router
    }
}
