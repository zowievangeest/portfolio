import express from 'express'
const router = express.Router()
import * as controller from './educations-controller'
import * as auth from '../../services/auth-service'

router.post('/education', auth.requireLogin, controller.create)
router.get('/educations', controller.index)
router.get('/education/:id', auth.requireLogin, controller.show)
router.put('/education', auth.requireLogin, controller.update)
router.delete('/education/:id', auth.requireLogin, controller.remove)

export default router
