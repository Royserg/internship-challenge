const vertexRouter = require('express').Router()

vertexRouter.get('/', (req, res) => {
  res.json('Gonna show the whole tree')
})

module.exports = vertexRouter
