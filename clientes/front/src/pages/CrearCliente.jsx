import React from 'react';
import axios from 'axios';
import ClienteForm from '../components/ClienteForm';

const CrearCliente = () => {
  const crearCliente = (cliente) => {
    axios.post('http://localhost:3001/api/clientes', cliente)
      .then(response => {
        alert('Cliente creado exitosamente');
      })
      .catch(error => {
        alert('Ocurrió un error al crear el cliente');
      });
  };

  return (
    <div>
      <h1>Crear Cliente</h1>
      <ClienteForm onSubmit={crearCliente} />
    </div>
  );
};

export default CrearCliente;
