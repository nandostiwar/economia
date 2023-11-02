const mongoose = require('mongoose');
const { connectDB } = require('../conexion/conexion.js'); // Importa el módulo de conexión

connectDB(); // Llama a la función para establecer la conexión

const User = mongoose.model('User'); // Asegúrate de que has definido el modelo 'User' en tu archivo de conexión

//funcion para validar los datos del login
const getUsuario = async (req, res) => {
    const { user } = req.body;

    try {
        const usuario = await User.findOne({ usuario: user });
        if (usuario) {
            res.status(200).json(usuario);
        } else {
            res.status(404).json({ error: "Usuario no encontrado" });
        }
    } catch (error) {
        console.error("Error en la consulta a la base de datos:", error);
        res.status(500).json({ error: "Error en la consulta a la base de datos" });
    }
};

// Función que guarda los usuarios en la base de datos
const createUser = async (req, res) => {
    const { user, rol } = req.body;

    try {
        const newUser = new User({ usuario: user, rol });
        await newUser.save();

        res.json({
            message: 'Usuario creado con éxito',
            status: 'ok',
            body: {
                usuario: newUser
            }
        });
    } catch (error) {
        console.error("Error al agregar el usuario:", error);
        res.status(500).json({ error: "Error al agregar el usuario" });
    }
};


//consulta los USUARIOS en la base de datos
const getUserAll = async (req, res) => {
    try {
        const usuario = await User.find({});
        if (usuario.length > 0) {
            res.status(200).json(usuario);
        } else {
            res.status(404).json({ error: "No se encontraron ventas" });
        }
    } catch (error) {
        console.error("Error en la consulta a la base de datos:", error);
        res.status(500).json({ error: "Error en la consulta a la base de datos" });
    }
};

// Función para eliminar un usuario por ID
const deleteUser = async (req, res) => {
    const id = req.params.id; // El ID del usuario que deseas eliminar

    try {
        const result = await User.deleteOne({ _id: id });

        if (result.deletedCount > 0) {
            res.json({
                estado: 'ok',
                mensaje: `El usuario con ID: ${id} se eliminó correctamente.`
            });
        } else {
            res.status(404).json(`No se encontró ningún usuario con el ID: ${id}`);
        }
    } catch (error) {
        console.error("Error al eliminar el usuario:", error);
        res.status(500).json({ error: "Error al eliminar el usuario" });
    }
};


module.exports = {
    getUsuario,
    getUserAll,
    createUser,
    deleteUser
};