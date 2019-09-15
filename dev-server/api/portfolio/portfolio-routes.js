import express from 'express'
const router = express.Router()
import * as controller from '../portfolio/portfolio-controller'

router.get('/portfolio', controller.index)

export default router
