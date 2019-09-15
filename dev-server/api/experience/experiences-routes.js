import express from 'express'
const router = express.Router()
import * as controller from './experiences-controller'
import * as auth from '../../services/auth-service'

router.post('/experience', auth.requireLogin, controller.create)
router.get('/experiences', controller.index)
router.get('/experience/:id', auth.requireLogin, controller.show)
router.put('/experience', auth.requireLogin, controller.update)
router.delete('/experience/:id', auth.requireLogin, controller.remove)

export default router
