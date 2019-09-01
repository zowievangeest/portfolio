import express from 'express'
const router = express.Router()
import * as controller from './projects-controller'
import * as auth from '../../services/auth-service'

router.post('/project', auth.requireLogin, controller.create)
router.get('/projects', controller.index)
router.get('/project/:id', controller.show)
router.put('/project', auth.requireLogin, controller.update)
router.delete('/project/:id', auth.requireLogin, controller.remove)

export default router
