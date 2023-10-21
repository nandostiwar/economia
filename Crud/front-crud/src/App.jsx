import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './App.css'

function App() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const validar_user = () => {

    fetch(`http://localhost:3000/usuario/getUser`, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({user,password })
      })
        .then(res => res.json())
        .then(responseData => {
          if (user == responseData[0].usuario && password == responseData[0].password){
            navigate("/admin");
          }else{
            alert("Usuario incorrecto");
            setUser("");
            setPassword("");
          }
          
        });


  }

  return (
    <div className="login-form">
      <h2>Iniciar sesión</h2>
      <form >
        <div className="form-group">
          <label htmlFor="email">Usuario:</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setUser(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={validar_user}>Iniciar sesión</button>
      </form>
    </div>
  );

}

export default App
