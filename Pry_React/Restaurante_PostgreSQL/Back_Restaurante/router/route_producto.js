const express = require('express')
const router = express.Router()
const controller = require('../controller/producto.js')

router
  .post('/crearProducto', controller.crearProducto)
  .get('/getProductos', controller.getProductos)
  .delete('/eliminarProducto/:producto', controller.eliminarProducto)
module.exports = router