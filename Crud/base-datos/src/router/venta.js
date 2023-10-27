const { Router } = require('express');
const routerVenta = Router();

const { getProduAll,createVenta,getVentaAll } = require('../controller/venta.js');

routerVenta.get('/getProdAll',    getProduAll  );
routerVenta.post('/createVenta',  createVenta  );
routerVenta.get('/getVentaAll',   getVentaAll  );
module.exports = routerVenta;