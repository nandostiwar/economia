import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ReservarHabitacion from './pages/ReservarHabitacion';
import HabitacionesReservadas from './pages/HabitacionesReservadas';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Reservar Habitación</Link></li>
            <li><Link to="/reservadas">Habitaciones Reservadas</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route index element={<ReservarHabitacion />} />
          <Route path="/reservadas" element={<HabitacionesReservadas />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;