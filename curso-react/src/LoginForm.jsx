import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'juego' && password === 'juego123') {
      onLogin('/juego');
      navigate('/juego');
    } else if (username === 'cocina' && password === 'cocina123') {
      onLogin('/cocina');
      navigate('/cocina');
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="login-form">
      <h2>Iniciar Sesión</h2>
      <input
        type="text"
        placeholder="Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Iniciar Sesión</button>
    </div>
  );
}

export default LoginForm;
