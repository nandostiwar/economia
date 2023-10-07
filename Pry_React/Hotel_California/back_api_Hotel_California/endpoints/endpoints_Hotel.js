const express = require('express')
const router = express.Router()
const funciones = require('../funciones/funcionesController.js')

router
  .get('/getHabitaciones', funciones.getHabitaciones)
  .post('/liberar', funciones.actualizar)

module.exports = router
