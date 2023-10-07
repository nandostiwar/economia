const express = require('express');
const router = express.Router();
const hotelControllers = require('../controllers/hotelControllers.js');

router
    .post('/setEstado', hotelControllers.updateHabitacion)
    .get('/getAll', hotelControllers.getAllHabitacion)

module.exports = router;