const { Router } = require('express');
const routerCliente = Router();

const { getUsuario, getUserAll, createUser, updateCliente, deleteCliente } = require('../controller/usuario.js');

routerCliente.post('/getUser',        getUsuario     );
routerCliente.post('/createUser',        createUser     );
routerCliente.get('/getUserAll',        getUserAll     );


module.exports = routerCliente;