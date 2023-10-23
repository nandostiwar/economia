"use strict";

var fs = require('fs/promises');

var path = require('path');

var getDatos = function getDatos(req, res) {
  var dat, datJson;
  return regeneratorRuntime.async(function getDatos$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fs.readFile(path.join(__dirname, '../../db/datos.json')));

        case 2:
          dat = _context.sent;
          datJson = JSON.parse(dat);
          res.json(datJson);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
};

var registrar = function registrar(req, res) {
  var dat, datJson, ultimoId, datos, nuevoContenidoJSON;
  return regeneratorRuntime.async(function registrar$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(fs.readFile(path.join(__dirname, '../../db/datos.json')));

        case 2:
          dat = _context2.sent;
          datJson = JSON.parse(dat);
          res.json(datJson);
          ultimoId = 0;
          datJson.forEach(function (obj) {
            var id = parseInt(obj.id);

            if (!isNaN(id) && id > ultimoId) {
              ultimoId = id;
            }
          });
          datos = req.body.datos;
          datos.id = ultimoId + 1;
          datJson.push(datos);
          console.log(datos);
          nuevoContenidoJSON = JSON.stringify(datJson, null, 2);
          _context2.next = 14;
          return regeneratorRuntime.awrap(fs.writeFile(path.join(__dirname, '../../db/datos.json'), nuevoContenidoJSON));

        case 14:
        case "end":
          return _context2.stop();
      }
    }
  });
};

module.exports = {
  getDatos: getDatos,
  registrar: registrar
};