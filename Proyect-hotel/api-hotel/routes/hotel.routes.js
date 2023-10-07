const express = require('express');
const router = express.Router();
const hotelControllers = require('../controllers/hotelControllers.js');

//se cre una unica ruta, para que ejecute dependiedo que tipo de operacion
router
    .post('/sitio', hotelControllers.updateHabitacion)
    .get('/getAll', hotelControllers.getAllHabitacion)

module.exports = router;