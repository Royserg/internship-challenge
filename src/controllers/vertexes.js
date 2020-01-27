const vertexRouter = require('express').Router()
const Vertex = require('../models/vertex')

/* === Tree root ===  */
vertexRouter.get('/', async (req, res) => {
  try {
    const vertexes = await Vertex.find({})
    res.json(vertexes)
  } catch (error) {
    throw new Error(error)
  }
})

vertexRouter.post('/', async (req, res) => {
  try {
    // Check if root vertex exists
    const allVertexes = await Vertex.find({})
    if (allVertexes.length > 0) {
      return res
        .status(400)
        .json({ message: 'There can be only one root vertex' })
    }

    const vertex = Vertex({ ...req.body, level: allVertexes.length })
    const result = await vertex.save()

    res.status(201).json(result)
  } catch (error) {
    throw new Error(error)
  }
})

/* === Vertexes ===  */
vertexRouter.post('/:parent_id', async (req, res) => {
  // TODO: Adding vertexes to parents
})

module.exports = vertexRouter
