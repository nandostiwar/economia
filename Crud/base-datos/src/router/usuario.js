const { Router } = require('express');
const routerCliente = Router();

const { getUsuario, getUserAll, createUser, deleteUser } = require('../controller/usuario.js');

routerCliente.post('/getUser',       getUsuario   );
routerCliente.post('/createUser',    createUser   );
routerCliente.get('/getUserAll',     getUserAll   );
routerCliente.delete('/delete/:id',  deleteUser   );


module.exports = routerCliente;