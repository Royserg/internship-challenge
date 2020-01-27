const mongoose = require('mongoose')

const { Schema, model } = mongoose

const vertexSchema = new Schema({
  name: {
    type: String
  },
  level: {
    type: Number
  },
  children: {
    type: [Schema.Types.ObjectId]
  }
})

const Vertex = model('Vertex', vertexSchema)

module.exports = Vertex
