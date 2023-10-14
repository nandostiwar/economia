const fs = require('fs');
const path = require('path');

exports.crearCliente = (req, res) => {
    const { nombre, apellido, correo, telefono } = req.body;
    const filePath = path.resolve(__dirname, '../db/database.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    const nuevoCliente = {
        id: data.clientes.length + 1,
        nombre,
        apellido,
        correo,
        telefono
    };

    data.clientes.push(nuevoCliente);

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    res.status(201).json(nuevoCliente);
};

exports.listarClientes = (req, res) => {
    const data = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../db/database.json'), 'utf8'));
    res.json(data.clientes);
};
