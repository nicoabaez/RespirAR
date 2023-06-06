import express from 'express'
import ControladorStations from '../controller/stations.js'

export class RouterMain {
    constructor() {
        this.router = express.Router()
        this.controladorStations = new ControladorStations()
    }

    start() {

        this.router.get('/', this.controladorStations.holaMundo)
        
        this.router.get('/estaciones/:id?', this.controladorStations.getStations)
        
        // // POST Station
        // this.router.post('/', this.controladorStations.postStation)

        // // PUT Station 
        // this.router.put('/:id', this.controladorStations.putStation)

        // // DELETE Station 
        // this.router.delete('/:id', this.controladorStations.deleteStation)
                
        
        /*
        //GASTOS EN PDF
        this.router.get('/pdf', this.controladorGastos.getPDFGastos) 

        //TOTAL DE GASTOS
        this.router.get('/total', this.controladorGastos.getTotalGastos)

        //GASTOS POR MES
        this.router.post('/gastosXMes', this.controladorGastos.getGastosXMes)

        // GET Gastos
        this.router.get('/:id?', this.controladorGastos.getGastos)
        */
        return this.router
    }
}
