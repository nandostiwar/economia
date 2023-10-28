const { Router } = require('express');
const routerVenta = Router();

const { getProduAll,createVenta,getVentaAll,getReporte } = require('../controller/venta.js');

routerVenta.get('/getProdAll',    getProduAll  );
routerVenta.post('/createVenta',  createVenta  );
routerVenta.get('/getVentaAll',   getVentaAll  );
routerVenta.get('/getReporte',    getReporte   );
module.exports = routerVenta;