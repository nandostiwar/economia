import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import Juego from './Juego';
import Cocina from './Cocina';

function Ruta() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="juego" element={<Juego />} />
      <Route path="cocina" element={<Cocina />} />
    </Routes>
  );
}

export default Ruta;
