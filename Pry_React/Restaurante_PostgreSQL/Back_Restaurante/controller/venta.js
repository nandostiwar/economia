const pool = require("../conexion.js");

// Crear un nuevo venta
const crearVenta = async (req, res) => {
  try {
    const { body } = req;
    const { id_producto, cantidad } = body;
    // const cantidad = parseInt(body.cantidad, 10); // Convierte cantidad a un número entero


    // Consulta SQL para insertar la venta
    const response = await pool.query(
      `
        INSERT INTO ventas (id_producto, cantidad, valor_venta)
        SELECT 
            $1 as id_producto, 
            $2 as cantidad, 
            (p.precio * $2) AS valor_venta
        FROM productos p
        WHERE p.id_producto = $1;
      `,
      [id_producto, cantidad]
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

// Consulta todos los ventas
const getVentas = async (req, res) => {
  try {
    const response = await pool.query(
      "Select v.id_venta, p.producto, v.cantidad, p.precio, v.valor_venta from ventas v inner join productos p on v.id_producto = p.id_producto"
    );
    if (response.rows.length > 0) {
      const data = { ventas: response.rows };
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

module.exports = {
  crearVenta,
  getVentas,
};
