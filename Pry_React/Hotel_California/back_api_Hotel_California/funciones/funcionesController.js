const fs = require('fs/promises')
const path = require('path')

/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

/** Obtener todas las habitaciones */
const getHabitaciones = async (req, res) => {
  const habitacion = await fs.readFile(path.join(__dirname, '../data/habitaciones.json'))
  const habitacionJSON = JSON.parse(habitacion)
  res.json(habitacionJSON)
}

const actualizar = async (req, res) => {
  const habitacionEdit = req.params.habitacionEdit
  const { estadoEdit } = req.body
  const habitacionList = await fs.readFile(path.join(__dirname, '../data/habitaciones.json'))
  const habitacionObject = JSON.parse(habitacionList)

  const updated = {
    ...habitacionObject,
    [habitacionEdit]: estadoEdit
  }

  await fs.writeFile(path.join(__dirname, '../data/habitaciones.json'), JSON.stringify(updated, null, 2), { encoding: 'utf-8' })

  res.json({
    message: 'Updated succesfull'
  })
}

module.exports = {
  actualizar,
  getHabitaciones
}
