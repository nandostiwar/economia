import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Habitacion from '../components/Habitacion';
import { useNavigate } from 'react-router-dom';

const ReservarHabitacion = () => {
  const [habitaciones, setHabitaciones] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    axios.get('http://localhost:3001/api/habitaciones/disponibles')
      .then(response => {
        setHabitaciones(response.data);
      });
  }, []);

  const reservarHabitacion = (id) => {
    axios.post(`http://localhost:3001/api/habitaciones/reservar/${id}`)
      .then(response => {
        setHabitaciones(habitaciones.map(habitacion => {
          if (habitacion.id === id) {
            habitacion.disponible = false;
          }
          return habitacion;
        }));
        navigate('/reservadas');
      })
      .catch(error => {
        console.error("Error al reservar la habitación:", error);
      });
  };

  return (
    <div>
      <h1>Habitaciones disponibles</h1>
      {habitaciones.map(habitacion => (
        <Habitacion key={habitacion.id} habitacion={habitacion} onReservar={reservarHabitacion} />
      ))}
    </div>
  );
};

export default ReservarHabitacion;
