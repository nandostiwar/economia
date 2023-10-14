import React from 'react';

const Habitacion = ({ habitacion, onReservar }) => {
  return (
    <div className="habitacion">
      <h3>{habitacion.nombre}</h3>
      <button onClick={() => onReservar(habitacion.id)}>Reservar</button>
    </div>
  );
};

export default Habitacion;
