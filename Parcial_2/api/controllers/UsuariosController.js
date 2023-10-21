const fs = require('fs');
const path = require('path');

exports.getUsuario = (req, res) => {
    const data = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../DB/usuarios.json'), 'utf-8'));
    res.json(data);
};

exports.borrarUsuario = (req, res) => {
    const pathArchivo = path.resolve(__dirname, '../DB/usuarios.json');

    const data = JSON.parse(fs.readFileSync(pathArchivo, 'utf-8'));
    const usuarioId = parseInt(req.params.id);

    const dataEdit = data.filter(e => e.id !== usuarioId);
    fs.writeFileSync(pathArchivo, JSON.stringify(dataEdit, null, 2));
};

exports.crearUsuario = (req, res) => {
    const pathArchivo = path.resolve(__dirname, '../DB/usuarios.json');

    const data = JSON.parse(fs.readFileSync(pathArchivo, 'utf-8'));
    const { nombre, rol } = req.body;

    const newId = data.length;
    data.push({id: newId, nombre, rol});

    fs.writeFileSync(pathArchivo, JSON.stringify(data, null, 2));
    res.status(201).send(data);
};

exports.autenticarUsuario = (req, res) => {
    const pathArchivo = path.resolve(__dirname, '../DB/usuarios.json');

    const data = JSON.parse(fs.readFileSync(pathArchivo, 'utf-8'));
    const { nombre } = req.body;

    const usuario = data.find(e => e.nombre === nombre);

    if (usuario) {
        res.status(200).send(usuario);
    } else {
        res.status(404).send({ message: 'Usuario no encontrado' });
    }
};