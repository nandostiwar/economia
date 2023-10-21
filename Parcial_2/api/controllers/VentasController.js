const fs = require('fs');
const path = require('path');

exports.getVentas = (req, res) => {
    const data = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../DB/ventas.json'), 'utf-8'));
    res.json(data);
};


exports.crearVentas = (req, res) => {
    const pathArchivo = path.resolve(__dirname, '../DB/ventas.json');
    const data = JSON.parse(fs.readFileSync(pathArchivo, 'utf-8'));

    const { userId, productos } = req.body;
    
    if (!userId || !productos) {
        return res.status(400).send({message: 'Faltan datos'});
    }

    const newId = data.length + 2;
    const nuevaVenta = { id: newId, userId, productos };

    data.push(nuevaVenta);
    fs.writeFileSync(pathArchivo, JSON.stringify(data, null, 2));
    res.status(201).send({message: 'Venta creada correctamente', nuevaVenta});
};
