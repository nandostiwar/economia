const pool = require('../conexion/conexion.js');


//consulta los PRODUCTOS en la base de datos
const getProduAll = async (req, res) => {
    try {
        const response = await pool.query("SELECT * FROM productos ");
        res.status(200).json(response.rows);
    } catch (error) {
        console.error("Error en la consulta a la base de datos:", error);
        res.status(500).json({ error: "Error en la consulta a la base de datos" });
    }
};


//funcion que guarda las VENTAS en la db
const createVenta = async (req, res) => {
    
    const { cantidad, productoId } = req.body

    try {
        const response = await pool.query('INSERT INTO ventas (cantidad,id_producto) VALUES ($1,$2)', [cantidad,productoId]);
        if (response.rowCount === 1) {
            res.json({
                message: 'ok',
                body: {
                    cliente: { productoId }
                }
            });
        }
    } catch (error) {
        console.error("Error en la consulta a la base de datos:", error);
        res.status(500).json({ error: "Error al agregar el cliente" });
    }
};

//consulta los PRODUCTOS en la base de datos
const getVentaAll = async (req, res) => {

    const query = "SELECT pr.producto, v.cantidad FROM ventas v INNER JOIN productos pr ON pr.id_producto = v.id_producto  ";

    try {
        const response = await pool.query(query);
        res.status(200).json(response.rows);
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