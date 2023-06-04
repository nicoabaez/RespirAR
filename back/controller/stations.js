 import OrionApi from '../fiware/orion.js'
// import ApiGoogleDrive from '../api/gdrive.js';
// import path from 'path'
// const __dirname = path.resolve();

class ControladorStations {

    constructor() {
        this.apiStations = new OrionApi()
        // this.apiGoogleDrive = new ApiGoogleDrive
    }

    holaMundo = async (req,res) => {
        res.json("HOLA MUNDO")
    }

    getStations = async (req,res) => {
        try {
            const stations = await this.apiStations.getStations()
            res.json(stations.data)
        } catch (error) {
            console.error("Error controller stations " + error)
        }

    }

    //-----------------------
    /*


    postStation = async (req,res) => {
        const station = req.body
        res.json(await this.apiStations.guardarStation(station))
    }

    putStation = async (req,res) => {
        const { id } = req.params
        const station = req.body
    
        res.json(await this.apiStations.actualizarStation(station, id))
    }

    deleteStation = async (req,res) => {
        const { id } = req.params
        res.json(await this.apiStations.eliminarStation(id))
    }
    */
}

export default ControladorStations