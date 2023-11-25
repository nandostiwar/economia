const fs = require('fs');
const path = require('path');
const pool = require('../DB/db')

exports.getProductos = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM productos');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error al obtener productos' });
    }
};

exports.borrarProducto = async (req, res) => {
    const productoId = parseInt(req.params.id);

    try {
        await pool.query('DELETE FROM productos WHERE id = $1', [productoId]);
        res.json({message: 'Producto borrado correctamente'});
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error al borrar producto' });
    }
};

exports.crearProducto = async (req, res) => {
    const { nombre, valor } = req.body;

    try {
        await pool.query('INSERT INTO productos (nombre, valor) VALUES ($1, $2)', [nombre, valor]);
        res.json({message: 'Producto creado correctamente'});
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error al crear producto' });
    }
};
