const fs = require('fs/promises');
const path = require('path');

//funcion que actualiza el estado de la habitacion
const updateHabitacion = async (req, res) => {
    const { body } = req;
    const { numero, tipo, estadoHabi } = body;

        const allHabitacion = await fs.readFile(path.join(__dirname, '../db/habitacion.json'));
        const objHabitacion = JSON.parse(allHabitacion);

        // Actualiza el valor específico de hX según el estadoHabi
        objHabitacion[tipo][`h${numero}`] = estadoHabi;

        // Escribe el objeto actualizado de vuelta al archivo JSON
        await fs.writeFile(path.join(__dirname, '../db/habitacion.json'), JSON.stringify(objHabitacion, null, 2), { encoding: 'utf-8' });

        res.json({
            message: "Updated"
        });

}

//funcion que consulta todos los estados de la funcion
const getAllHabitacion = async (req, res) => {
    const habitaciones = await fs.readFile(path.join(__dirname, '../db/habitacion.json'));
    const habitacionJson = JSON.parse(habitaciones);
    res.json(habitacionJson);
}

module.exports = {
    updateHabitacion,
    getAllHabitacion
}
