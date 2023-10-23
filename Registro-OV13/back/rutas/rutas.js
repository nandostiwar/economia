const express = require('express');
const rutas = express.Router();
const controladores = require('./controladores/controladores.js');

rutas
    .get('/',controladores.getDatos)
    .patch('/:id',controladores.registrar)

module.exports = rutas