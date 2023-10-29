import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';

const LoginPage = ({ setUserRole, setIsAuthenticated }) => {

  return (
    <div>
      <h1>Iniciar sesión</h1>
      <LoginForm setUserRole={setUserRole} setIsAuthenticated={setIsAuthenticated} /> {/* Pasa setUserRole a LoginForm */}
    </div>
  );
};

export default LoginPage;
