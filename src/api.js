const config = require('config')
const express = require('express')
const bodyParser = require('body-parser')
const xmlBodyParser = require('express-xml-bodyparser')
const basicAuth = require('express-basic-auth')

const serasaController = require('./controllers/serasaController')
const apiPort = config.get('port')
const api = express()

let server


exports.start = () => {
  api.use(xmlBodyParser())
  api.use(bodyParser.json())
  api.use(bodyParser.urlencoded({ extended: true }))
  
  api.use(basicAuth({
    users: { 'admin': 'admin' },
    challenge: true,
    realm: 'foo',
    unauthorizedResponse: (req) => {
      return `unauthorized. ip: ${req.ip}`
    }
  }))
  api.use('/',serasaController)

  server = api.listen(apiPort, console.info(`Integration online, port: ${apiPort}`))
}

exports.stop = () => {
  server.close(error => {
    if (error) {
      throw error
    }
  })
}
