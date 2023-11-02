const express = require('express')
const router = express.Router()
const controller = require('../controller/venta.js')

router
  .post('/crearVenta', controller.crearVenta)
  .get('/getVentas', controller.getVentas)
  
module.exports = router