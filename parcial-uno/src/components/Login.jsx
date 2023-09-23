import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import usuarios from '../usuarios';
import "./Login.css"

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = usuarios.find((u) => u.usuario === username && u.contraseña === password);
    if (user) {
      if (user.usuario === 'juego') {
        navigate('/juego');
      } else if (user.usuario === 'cocina') {
        navigate('/cocina');
      }
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <div className='LoginContainer'>
      <h1>Login</h1>
      <input
        className='LoginInput'
        type="text"
        placeholder="Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className='LoginInput'
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Iniciar sesión</button>
    </div>
  );
}

export default Login;