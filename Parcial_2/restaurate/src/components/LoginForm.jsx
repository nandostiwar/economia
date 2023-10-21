import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/usuarios/login', { nombre: username });
      if (response.data) {
        setMessage(`Bienvenido, ${response.data.nombre}`);
        
        if (response.data.rol === 'admin') {
          navigate('/usuarios');
        } else if (response.data.rol === 'user') {
          navigate('/ventas');
        }
        
      }
    } catch (error) {
      setMessage('Usuario no encontrado');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={e => setUsername(e.target.value)}
        placeholder="Nombre de usuario"
      />
      <button onClick={handleLogin}>Iniciar sesión</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default LoginForm;
