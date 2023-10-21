const fs = require('fs');
const path = require('path');

exports.getProductos = (req, res) => {
    const data = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../DB/productos.json'), 'utf-8'));
    res.json(data);
};

exports.borrarProducto = (req, res) => {
    const pathArchivo = path.resolve(__dirname, '../DB/productos.json');

    const data = JSON.parse(fs.readFileSync(pathArchivo, 'utf-8'));
    const productoId = parseInt(req.params.id);

    const dataEdit = data.filter(e => e.id !== productoId);
    fs.writeFileSync(pathArchivo, JSON.stringify(dataEdit, null, 2));
    res.json({message: 'Creado correctamente'});
};

exports.crearProducto = (req, res) => {
    const pathArchivo = path.resolve(__dirname, '../DB/productos.json');

    const data = JSON.parse(fs.readFileSync(pathArchivo, 'utf-8'));
    const { nombre, valor } = req.body;

    const newId = data.length + 1;
    data.push({id: newId, nombre, valor});

    fs.writeFileSync(pathArchivo, JSON.stringify(data, null, 2));
    res.json({message: 'Creado correctamente'});
};