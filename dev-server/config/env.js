import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import bodyParser from 'body-parser'

/**
 * Determines the current environment and sets the appropriate variables
 * @param {Express App} app
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
 * @param {Express App} app
 */
function setDevEnv(app) {
  app.use(bodyParser.json()) // Allows parsing JSON from the client
  app.use(morgan('dev')) // Log HTTP Requests to the node console (for debugging purposes)
  app.use(cors()) // Enable Cross Origin Requests, since Vue.JS is on a different origin
}

/**
 * Used to set production environment variables
 * @param {Express App} app
 */
function setProdEnv(app) {
  app.use(bodyParser.json())
  app.use(express.static(__dirname + '/../../dist'))
}
