import express from 'express'
import { RouterMain } from './router/router.js'
import CnxMongoDB from './model/DB.js'
import config from './config.js'
import morgan from 'morgan'
import cors from 'cors'

//---- AGREGO PARA PROBAR
import path from 'path'
import { fileURLToPath } from 'url'
const __dirname = path.dirname(fileURLToPath(import.meta.url))
//----

class Server {

    constructor(port, persistencia) {
        this.app = express()
        this.port = port
        this.persistencia = persistencia
    }

    async start() {
        try {
            this.app.use(morgan('tiny'))
            this.app.use(cors())
            this.app.use(express.json())
            this.app.use(express.urlencoded({ extended: true }))

            this.app.use('/', new RouterMain().start())

            if (this.persistencia == 'MONGO') {
                await CnxMongoDB.conectar()
            }
            this.server = this.app.listen(this.port, () =>
                console.log((`\x1b[32m [OK] \x1b[96m** Servidor express escuchando en el puerto\x1b[93m [${config.PORT}] \x1b[96m** \x1b[0m`)))
            this.server.on('error', error =>
                console.log(`\x1b[31m [ERROR] \x1b[96m ** Error en servidor: \x1b[93m[${error.message}]\x1b[96m** \x1b[0m`))
          
        }
        catch (error) {
            console.log(error.message)
        }

    }

    async stop() {
        this.server.close()
        await CnxMongoDB.desconectar()
    }

}

export default Server