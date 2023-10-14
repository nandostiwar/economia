import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './tabla.css';

function Tabla() {
  const [responseData, setResponseData] = useState({ datos: [] }); // Inicializa con una propiedad "datos" que es un array vacío

  const navigate = useNavigate();

  // Función que se ejecuta para consultar los datos
  useEffect(() => {
    fetch(`http://localhost:4000/v1/datos/getAll`)
      .then(res => res.json())
      .then(data => {
        setResponseData(data);
      });
  }, []);

  const atras = () => {
    navigate("/");
  };

  return (
    <div className="tabla-container">
      <h2>Datos</h2>
      <table className="mi-tabla-css">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Cédula</th>
            <th>Correo</th>
          </tr>
        </thead>
        <tbody>
          {responseData.datos.map((dato, index) => (
            <tr key={index}>
              <td>{dato.nombre}</td>
              <td>{dato.edad}</td>
              <td>{dato.cedula}</td>
              <td>{dato.correo}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
          <button onClick={atras} >Formulario</button>
        </div>
    </div>
    
    
  );
}

export default Tabla;
