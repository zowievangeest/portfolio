import express from 'express'
const router = express.Router()
import * as controller from './auth-controller'

router.post('/auth', controller.index)
router.get('/auth/me', controller.currentUser)

export default router
