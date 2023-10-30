const {Router} = require('express');
const usuarioControllers = require('../controladores/controlador-usuario')

const router = Router();

router.get('/usuario',usuarioControllers.getUsuarios )

router.get('/usuario/:id',usuarioControllers.getUsuario)

router.post('/usuario',usuarioControllers.createUsuario)

router.put('/usuario/:id',usuarioControllers.delateUsuario)


module.exports = router
