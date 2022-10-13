import express from 'express'
import config from './app/config.js'

/** Initialize Database */
import './app/database/index.js'

/** Import Router */
import studentRouter from './app/routes/student.routes.js'

const app = express()
const PORT = config.port
const HOST = config.host

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/v1/students', studentRouter)

app.listen(PORT, HOST, () => console.log(`Server is running on port ${PORT}`))
