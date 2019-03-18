import express from 'express'
const app = express()
const displayRoutes = require('express-routemap')
import {registerRoutes} from './routes'
import {setEnvironment} from './config/env'
import {connectToDB} from './config/db'

setEnvironment(app)
connectToDB()
registerRoutes(app)

/**
 * All non-API requests made to the server
 * will hit this request, which just returns the main layout, html file
 */
app.get('*', (req, res) => {
  if (
    !process.env.NODE_ENV ||
    process.env.NODE_ENV.toString().trim() !== 'production'
  ) {
    return res.send('Development modus draait.')
  } else {
    // Returns the main index file in production environment
    return res.sendFile('index.html', {root: __dirname + '/../dist/'})
  }
})

/**
 * Starts the server on the given port 3000
 */
app.listen(3000, () => {
  console.log(
    'Zowie - Portfolio draait op port 3000 in ' +
      process.env.NODE_ENV +
      ' modus!'
  )
  displayRoutes(app)
})
