const express = require('express');
const ProductoController = require('../controllers/ProductoController');

const router = express.Router();

router.get('/mostrar', ProductoController.getProductos);
router.post('/borrar/:id', ProductoController.borrarProducto); 
router.post('/crear', ProductoController.crearProducto);

module.exports = router;