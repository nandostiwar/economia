const pool = require('../conexion.js');
const { response } = require("express");

// Consulta todos los productos
const getProductos = async (req, res) => {
  try {
    const response = await pool.query(
      "SELECT id_producto, producto, precio FROM productos "
    );
    if (response.rows.length > 0) {
        const data = { productos: response.rows };
      res.status(200).json(data);
      } else {
        res.status(200).json({ message: "No hay datos en la consulta" });
      }
  } catch (error) {
    console.error("❌ Error en la consulta a la base de datos:", error);
    res
      .status(500)
      .json({ error: "❌ Error en la consulta a la base de datos" });
  }
};

// Crear un nuevo producto
const crearProducto = async (req, res) => {
  try {
    const { body } = req;
    const { producto, precio } = body;

    const response = await pool.query(
      "INSERT INTO productos (producto, precio) VALUES ($1,$2)",
      [producto, precio]
    );

    res.json({
      message: "✅ Registro creado exitosamente",
    });
  } catch (error) {
    console.error("❌ Error al registrar el usuario:", error);
    res.status(500).json({
      message: "❌ Error al registrar el usuario",
    });
  }
};

// Eliminar un producto existente
const eliminarProducto = async (req, res) => {
    const { producto } = req.params;
    
    try {
  
        const response = await pool.query('DELETE FROM productos where producto = $1', [producto]);
        if (response.rowCount > 0) {
            res.status(200).json({
                estado: 'OK', 
                mensaje: `✅ El producto: ${producto} se eliminó correctamente.`
            });
        } else {
            res.status(404).json(`No se encontró ningún producto: ${producto}`);
        }

    } catch (error) {
      console.error("❌ Error al eliminar el producto:", error);
      res.status(500).json({
        message: "❌ Error 500 al eliminar el producto",
      });
    }
  };

module.exports = {
    crearProducto,
    getProductos,
    eliminarProducto
}