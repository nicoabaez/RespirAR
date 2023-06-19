import OrionApi from '../api/orion.js'
import fs from 'fs'

class ControladorStations {

    constructor() {
        this.apiStations = new OrionApi()
    }

    getStations = async (req,res) => {
        try {
            const { id } = req.params
            res.json(await this.apiStations.getStation(id))
        } catch (error) {
            console.error("Error controller getStations " + error)
        }

    }

    getHistorico = async (req,res) => {
        try{
            const { id } = req.params
            res.json(await this.apiStations.getHistorico(id))
        } catch(error){
            console.error("Error controller getHistorico " + error)
        }
    }

    getHistoricoByAttribute = async(req, res) => {
        try{
            const { id , attr } = req.params
            res.json(await this.apiStations.getHistoricoByAttribute(id, attr))
        } catch(error){
            console.error("Error controller getHistorico " + error)
        }
    }

    getCSV = async (req, res) => {
        try {
            const { id, attr} = req.params;
            let csvData
            if (attr) { csvData = await this.apiStations.generateCsvData(id, attr) } 
            else      { csvData = await this.apiStations.generateCsvData(id) }

            res.download(csvData, () => {
                // Retraso de 3 segundo antes de eliminar el archivo
                setTimeout(() => {
                    fs.unlink(csvData, (error) => {
                    if (error) {
                        console.error(`Error al eliminar el archivo ${csvData}: ${error}`);
                    }
                    })
                }, 3000)
            });
        } catch (error) {
            console.error(error);
        }
    }
}

export default ControladorStations