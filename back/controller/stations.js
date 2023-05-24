// import ApiStations from '../api/stations.js'
// import ApiGoogleDrive from '../api/gdrive.js';
// import path from 'path'
// const __dirname = path.resolve();

class ControladorStations {

    constructor() {
        // this.apiStations = new ApiStations()
        // this.apiGoogleDrive = new ApiGoogleDrive
    }

    holaMundo = async (req,res) => {
        res.json("HOLA MUNDO")
    }

    //-----------------------
    /*
    getStations = async (req,res) => {
        const { id } = req.params
        res.json(await this.apiStations.obtenerStations(id))
    }

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