import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './App.css'

function App() {
  const [user, setUser] = useState('');

  const navigate = useNavigate();

  //funcion que valida el usuario ingresado
  const validar_user = () => {

    fetch(`http://localhost:3000/usuario/getUser`, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({user})
      })
        .then(res => res.json())
        .then(responseData => {
          if (user == responseData[0].usuario ){
            if(responseData[0].rol == 1){
              navigate("/admin");
            }else{
              navigate("/mesero");
            }
          }else{
            alert("Usuario incorrecto");
            setUser("");
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
        <button type="button" onClick={validar_user}>Iniciar sesión</button>
      </form>
    </div>
  );

}

export default App
