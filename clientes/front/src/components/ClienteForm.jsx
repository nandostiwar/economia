import React from 'react';

const ClienteForm = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { nombre, apellido, correo, telefono } = e.target.elements;
    onSubmit({
      nombre: nombre.value,
      apellido: apellido.value,
      correo: correo.value,
      telefono: telefono.value
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input type="text" name="nombre" required />
      </label>
      <label>
        Apellido:
        <input type="text" name="apellido" required />
      </label>
      <label>
        Correo:
        <input type="email" name="correo" required />
      </label>
      <label>
        Teléfono:
        <input type="tel" name="telefono" required />
      </label>
      <button type="submit">Crear Cliente</button>
    </form>
  );
};

export default ClienteForm;
