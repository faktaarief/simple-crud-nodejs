import Student from '../models/student.model.js'

export const index = async (req, res) => {
    try {
        const students =  await Student.findAll()
        res.json({ data: students })
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const show = async (req, res) => {
    try {
        const student = await Student.findByPk(req.params.id)
        res.json({ data: student })
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const store = async (req, res) => {
    try {
        const student = await Student.create(req.body)
        res.json({ msg: 'Success', data: await Student.findByPk(student.id) })
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const update = async (req, res) => {
    try {
        const id = req.params.id
        const student = await Student.update(req.body, { where: { id } })
        res.json({ msg: 'Success updated', data: await Student.findByPk(id) })
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const destroy = async (req, res) => {
    try {
        const id = req.params.id
        await Student.destroy({ where: { id } })
        res.json({ msg: 'Success deleted' })
    } catch (error) {
        res.json({ message: error.message })
    }
}
