import express from 'express'
const router = express.Router()
import * as controller from './about-controller'
import * as auth from '../../services/auth-service'

router.post('/about', auth.requireLogin, controller.create)
router.get('/about', controller.index)
router.put('/about', auth.requireLogin, controller.update)

export default router
