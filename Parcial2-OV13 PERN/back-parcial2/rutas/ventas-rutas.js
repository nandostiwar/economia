const{Router} = require('express');
const controladorVenta = require('../controladores/controlador-ventas')

const router = Router();

router.post('/venta',controladorVenta.creteVenta)
router.get('/venta',controladorVenta.getOpciones)
router.get('/venta/total',controladorVenta.getTotal)
router.get('/venta/totalventas',controladorVenta.getTotalVentas)

module.exports = router