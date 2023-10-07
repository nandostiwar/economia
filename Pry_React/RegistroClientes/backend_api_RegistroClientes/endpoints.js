const express = require('express')
const router = express.Router()
const funciones = require('./funciones.js')

router
  .get('/getClientes', funciones.getClientes)
  .post('/regisCliente', funciones.regisCliente)

module.exports = router