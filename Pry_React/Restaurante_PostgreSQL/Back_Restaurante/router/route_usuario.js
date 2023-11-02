const express = require('express')
const router = express.Router()
const controller = require('../controller/usuario.js')

router
  .get('/validarLogin/:user', controller.validarLogin)
  .post('/crearUsuario', controller.crearUsuario)
  .get('/getUsuarios', controller.getUsuarios)
  .delete('/eliminarUsuario/:user', controller.eliminarUsuario)
module.exports = router