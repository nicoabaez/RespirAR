import OrionApi from '../api/orion.js'

class ControladorStations {

    constructor() {
        this.apiStations = new OrionApi()
    }
    
    getStations = async (req,res) => {
        try {
            const { id } = req.params
            res.json(await this.apiStations.getStations(id))
        } catch (error) {
            console.error("Error controller getStations " + error)
        }

    }

    getAtributes = async (req,res) => {
        try{
            const { id } = req.params
            res.json(await this.apiStations.getAtributes(id))
        } catch(error){
            console.error("Error controller getAtributes " + error)
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