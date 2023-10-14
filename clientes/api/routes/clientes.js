const express = require('express');
const ClienteController = require('../controllers/ClienteController');

const router = express.Router();

router.post('/', ClienteController.crearCliente);
router.get('/', ClienteController.listarClientes);

module.exports = router;