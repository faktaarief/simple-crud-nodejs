import { DataTypes } from 'sequelize'
import db from '../database/index.js'

const Student = db.define('students', {
    name: {
        type: DataTypes.STRING
    }
})

export default Student
