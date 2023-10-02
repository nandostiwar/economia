import React from 'react';
import Habitacion from './components/habitacion';
import './App.css';

function App() {
  const titulos = ['Suite', 'Junior', 'Economica'];

  return (
    <div className="app-container">
      {titulos.map((titulo, index) => (
        <div key={index} className="titulo-habitacion-container">
          <div className="titulo-container">
            <h2>{titulo}</h2>
          </div>
          <div className="habitacion-container">
            {Array(5).fill().map((_, i) => (
              <Habitacion key={i} numero={i+1}  habitacion={titulo} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
