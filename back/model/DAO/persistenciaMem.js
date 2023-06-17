class PersistenciaMemDAO {

    constructor() {
        this.stations = [
            { decripcion: 'Estás en memoria, acá no hay stations.' },
        ]
    }

    findStation = async id => { return this.stations.find(station => station.id == id) }

    findStations = async _  => { return this.stations }

}

export default PersistenciaMemDAO