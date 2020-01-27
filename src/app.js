const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const { MONGODB_URI } = require('./utils/config')

const vertexRouter = require('./controllers/vertexes')

// Create Express app
const app = express()

// Apply middlewares
app.use(cors())
app.use(express.json())

// Controllers
app.use('/api/vertexes', vertexRouter)

// Connect to db
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

module.exports = app
