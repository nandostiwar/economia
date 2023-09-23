import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Juego.css';

function Juego() {
  const navigate = useNavigate();
  const [juegoIniciado, setJuegoIniciado] = useState(false);
  const [minas, setMinas] = useState([]);
  const [cajasReveladas, setCajasReveladas] = useState(0);
  const [estadosCaja, setEstadosCaja] = useState(Array(5).fill('oculta'));
  const [mensaje, setMensaje] = useState('');

  const manejarClicComenzar = () => {
    setJuegoIniciado(true);
    setMensaje('');
    setCajasReveladas(0);
    setEstadosCaja(Array(5).fill('oculta'));

    const nuevasMinas = [];
    while (nuevasMinas.length < 2) {
      const indiceAleatorio = Math.floor(Math.random() * 5);
      if (!nuevasMinas.includes(indiceAleatorio)) {
        nuevasMinas.push(indiceAleatorio);
      }
    }
    setMinas(nuevasMinas);
  };

  const manejarClicCaja = (indice) => {
    if (juegoIniciado && estadosCaja[indice] === 'oculta') {
      const nuevosEstadosCaja = [...estadosCaja];
      if (minas.includes(indice)) {
        nuevosEstadosCaja[indice] = 'mina';
        setMensaje('Has perdido');
        setJuegoIniciado(false);
      } else {
        nuevosEstadosCaja[indice] = 'segura';
        setCajasReveladas((prev) => prev + 1);
        if (cajasReveladas === 2) {
          setMensaje('Has ganado');
          setJuegoIniciado(false);
        }
      }
      setEstadosCaja(nuevosEstadosCaja);
    }
  };

  return (
    <div className="juego-container">
      <h1>JUEGO DE BUSCAS MINAS</h1>
      <div className="cajas-container">
        {estadosCaja.map((estado, indice) => (
          <div
            key={indice}
            className={`caja ${estado}`}
            onClick={() => manejarClicCaja(indice)}
          ></div>
        ))}
      </div>
      <p>{mensaje}</p>
      <div className="botones-container">
        <button onClick={() => navigate(-1)}>Regresar</button>
        <button onClick={manejarClicComenzar}>
          {juegoIniciado ? 'Volver a jugar' : 'Jugar'}
        </button>
      </div>
    </div>
  );
  
}

export default Juego;
