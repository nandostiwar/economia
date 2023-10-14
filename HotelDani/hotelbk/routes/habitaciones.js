const express = require('express');
const HabitacionController = require('../controllers/HabitacionController');

const router = express.Router();

router.get('/disponibles', HabitacionController.getHabitacionesDisponibles);
router.get('/reservadas', HabitacionController.getHabitacionesReservadas); 
router.post('/reservar/:id', HabitacionController.reservarHabitacion);
router.post('/liberar/:id', HabitacionController.liberarHabitacion);

module.exports = router;
