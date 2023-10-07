import React, { useState, useEffect } from 'react';
import Habitacion from './components/habitacion';
import './App.css';

function App() {
  const titulos = ['Suite', 'Junior', 'Economica'];
  const [responseData, setResponseData] = useState(null); // Estado para almacenar los datos de respuesta
  let contador = 0;

  // Función que se ejecuta para consultar los estados de las habitaciones en el archivo JSON
  async function estado() {
    if (contador === 0) {
      fetch(`http://localhost:4000/v1/habitacion/getAll`)
        .then(res => res.json())
        .then(responseData => {
          setResponseData(responseData); // Almacena los datos en el estado
        });

      contador += 1;
    }
  }

  useEffect(() => {
    estado(); // Llama a la función estado() dentro del efecto
  }, []);

  return (
    <div className="app-container">
      {titulos.map((titulo, index) => (
        <div key={index} className="titulo-habitacion-container">
          <div className="titulo-container">
            <h2>{titulo}</h2>
          </div>
          <div className="habitacion-container">
            {Array(5).fill().map((_, i) => (
              <Habitacion
                key={i}
                numero={i + 1}
                habitacion={titulo}
                responseData={responseData} // Pasa responseData como prop
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
