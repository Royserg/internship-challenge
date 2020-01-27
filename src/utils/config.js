require('dotenv').config()

const {
  PORT = 3001,
  MONGODB_URI = 'mongodb://mongo:27017/internship'
} = process.env

module.exports = {
  PORT,
  MONGODB_URI
}
