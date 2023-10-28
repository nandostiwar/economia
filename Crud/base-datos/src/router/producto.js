const { Router } = require('express');
const routerProducto = Router();

const { createProducto,getProduAll,deleteProduc } = require('../controller/producto');


routerProducto.post('/createProducto',  createProducto );
routerProducto.get('/getProduAll',      getProduAll    );
routerProducto.delete('/delete/:id',    deleteProduc   );
module.exports = routerProducto;