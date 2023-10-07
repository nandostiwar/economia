import { useState } from 'react';
import '../componentes/cardJuego.css'

let ttlPerdidas = 0
let ttlGanadas = 0

// eslint-disable-next-line react/prop-types
function CardJuego({ num = 0, esMina }) {
  const [color, setColor] = useState(null);

  const handleClick = () => {
    if (esMina) {
      setColor('red');
      // setPerdidas(perdidas + 1);
      ttlPerdidas++
      console.log("setPerdidas: " + ttlPerdidas)
    } else {
      setColor('green');
      // setGanadas(ganadas + 1)
      ttlGanadas++
      console.log("setGanadas: " + ttlGanadas)
    }
  }

  function validarPerdidas() {
    console.log("entré a validarPerdidas() " + ttlPerdidas)
    // if (perdidas === 3) {
    if (ttlPerdidas === 3) {
      console.log("entré a perdidas = " + ttlPerdidas)
      return true;
    }
    return false;
  }

  function validarGanadas() {
    console.log("entré a validarGanadas() " + ttlGanadas)
    // if (ganadas === 2) {
    if (ttlGanadas === 2) {
      console.log("entré a ganadas = " + ttlGanadas)
      return true;
    }
    return false;
  }

  return (
    <div className='container'>
      <input
        className='card-mina'
        type="button"
        value={num}
        style={{ backgroundColor: color }}
        onClick={handleClick}
      />
      {(validarPerdidas()) ? <h4> ¡Perdiste! </h4> : ""}
      {(validarGanadas()) ? <h4> ¡Ganaste! </h4> : ""}
    </div>
  );
}

export default CardJuego;
