const { Router } = require('express');
const routerCliente = Router();

const { getUsuario, getClienteById, createCliente, updateCliente, deleteCliente } = require('../controller/usuario.js');

routerCliente.post('/getUser',        getUsuario     );


module.exports = routerCliente;