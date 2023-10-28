const pool = require('../conexion/conexion.js');

//funcion para validar los datos del login
const getUsuario = async (req, res) => {
    const { user} = req.body;

    try {
        const response = await pool.query('SELECT * FROM usuarios WHERE usuario = $1', [user]);
        res.status(200).json(response.rows);
    } catch (error) {
        console.error("Error en la consulta a la base de datos:", error);
        res.status(500).json({ error: "Error en la consulta a la base de datos" });
    }
};

//funcion que guarda los usuarios en la db
const createUser = async (req, res) => {
    
    const { user,rol } = req.body;
    
    try {
        const response = await pool.query('INSERT INTO usuarios (usuario,rol) VALUES ($1,$2)', [user,rol]);
        if (response.rowCount === 1) {
            res.json({
                message: 'ok',
                body: {
                    cliente: { user }
                }
            });
        }
    } catch (error) {
        console.error("Error en la consulta a la base de datos:", error);
        res.status(500).json({ error: "Error al agregar el cliente" });
    }
};

//consulta los USUARIOS en la base de datos
const getUserAll = async (req, res) => {
    try {
        const response = await pool.query("SELECT id_usuario AS id, usuario , CASE WHEN rol= 1 then 'Admin' ELSE 'Mesero' END AS tipo FROM usuarios ");
        res.status(200).json(response.rows);
    } catch (error) {
        console.error("Error en la consulta a la base de datos:", error);
        res.status(500).json({ error: "Error en la consulta a la base de datos" });
    }
};

//funcion que eliminar un usuario
const deleteUser = async (req, res) => {
    
    const id = parseInt(req.params.id);
    try {
        const response = await pool.query('DELETE FROM usuarios where id_usuario = $1', [id]);
        if (response.rowCount > 0) {
            res.json({
                estado: 'ok',
                mensaje: `El cliente de id: ${id} se eliminó correctamente.`
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
    getUsuario,
    getUserAll,
    createUser,
    deleteUser
};