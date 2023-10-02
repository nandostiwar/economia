const express = require('express');
const router = express.Router();
const hotelControllers = require('../controllers/hotelControllers.js');

//se cre una unica ruta, para que ejecute dependiedo que tipo de operacion
router
    .post('/sitio', hotelControllers.prueba)
    // .post('/sumar', calculadoraControllers.sumar)
    // .post('/restar', calculadoraControllers.restar)
    // .post('/multiplicar', calculadoraControllers.multiplicar)

module.exports = router;