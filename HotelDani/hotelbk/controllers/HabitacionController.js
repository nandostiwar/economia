const fs = require('fs');
const path = require('path');

exports.getHabitacionesDisponibles = (req, res) => {
    const data = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../db/database.json'), 'utf8'));
    const habitacionesDisponibles = data.habitaciones.filter(habitacion => habitacion.disponible);
    res.json(habitacionesDisponibles);
};
  

exports.reservarHabitacion = (req, res) => {
    const habitacionId = parseInt(req.params.id);
    const filePath = path.resolve(__dirname, '../db/database.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
    const habitacion = data.habitaciones.find(h => h.id === habitacionId);
  
    if (!habitacion) {
      return res.status(404).json({ message: 'Habitación no encontrada' });
    }
  
    if (!habitacion.disponible) {
      return res.status(400).json({ message: 'Habitación ya reservada' });
    }
  
    habitacion.disponible = false;
  
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  
    res.json({ message: 'Habitación reservada con éxito', habitacion });
};
  
exports.getHabitacionesReservadas = (req, res) => {
    const data = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../db/database.json'), 'utf8'));
    const habitacionesReservadas = data.habitaciones.filter(habitacion => !habitacion.disponible);
    res.json(habitacionesReservadas);
};
  
exports.liberarHabitacion = (req, res) => {
    const habitacionId = parseInt(req.params.id);
    const filePath = path.resolve(__dirname, '../db/database.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
    const habitacion = data.habitaciones.find(h => h.id === habitacionId);
  
    if (!habitacion) {
      return res.status(404).json({ message: 'Habitación no encontrada' });
    }
  
    if (habitacion.disponible) {
      return res.status(400).json({ message: 'La habitación ya está disponible' });
    }
  
    habitacion.disponible = true;
  
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  
    res.json({ message: 'Habitación liberada con éxito', habitacion });
};