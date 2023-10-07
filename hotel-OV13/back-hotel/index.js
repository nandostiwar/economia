const express = require('express');
const cors = require('cors');
const {urlencoded, json} = require('express');
const rutas = require('./rutas/habitaciones_rutas.js')

const app = express();
app.use(urlencoded({extended: true}));
app.use(json());

app.use(cors());
app.use('/v1/habitaciones', rutas)

app.listen(4000, ()=>{
    console.log("Servidor corriendo en el puerto 4000");
})