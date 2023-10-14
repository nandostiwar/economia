import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './App.css';

function App() {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [cedula, setCedula] = useState('');
  const [correo, setCorreo] = useState('');


  const navigate = useNavigate();

  const enviarDatos = () => {

    //valida campos vacios
    if(nombre !="" && edad !="" && correo !=""){
      fetch(`http://localhost:4000/v1/datos/setDatos`, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({nombre,edad,cedula,correo })
      })
        .then(res => res.json())
        .then(responseData => {
          if(responseData.message =="success"){
            alert('Datos guardados');
          }else{
            alert('error al guardar los datos');
          }

        });

      // Limpia los campos después de enviar los datos
      setNombre('');
      setEdad('');
      setCedula('');
      setCorreo('');
    }else{
      alert('Hay campos vacios');
    }
  };

  //redirije
  const atras = () => {
    navigate("/tabla");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1> Datos personales </h1>
      </header>
      <div className="App-form">
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="edad">Edad:</label>
          <input
            type="text"
            id="edad"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="cedula">Cédula:</label>
          <input
            type="text"
            id="cedula"
            value={cedula}
            onChange={(e) => setCedula(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="correo">Correo:</label>
          <input
            type="text"
            id="correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </div>
        <div>
          <button onClick={enviarDatos}>Guardar</button>
          <button onClick={atras}>Datos</button>
        </div>
      </div>
    </div>
  );
}

export default App;
