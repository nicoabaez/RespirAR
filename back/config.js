import dotenv from 'dotenv'
dotenv.config()

const PORT = 3000
//const STRCNX = process.env.STRCNX || 'mongodb://http://127.0.0.1/'
const STRCNX = process.env.STRCNX || 'mongodb://http://127.0.0.1/27018'
const MODO_PERSISTENCIA = process.env.MODO_PERSISTENCIA || 'MEM'   // MEM - MONGO
const BASE = process.env.BASE || 'test' 
const COLLECTION = 'stations'

export default {
    PORT,
    STRCNX,
    MODO_PERSISTENCIA,
    BASE,
    COLLECTION,
}