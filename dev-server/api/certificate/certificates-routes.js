import express from 'express'
const router = express.Router()
import * as controller from './certificates-controller'
import * as auth from '../../services/auth-service'

router.post('/certificate', auth.requireLogin, controller.create)
router.get('/certificates', controller.index)
router.get('/certificate/:id', auth.requireLogin, controller.show)
router.put('/certificate', auth.requireLogin, controller.update)
router.delete('/certificate/:id', auth.requireLogin, controller.remove)

export default router
