"use strict";

var express = require('express');

var rutas = express.Router();

var controladores = require('./controladores/controladores.js');

rutas.get('/', controladores.getHabitaciones).patch('/:habitacion', controladores.editarEstado);
module.exports = rutas;