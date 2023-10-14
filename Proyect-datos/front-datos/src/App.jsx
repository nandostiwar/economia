import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './App.css';

function App() {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [cedula, setCedula] = useState('');
  const [correo, setCorreo] = useState('');
  const [datos, setDatos] = useState([]); // Aquí almacenaremos los datos como un array de objetos


  const navigate = useNavigate();

  const enviarDatos = () => {

    // Crea un objeto con los datos actuales
    const nuevoDato = {
      nombre: nombre,
      edad: edad,
      cedula: cedula,
      correo: correo,
    };

    // Agrega el objeto al array de datos
    setDatos([...datos, nuevoDato]);

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
  };

  const atras = () => {
    navigate("/tabla");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Mi Aplicación React</h1>
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
          <button onClick={enviarDatos}>Enviar</button>
          <button onClick={atras}>Datos</button>
        </div>
      </div>
    </div>
  );
}

export default App;
