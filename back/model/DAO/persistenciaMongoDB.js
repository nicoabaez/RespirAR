import CnxMongoDB from '../DB.js'
//import { ObjectId } from "mongodb"
//import config from '../../config.js'


class PersistenciaMongoDAO {


    getHistorico = async (id) => {
        console.log("entro aca id" +  id)
        const collection = `sth_/_${id}_IoT-Device`
        if (!CnxMongoDB.connection) return {}
        try {
            //let filtro = { '_id.id': id };
            let sth = await CnxMongoDB.db.collection(collection).find().toArray()
            return sth 
        }catch(err){
            console.log("Error en MODEL", err)
            return []
        }
    }


    findStation = async id => {
        console.log(id)
        if (!CnxMongoDB.connection) return {}
        try {
            let filtro = { '_id.id': id };
            let station = await CnxMongoDB.db.collection(collection).findOne(filtro)
            return station 
        }catch{
            try{
                let station = await CnxMongoDB.db.collection(collection).findOne({ id: id })
                return station 
            }catch{
                return {}
            }
        }
        
    }

    findStations = async _ =>{
        try {
            let station = await CnxMongoDB.db.collection(collection).find().toArray() //.project({ _id:0 }).toArray()
            console.log("STATIONS:", station)
            return station
        }
        catch(err) {
            console.log(err)
            return []
        }
    }
    // setStations = async _ => {
    //     if (!CnxMongoDB.connection) return []
    //     try {
    //         const config ={
    //             headers:{
    //                 "fiware-service":"respirar",
    //                 "fiware-servicepath":  "/"
    //             }}
    //         return await axios.get("http://localhost:1026/v2/entities", config);
    //     } catch (error) {
    //         console.error('Error en getStations()', error.message)
    //     }
    // }

    // setStation = async stations => {
    //     if  (!CnxMongoDB.connection) return {}
    //     await CnxMongoDB.db.collection('stations').insertAll(stations)
    //     return stations
    // }

    /*
    saveStation = async station => {
        if  (!CnxMongoDB.connection) return {}
        //station.importe = parseInt(station.importe)
        await CnxMongoDB.db.collection('users').insertOne(station)
        return station
    }

    updateStation = async (station, id) => {
        if (!CnxMongoDB.connection) return {}

        await CnxMongoDB.db.collection('stations').updateOne(
            { _id: ObjectId(id) },
            { $set: station }
        )
        let stationActualizado = await this.findStation(id)
        return stationActualizado
    }

    deleteStation = async id => {
        if (!CnxMongoDB.connection) return {}

        let stationEliminado = await this.findStation(id)
        await CnxMongoDB.db.collection('stations').deleteOne({ _id: ObjectId(id) })

        return stationEliminado
    }
    */
}

export default PersistenciaMongoDAO