const express = require('express')
const cors = require('cors')

const routerUsuarios = require('./router/route_usuario.js');
const routerProductos = require('./router/route_producto.js');
const routerVentas = require('./router/route_venta.js');

const app = express()

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

//Usuarios
app.use('/restaurante/usuarios', routerUsuarios);

//Productos
app.use('/restaurante/productos', routerProductos);

//Ventas
app.use('/restaurante/ventas', routerVentas);

// ultima validacion 404 Not Found
app.use((req, res) => {
  res.status(404).send('<h1>404 - Not Found</h1>')
})

app.listen(3500, () => {
  console.log('Listening at port http://localhost:3500/restaurante/')
})
