import { Sequelize } from 'sequelize'
import config from '../config.js'

/** Setup Database */
const db = new Sequelize(
    config.dbName,
    config.dbUser,
    config.dbPass,
    {
        host: config.dbHost,
        dialect: config.dbDialect,
        dialectOptions: {
            dateStrings: true,
        },
        timezone: '+07:00'
    }
)


/** Trying to Connect Database */
try {
    await db.authenticate()
    console.log('Database connected...')
} catch (error) {
    console.error('Connection error:', error)
}

export default db
