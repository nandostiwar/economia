const express = require('express');
const ventasController = require('../controllers/VentasController');

const router = express.Router();

router.get('/mostrar', ventasController.getVentas);
router.post('/crear', ventasController.crearVentas);

module.exports = router;