const fs = require('fs');
const path = require('path');
const pool = require('../DB/db');

exports.getVentas = async (req, res) => {
    try {
        const ventas = await pool.query('SELECT * FROM ventas');
        const detalles = await Promise.all(
            ventas.rows.map(async (venta) => {
                const detalle = await pool.query('SELECT * FROM detalle_ventas WHERE ventaId = $1', [venta.id]);
                return { ...venta, productos: detalle.rows };
            })
        );
        res.json(detalles);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error al obtener ventas' });
    }
};

exports.crearVentas = async (req, res) => {
    const { userId, productos } = req.body;
    
    if (!userId || !productos || productos.length === 0) {
        return res.status(400).json({message: 'Faltan datos'});
    }

    try {
        const nuevaVenta = await pool.query('INSERT INTO ventas (userId) VALUES ($1) RETURNING id', [userId]);
        const ventaId = nuevaVenta.rows[0].id;

        await Promise.all(
            productos.map(producto => {
                return pool.query('INSERT INTO detalle_ventas (ventaId, productoId, cantidad) VALUES ($1, $2, $3)', 
                [ventaId, producto.id, producto.cantidad]);
            })
        );

        res.status(201).json({message: 'Venta creada correctamente', id: ventaId});
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error al crear la venta' });
    }
};