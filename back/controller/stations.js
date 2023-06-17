import OrionApi from '../api/orion.js'
import csvWriter from 'csv-writer'

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

    // getAtributes = async (req,res) => {
    //     try{
    //         const { id } = req.params
    //         res.json(await this.apiStations.getAtributes(id))
    //     } catch(error){
    //         console.error("Error controller getAtributes " + error)
    //     }
    // }

    getCSV = async (req,res) => {     
        const { id } = req.params
        let station = await this.apiStations.getStation(id)
        let sth = await this.apiStations.getHistorico(id)

        const writer = csvWriter.createObjectCsvWriter({
            path: `Historico_${station.name}.csv`,
            header: [
                { id: 'd', title: 'Date' },
                { id: 'n', title: 'Name' },
                { id: 'v', title: 'Value' }
                // Agrega más columnas aquí
            ]
        });
        
        let data = [];
        sth.forEach(e => {
            data.push({ d: e.recvTime, n: e.attrName.toUpperCase(), v: e.attrValue })
        });

        writer.writeRecords(data)
            .then(() => {
                // Envía el archivo CSV como respuesta
                res.download(`Historico_${station.name}.csv`);
            })
            .catch(error => {
                // Maneja el error si ocurre
                console.error(error);
                res.status(500).send('Error al exportar CSV');
            });
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
            const { id , atr } = req.params
            res.json(await this.apiStations.getHistoricoByAttribute(id, atr))
        } catch(error){
            console.error("Error controller getHistorico " + error)
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