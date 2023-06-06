import { MongoClient } from "mongodb"
import config from '../config.js'

class CnxMongoDB {
    static connection = false
    static db
    static client
 /*
    static conectar = async _ => {
        try {
            console.log('\x1b[93m [INFO]\x1b[36m** Conectando a la base de datos... \x1b[0m')
            CnxMongoDB.client = new MongoClient(config.STRCNX,{
                useNewUrlParser: true,
                useUnifiedTopology: true
            })

            
            CnxMongoDB.db = CnxMongoDB.client.db(config.BASE)
            CnxMongoDB.connection = true
            
            await CnxMongoDB.client.connect() //Comento esto debido a que la base ya está UP en docker
            console.log((`\x1b[32m [OK] \x1b[36m** Base de datos \x1b[93m [${config.BASE}] \x1b[36m conectada! ** \x1b[0m`))
        }
        catch(error) {
            console.log(`\x1b[31m [ERROR] \x1b[36m ** Error en la conexión de base datos: [ ${error.message} ]** \x1b[0m`)
        }
    }
*/
    static desconectar = async () => {
        if(!CnxMongoDB.connection) return
        await CnxMongoDB.client.close()
    }
}

export default CnxMongoDB