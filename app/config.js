import { fileURLToPath } from 'url'
import dotenv from 'dotenv'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({ path: path.join(__dirname, '..', '.env') })

const config = {
    // SERVER
    port: process.env.PORT,
    host: process.env.HOST,

    // ROOT PATH
    rootPath: path.join(__dirname, '..'),
    
    // DATABASE
    dbDialect: process.env.DB_DIALECT,
    dbHost: process.env.DB_HOST,
    dbUser: process.env.DB_USER,
    dbPass: process.env.DB_PASS,
    dbName: process.env.DB_NAME,

}

export default config
