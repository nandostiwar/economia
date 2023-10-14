import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ClienteList from '../components/ClienteList';

const ListarClientes = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/clientes')
      .then(response => {
        setClientes(response.data);
      })
      .catch(error => {
        alert('Ocurrió un error al obtener los clientes');
      });
  }, []);

  return (
    <div>
      <h1>Lista de Clientes</h1>
      <ClienteList clientes={clientes} />
    </div>
  );
};

export default ListarClientes;
