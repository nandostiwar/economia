import React, { useState } from 'react';
import './Juego.css';

function Juego() {
  const [minas, setMinas] = useState(generarMinas());
  const [casillas, setCasillas] = useState(Array(5).fill(null));
  const [intentos, setIntentos] = useState(0);
  const [resultado, setResultado] = useState('');

  function generarMinas() {
    const minas = Array(5).fill(false);
    minas[Math.floor(Math.random() * 5)] = true;
    minas[Math.floor(Math.random() * 5)] = true;
    return minas;
  }

  function manejarClick(index) {
    if (resultado === 'Perdiste') return;

    if (minas[index]) {
      setResultado('Perdiste');
      const nuevasCasillas = casillas.map((casilla, i) =>
        minas[i] ? 'mina' : casilla
      );
      setCasillas(nuevasCasillas);
      return;
    }

    if (casillas[index] === 'seleccionada') return;

    const nuevasCasillas = [...casillas];
    nuevasCasillas[index] = 'seleccionada';
    setCasillas(nuevasCasillas);

    const casillasSeleccionadas = nuevasCasillas.filter(
      (casilla) => casilla === 'seleccionada'
    );

    if (casillasSeleccionadas.length === 3) {
      setResultado('Ganaste');
    }
  }

  function reiniciarJuego() {
    setMinas(generarMinas());
    setCasillas(Array(5).fill(null));
    setIntentos(0);
    setResultado('');
  }

  return (
    <div className="juego-container">
      <h1>¡Evita las Minas!</h1>
      <div className="tablero">
        {casillas.map((casilla, index) => (
          <div
            key={index}
            className={`casilla ${casilla}`}
            onClick={() => manejarClick(index)}
          >
            {casilla === 'mina' ? '💣' : index + 1}
          </div>
        ))}
      </div>
      <div className="resultado">{resultado}</div>
      <button onClick={reiniciarJuego}>Nuevo Juego</button>
    </div>
  );
}

export default Juego;
