const express = require('express')
const cors = require('cors')

const vertexRouter = require('./controllers/vertexes')

// Create Express app
const app = express()

// Apply middlewares
app.use(cors())
app.use(express.json())

// Controllers
app.use('/api/vertexes', vertexRouter)

module.exports = app
