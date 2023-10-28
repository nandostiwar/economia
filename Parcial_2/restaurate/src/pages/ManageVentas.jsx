import React from 'react';
import VentasForm from '../components/VentasForm';
import Navbar from '../components/Navbar';

const ManageVentas = () => {
  return (
    <div>
      <h1>Crear Venta</h1>
     <Navbar />
      <VentasForm />
    </div>
  );
};

export default ManageVentas;
