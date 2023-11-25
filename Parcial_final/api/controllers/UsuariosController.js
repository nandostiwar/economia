const fs = require('fs');
const path = require('path');
const pool = require('../DB/db');


exports.getUsuario = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM usuarios');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error al obtener usuarios' });
    }
};

exports.borrarUsuario = async (req, res) => {
    const usuarioId = parseInt(req.params.id);

    try {
        await pool.query('DELETE FROM usuarios WHERE id = $1', [usuarioId]);
        res.json({message: 'Usuario borrado correctamente'});
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error al borrar usuario' });
    }
};


exports.crearUsuario = async (req, res) => {
    const { nombre, rol } = req.body;

    try {
        await pool.query('INSERT INTO usuarios (nombre, rol) VALUES ($1, $2)', [nombre, rol]);
        res.status(201).json({message: 'Usuario creado correctamente'});
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error al crear usuario' });
    }
};

exports.autenticarUsuario = async (req, res) => {
    const { nombre } = req.body;

    try {
        const result = await pool.query('SELECT * FROM usuarios WHERE nombre = $1', [nombre]);
        const usuario = result.rows[0];

        if (usuario) {
            res.status(200).json(usuario);
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error al autenticar usuario' });
    }
};
