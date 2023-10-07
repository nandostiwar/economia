const express = require('express');
const rutas = express.Router();
const controladores = require('./controladores/controladores.js');

rutas
    .get('/',controladores.getHabitaciones)
    .patch('/:habitacion',controladores.editarEstado)

module.exports = rutas;