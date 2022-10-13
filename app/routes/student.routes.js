import express from 'express'
import { destroy, index, show, store, update } from '../controllers/student.controller.js'

const router = express.Router()

router.get('/', index)
router.post('/', store)
router.get('/:id', show)
router.put('/:id', update)
router.delete('/:id', destroy)

export default router
