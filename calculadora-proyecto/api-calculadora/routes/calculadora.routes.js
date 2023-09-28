const express = require('express');
const router = express.Router();
const calculadoraControllers = require('../controllers/calculadoraControllers.js');

//se cre una unica ruta, para que ejecute dependiedo que tipo de operacion
router
    .post('/operacion', calculadoraControllers.operacion)
    // .post('/sumar', calculadoraControllers.sumar)
    // .post('/restar', calculadoraControllers.restar)
    // .post('/multiplicar', calculadoraControllers.multiplicar)

module.exports = router;