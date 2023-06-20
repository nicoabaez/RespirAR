import CnxMongoDB from '../DB.js'

class PersistenciaMongoDAO {

    getHistorico = async (id) => {
        const collection = `sth_/_${id}_IoT-Device`
        if (!CnxMongoDB.connection) return {}
        try {
            let sth = await CnxMongoDB.db.collection(collection).find().project( {recvTime: 1 ,attrName: 1 ,attrValue: 1, _id: 0} ).toArray()
            return sth 
        }catch(err){
            console.log("Error en MODEL", err)
            return []
        }
    }

    getHistoricoByAttribute = async (id, atr) => {
        const collection = `sth_/_${id}_IoT-Device`
        if (!CnxMongoDB.connection) return {}
        try {
            let sth = await CnxMongoDB.db.collection(collection).find({ attrName: atr }).project( {recvTime: 1 ,attrName: 1 ,attrValue: 1, _id: 0} ).toArray()
            return sth 
        }catch(err){
            console.log("Error en MODEL", err)
            return []
        }
    }
}

export default PersistenciaMongoDAO