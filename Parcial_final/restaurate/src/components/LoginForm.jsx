import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ setUserRole, setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    
      const response = await axios.post('http://localhost:3001/api/usuarios/login', { nombre: username });
      try {
      if (response.data) {
        setMessage(`Bienvenido, ${response.data.nombre}`);
        setIsAuthenticated(true);
        if (response.data.rol === 'admin') {
          setUserRole('admin');
          navigate('/usuarios');
        } else if (response.data.rol === 'user') {

          setUserRole('user');
          navigate('/ventas');
        }
        
      }
    }
    catch(error){
      setIsAuthenticated(false);
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
