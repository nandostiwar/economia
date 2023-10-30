const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const rutasUsuario = require('./rutas/usuario-rutas')
const rutasProducto = require('./rutas/producto-rutas')
const rutaLogin = require('./rutas/login-ruta')
const rutaVenta = require('./rutas/ventas-rutas')

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({extended: false}));

app.use(rutasProducto);
app.use(rutasUsuario);
app.use(rutaLogin);
app.use(rutaVenta);


app.listen(3000)
console.log("Esta corriendo el servidor en el puerto 3000")

