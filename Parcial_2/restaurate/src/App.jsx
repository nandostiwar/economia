import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import UserPage from './pages/UserPage';
import ManageProducts from './pages/ManageProducts';
import ManageVentas from './pages/ManageVentas';
import MostrarVentas from './pages/MostrarVentas';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/usuarios" element={<UserPage />} />
        <Route path="/productos" element={<ManageProducts />} />
        <Route path="/ventas" element={<ManageVentas />} />
        <Route path="/mostrar" element={<MostrarVentas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
