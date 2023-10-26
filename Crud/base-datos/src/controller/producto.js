const pool = require('../conexion/conexion.js');

//Funcion que crea los PRODUCTOS
const createProducto = async (req, res) => {
    
    const { nombre, precio } = req.body;
    
    try {
        const response = await pool.query('INSERT INTO productos (precio,producto) VALUES ($1,$2)', [precio,nombre]);
        if (response.rowCount === 1) {
            res.json({
                message: 'ok',
                body: {
                    producto: { nombre }
                }
            });
        }
    } catch (error) {
        console.error("Error en la consulta a la base de datos:", error);
        res.status(500).json({ error: "Error al agregar un Producto" });
    }
};

//consulta los PRODUCTOS en la base de datos
const getProduAll = async (req, res) => {
    try {
        const response = await pool.query("SELECT id_producto AS id, producto AS camp_1, precio AS camp_2 FROM productos ");
        res.status(200).json(response.rows);
    } catch (error) {
        console.error("Error en la consulta a la base de datos:", error);
        res.status(500).json({ error: "Error en la consulta a la base de datos" });
    }
};

//Funcion que elimina PRODUCTOS
const deleteProduc = async (req, res) => {
    
    const id = parseInt(req.params.id);
    try {
        const response = await pool.query('DELETE FROM productos where id_producto = $1', [id]);
        if (response.rowCount > 0) {
            res.json({
                estado: 'ok',
                mensaje: `El Producto de id: ${id} se eliminó correctamente.`
            });
        } else {
            res.status(404).json(`No se encontró ningún cliente con el ID: ${id}`);
        }
    } catch (error) {
        console.error("Error en la consulta a la base de datos:", error);
        res.status(500).json({ error: "Error en la consulta a la base de datos" });
    }

};

module.exports = {
    createProducto,
    getProduAll,
    deleteProduc
};