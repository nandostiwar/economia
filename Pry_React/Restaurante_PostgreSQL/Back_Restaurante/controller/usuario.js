const { response } = require("express");
const pool = require("../conexion.js");

// Valida login usuario
const validarLogin = async (req, res) => {
    const user = req.params.user;
    console.log('user: ', user)
    try {
      const response = await pool.query(
        "SELECT usuario, rol FROM usuarios WHERE usuario = $1",
        [user]
      );
      if (response.rows.length > 0) {
        res.status(200).json(response.rows[0]);
      } else {
        res.status(200).json({ message: "Usuario no encontrado" });
      }
    } catch (error) {
      console.error("❌ Error en la consulta a la base de datos:", error);
      res.status(500).json({ error: "❌ Error en la consulta a la base de datos" });
    }
  };

// Consulta todos los usuarios
const getUsuarios = async (req, res) => {
  try {
    const response = await pool.query(
      "SELECT usuario, nombre, CASE WHEN rol= 1 then 'Administrador' ELSE 'Mesero' END AS rol FROM usuarios "
    );
    if (response.rows.length > 0) {
        const data = { usuarios: response.rows }; // Encapsula la matriz de usuarios en un objeto
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

// Crear un nuevo usuario
const crearUsuario = async (req, res) => {
  try {
    const { body } = req;
    const { user, nombre, rol } = body;

    const response = await pool.query(
      "INSERT INTO usuarios (usuario, nombre, rol) VALUES ($1,$2, $3)",
      [user, nombre, rol]
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

// Eliminar un usuario existente
const eliminarUsuario = async (req, res) => {
    const { user } = req.params;
    
    try {
  
        const response = await pool.query('DELETE FROM usuarios where usuario = $1', [user]);
        if (response.rowCount > 0) {
            res.status(200).json({
                estado: 'OK', 
                mensaje: `✅ El usuario: ${user} se eliminó correctamente.`
            });
        } else {
            res.status(404).json(`No se encontró ningún usuario: ${user}`);
        }

    } catch (error) {
      console.error("❌ Error al eliminar el cliente:", error);
      res.status(500).json({
        message: "❌ Error 500 al eliminar el cliente",
      });
    }
  };

module.exports = {
  validarLogin,
  crearUsuario,
  getUsuarios,
  eliminarUsuario,
};
