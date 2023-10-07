const fs = require('fs/promises');
const path = require('path');

//funcion que actualiza el estado de la habitacion
const setDatos = async (req, res) => {
    try {
        const { body } = req;
        const { nombre, edad, cedula, correo } = body;

        // Ruta al archivo datos.json
        const datosJSONPath = path.join(__dirname, '../db/datos.json');

        let datosObj = { datos: [] };

        try {
            // Intenta leer el archivo datos.json y parsearlo
            const datosJSON = await fs.readFile(datosJSONPath, 'utf-8');
            datosObj = JSON.parse(datosJSON);
        } catch (error) {
            // Maneja errores de lectura o análisis
            console.error('Error al leer/analizar el archivo datos.json:', error);
        }

        // Crear un objeto con los datos recibidos
        const nuevoDato = {
            nombre,
            edad,
            cedula,
            correo,
        };

        // Agregar el nuevo objeto al array dentro del objeto principal
        datosObj.datos.push(nuevoDato);

        // Escribir el objeto principal actualizado de vuelta al archivo datos.json
        await fs.writeFile(datosJSONPath, JSON.stringify(datosObj, null, 2), 'utf-8');

        res.json({
            message: 'Datos guardados con éxito',
        });
    } catch (error) {
        console.error('Error al guardar los datos:', error);
        res.status(500).json({
            error: 'Error interno del servidor',
        });
    }
};

//funcion que consulta todos los estados de la funcion
const getAllDatos = async (req, res) => {

    // Ruta al archivo datos.json
    const datosJSONPath = path.join(__dirname, '../db/datos.json');

    const datosJSON = await fs.readFile(datosJSONPath, 'utf-8');
    const datosObj = JSON.parse(datosJSON);
    res.json(datosObj);
}

module.exports = {
    setDatos,
    getAllDatos
}
