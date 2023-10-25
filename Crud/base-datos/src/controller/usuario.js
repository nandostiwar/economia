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
        const response = await pool.query('INSERT INTO usuarios (usuario,rol,fecha_crea) VALUES ($1,$2,current_timestamp)', [user,rol]);
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

//consulta los usuarios en la base de datos
const getUserAll = async (req, res) => {
    try {
        const response = await pool.query("SELECT id_usuario,usuario,CASE WHEN rol= 1 then 'Admin' ELSE 'Mesero' END AS roles FROM usuarios ");
        res.status(200).json(response.rows);
    } catch (error) {
        console.error("Error en la consulta a la base de datos:", error);
        res.status(500).json({ error: "Error en la consulta a la base de datos" });
    }
};

const getClienteById = async (req, res) => {

    const id = parseInt(req.params.id);
    
    const response = await pool.query('SELECT * FROM clientes WHERE id = $1', [id]);
    
    if (response.rows.length > 0) {

        res.json(response.rows);
    } else {

        res.json({ message: 'No se encontró ningún cliente con el ID proporcionado.' });
    }
};



const updateCliente = async (req, res) => {

    const id = parseInt(req.params.id);
    
    const { nombre } = req.body;

    const response =await pool.query('UPDATE clientes SET nombre = $1 WHERE id = $2', [
        nombre,
        id
    ]);

    if (response.rowCount > 0) {
        
        res.json('Se actualizó correctamente el cliente.');
    } else {
        
        res.json('No se pudo actualizar el cliente. Es posible que no se encontrara el registro con el ID proporcionado.');
    }
};

const deleteCliente = async (req, res) => {
    
    const id = parseInt(req.params.id);
    
    const response = await pool.query('DELETE FROM clientes where id = $1', [
        id
    ]);
    
    if (response.rowCount > 0) {
        res.json(`El cliente de id: ${id} se eliminó correctamente.`);
    } else {
        res.status(404).json(`No se encontró ningún cliente con el ID: ${id}`);
    }
};

module.exports = {
    getUsuario,
    getUserAll,
    createUser,
    updateCliente,
    deleteCliente
};