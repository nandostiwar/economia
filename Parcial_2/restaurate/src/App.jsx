import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import UserPage from './pages/UserPage';
import ManageProducts from './pages/ManageProducts';
import ManageVentas from './pages/ManageVentas';
import MostrarVentas from './pages/MostrarVentas';
import Navbar from './components/Navbar';

function App() {
  const [userRole, setUserRole] = useState(''); // 'admin' | 'user' | '';
  const [authenticated, setIsAuthenticated] = useState(false);

  console.log('', authenticated);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            !authenticated ? (
              <LoginPage
                setUserRole={setUserRole}
                setIsAuthenticated={setIsAuthenticated}
              />
            ) : (
              <Navigate to="/ventas" />
            )
          }
        />
        <Route
          path="/usuarios"
          element={
            authenticated ? (
              userRole === 'admin' ? <UserPage /> : <Navigate to="/ventas" />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/productos"
          element={
            authenticated ? (
              userRole === 'admin' ? <ManageProducts /> : <Navigate to="/ventas" />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/ventas"
          element={
            authenticated ? (
              userRole === 'admin' ? <ManageVentas /> : <Navigate to="/ventas" />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/mostrar"
          element={
            authenticated ? (
              userRole === 'admin' ? <MostrarVentas /> : <Navigate to="/ventas" />
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
