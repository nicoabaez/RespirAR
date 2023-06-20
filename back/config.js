import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.BACK_PORT || 3000
const STRCNX = process.env.DATABASE_URL || `mongodb://${process.env.MONGO_HOST}:27017/`
const MODO_PERSISTENCIA = process.env.MODO_PERSISTENCIA || 'MEM'   // MEM - MONGO
const BASE = process.env.MONGO_BASE || 'sth_respirar' || 'test'
const ORION = process.env.ORION_HOST || 'orion'

export default {
    PORT,
    STRCNX,
    MODO_PERSISTENCIA,
    BASE,
    ORION,
}