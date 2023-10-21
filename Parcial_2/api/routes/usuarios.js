const express = require('express');
const usuariosController = require('../controllers/UsuariosController');

const router = express.Router();

router.get('/mostrar', usuariosController.getUsuario);
router.post('/borrar/:id', usuariosController.borrarUsuario); 
router.post('/login', usuariosController.autenticarUsuario); 
router.post('/crear', usuariosController.crearUsuario);

module.exports = router;