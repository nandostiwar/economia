const express = require('express');
const cors = require('cors');

const routerUsuario = require('./router/usuario');
const routerProducto = require('./router/producto');


const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

// Routes

//Usuarios
app.use('/usuario', routerUsuario);

//Productos
app.use('/producto', routerProducto);

app.listen(3000);
console.log('Server on port', 3000);