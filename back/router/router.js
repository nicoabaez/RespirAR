import express from 'express'
import ControladorStations from '../controller/stations.js'

export class RouterMain {
    constructor() {
        this.router = express.Router()
        this.controladorStations = new ControladorStations()
    }

    start() {

        //this.router.get('/', (res) => {res.send("HOLA MUNDOOO")})
        this.router.get('/', this.controladorStations.holaMundo)

        /*
        
        //ENVIAR GASTOS POR MAIL
        this.router.post('/email', this.controladorGastos.enviarEmail) 
        
        //DOCUMENTACION
        this.router.get("/documentacion", this.controladorGastos.getDocumentacion )

        //GASTOS EN PDF
        this.router.get('/pdf', this.controladorGastos.getPDFGastos) 
        
        //SUBIR GASTOS A DRIVE
        this.router.post('/subirpdf', this.controladorGastos.subirPDF) 

        //GASTOS PENDIENTES
        this.router.get('/pendientes', this.controladorGastos.getGastosPendientes)

        //GASTOS RENDIDOS
        this.router.get('/rendidos', this.controladorGastos.getGastosRendidos)

        //TOTAL DE GASTOS
        this.router.get('/total', this.controladorGastos.getTotalGastos)

        //GASTOS POR MES
        this.router.post('/gastosXMes', this.controladorGastos.getGastosXMes)

        // GET Gastos
        this.router.get('/:id?', this.controladorGastos.getGastos)

        // POST Gasto
        this.router.post('/', this.controladorGastos.postGasto)

        // PUT Gasto 
        this.router.put('/:id', this.controladorGastos.putGasto)

        // DELETE Gasto 
        this.router.delete('/:id', this.controladorGastos.deleteGasto)
        
        */
        return this.router
    }
}
