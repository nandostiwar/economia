const express = require('express');
const router = express.Router();
const hotelControllers = require('../controllers/datosControllers.js');

router
    .post('/setDatos', hotelControllers.setDatos)
    .get('/getAll', hotelControllers.getAllDatos)

module.exports = router;