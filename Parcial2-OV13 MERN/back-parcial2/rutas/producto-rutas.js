const {Router} = require('express');
const rutasProducto = require('../controladores/controlador-producto')

const router = Router();

router.get('/producto',rutasProducto.getProductos)
router.post('/producto',rutasProducto.createProducto)
router.put('/producto/:id',rutasProducto.delateProducto)

module.exports = router

