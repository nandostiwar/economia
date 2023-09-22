import React from 'react'
import './App.css'
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

const App = () => {

  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const goTo = useNavigate();

  const validateUser = (event) => {
    if(username === 'juego' && password === 'juego123') {
      goTo("/Juego");} 
    else if(username === 'cocina' && password==='cocina123'){
      goTo("/Cocina");} 
    else {
      alert("¡Usuario Incorrecto! Inténtalo de nuevo")
    }
  }
  
  return (
    <div className='App'>
      <h1>Login</h1>
      <br></br>
      <form onSubmit={validateUser}>
          <input type="text" placeholder='Usuario' onChange={(e)=> setUsername(e.target.value)}/><br></br>
          <input type="password" placeholder='Contraseña' required="" onChange={(e)=> setPassword(e.target.value)}/>
          <br></br><br></br>
          <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  )
}

export default App