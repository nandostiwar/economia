"use strict";

var express = require('express');

var cors = require('cors');

var _require = require('express'),
    urlencoded = _require.urlencoded,
    json = _require.json;

var rutas = require('./rutas/rutas.js');

var app = express();
app.use(urlencoded({
  extended: true
}));
app.use(json());
app.use(cors());
app.use('/v1/registro', rutas);
app.listen(4000, function () {
  console.log("Servidor corriendo en el puerto 4000");
});