import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const HabitacionesReservadas = () => {
  const [habitacionesReservadas, setHabitacionesReservadas] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get('http://localhost:3001/api/habitaciones/reservadas') 
      .then(response => {
        setHabitacionesReservadas(response.data);
      });
  }, []);

  const liberarHabitacion = (id) => {
    axios.post(`http://localhost:3001/api/habitaciones/liberar/${id}`)
      .then(response => {
        setHabitacionesReservadas(habitacionesReservadas.map(habitacion => {
          if (habitacion.id === id) {
            habitacion.disponible = true;
          }
          return habitacion;
        }));
        navigate('/'); 
      })
      .catch(error => {
        console.error("Error al liberar la habitación:", error);
      });
  };

  return (
    <div>
      <h1>Habitaciones Reservadas</h1>
      {habitacionesReservadas.map(habitacion => (
        <div key={habitacion.id}>
          <span>{habitacion.nombre}</span>
          <button onClick={() => liberarHabitacion(habitacion.id)}>Liberar</button>
        </div>
      ))}
    </div>
  );
};

export default HabitacionesReservadas;
