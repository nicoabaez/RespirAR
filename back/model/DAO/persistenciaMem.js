class PersistenciaMemDAO {
/*
    constructor() {
        this.stations = [
            { decripcion: 'Estás en memoria, acá no hay stations.' },
        ]
    }

    findStation = async id => {
        return this.stations.find(station => station.id == id)    
    }

    findStations = async ()  => {
        try {
            return this.stations
        }
        catch {
            return []
        }
    }

    saveStation = async station => {
        //station.importe = parseInt(station.importe)

        const id = parseInt(this.stations[this.stations.length-1].id) + 1
        station.id = String(id)

        this.stations.push(station)

        return station    
    }

    updateStation = async (station,id) => {
        // Actualización total 
        station.id = id
        const index = this.stations.findIndex(station => station.id == id)
        this.stations.splice(index, 1, station)

        return station    
    }

    deleteStation = async id => {
        const index = this.stations.findIndex(station => station.id == id)
        const station = this.stations.splice(index, 1)[0]
        
        return station    
    }
*/
}

export default PersistenciaMemDAO
