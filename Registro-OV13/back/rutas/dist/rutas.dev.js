"use strict";

var express = require('express');

var rutas = express.Router();

var controladores = require('./controladores/controladores.js');

rutas.get('/', controladores.getDatos).patch('/:id', controladores.registrar);
module.exports = rutas;