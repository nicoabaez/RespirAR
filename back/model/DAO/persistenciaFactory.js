import PersistenciaMemDAO from './persistenciaMem.js'
import PersistenciaMongoDAO from './persistenciaMongoDB.js'

/*
class PersistenciaFactoryDAO {
    static get(tipo) {
        switch(tipo) {
            case 'MEM' :
                console.log('\x1b[93m [INFO]\x1b[96m** Persistiendo en Memoria ** \x1b[0m')
                return new PersistenciaMemDAO()

            case 'MONGO' :
                console.log('\x1b[93m [INFO]\x1b[96m** Persistiendo en MongoDB ** \x1b[0m')
                return new PersistenciaMongoDAO()

            default: 
            console.log('\x1b[93m [INFO]\x1b[96m** Persistiendo en default (Memoria) ** \x1b[0m')
                return new PersistenciaMemDAO()
        }
    }
}
export default PersistenciaFactoryDAO
*/