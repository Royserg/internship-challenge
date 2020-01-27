require('dotenv').config()

// TODO: For docker probably there are some env variables to set-I rememvber something about that
const PORT = process.env.PORT || 3001

module.exports = {
  PORT
}
