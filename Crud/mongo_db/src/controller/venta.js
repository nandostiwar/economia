const mongoose = require('mongoose');
const { connectDB } = require('../conexion/conexion.js'); // Importa el módulo de conexión

connectDB(); // Llama a la función para establecer la conexión

const venta = mongoose.model('venta');
const producto = mongoose.model('producto'); 

//consulta los PRODUCTOS en la base de datos
const getProduAll = async (req, res) => {
    try {
        const prod = await producto.find({});
        if (prod.length > 0) {
            res.status(200).json(prod);
        } else {
            res.status(404).json({ error: "No se encontraron ventas" });
        }
    } catch (error) {
        console.error("Error en la consulta a la base de datos:", error);
        res.status(500).json({ error: "Error en la consulta a la base de datos" });
    }
};


//funcion que guarda las VENTAS en la db
const createVenta = async (req, res) => {
    
    const { cantidad, productoId } = req.body

    try {
        const newVenta = new venta({ producto: productoId, cantidad });
        await newVenta.save();

        res.json({
            message: 'Venta creado con éxito',
            status: 'ok',
            body: {
                venta: newVenta
            }
        });
    } catch (error) {
        console.error("Error al agregar el venta:", error);
        res.status(500).json({ error: "Error al agregar el usuario" });
    }
};

//consulta los PRODUCTOS en la base de datos
const getVentaAll = async (req, res) => {
    try {
        const ventaProdu = await venta.find({});
        if (ventaProdu.length > 0) {
            res.status(200).json(ventaProdu);
        } else {
            res.status(404).json({ error: "No se encontraron ventas" });
        }
    } catch (error) {
        console.error("Error en la consulta a la base de datos:", error);
        res.status(500).json({ error: "Error en la consulta a la base de datos" });
    }
};

//consulta que genera el reporte general
const getReporte = async (req, res) => {

    const query = `SELECT 
                    pr.producto, 
                    v.cantidad, 
                    to_char(pr.precio, '999,999') as precio,
                    to_char((v.cantidad * pr.precio), '999,999') AS sub_total,
                    (
                        SELECT to_char(SUM(v.cantidad * pr.precio), '999,999')
                        FROM ventas v
                        INNER JOIN productos pr ON pr.id_producto = v.id_producto
                    ) AS TOTAL
                FROM ventas v
                INNER JOIN productos pr ON pr.id_producto = v.id_producto
        `;

    try {
        const response = await pool.query(query);
        res.status(200).json(response.rows);
    } catch (error) {
        console.error("Error en la consulta a la base de datos:", error);
        res.status(500).json({ error: "Error en la consulta a la base de datos" });
    }
};
module.exports = {
    getProduAll,
    createVenta,
    getVentaAll,
    getReporte
};