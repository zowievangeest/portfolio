import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import bodyParser from 'body-parser'

/**
 * Determines the current environment and sets the appropriate variables
 * @param app
 */
export function setEnvironment(app) {
  if (
    !process.env.NODE_ENV ||
    process.env.NODE_ENV.toString().trim() !== 'production'
  ) {
    require('dotenv').config({
      path: './dev-server/.env.development'
    })
    setDevEnv(app)
  } else {
    require('dotenv').config({
      path: './dev-server/.env.production'
    })
    setProdEnv(app)
  }
}

/**
 * Used to set development environment variables
 * @param app
 */
function setDevEnv(app) {
  app.use(bodyParser.json())
  app.use(morgan('dev'))
  app.use(cors())
}

/**
 * Used to set production environment variables
 * @param app
 */
function setProdEnv(app) {
  app.use(bodyParser.json())
  app.use(express.static(__dirname + '/../../dist'))
}
