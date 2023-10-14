import React from 'react';

const ClienteList = ({ clientes }) => {
  return (
    <ul>
      {clientes.map((cliente, index) => (
        <li key={index}>
          {cliente.nombre} {cliente.apellido} - {cliente.correo} - {cliente.telefono}
        </li>
      ))}
    </ul>
  );
};

export default ClienteList;
