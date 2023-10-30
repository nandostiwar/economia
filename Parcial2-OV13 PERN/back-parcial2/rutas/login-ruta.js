const {Router} = require('express');
const controladorLogin = require('../controladores/controlador-login')

const router = Router();

router.post('/login',controladorLogin.login)

module.exports = router