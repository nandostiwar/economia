import React from 'react';
import VentasList from '../components/VentasList';
import Navbar from '../components/Navbar';

const ManageVentas = () => {
  return (
    <div>
      <Navbar />
      <h1>Mostrar Ventas</h1>
      <VentasList />
    </div>
  );
};

export default ManageVentas;
