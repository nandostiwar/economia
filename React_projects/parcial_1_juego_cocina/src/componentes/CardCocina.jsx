import React from 'react'
import '../componentes/cardCocina.css'
import { useState } from 'react';

function CardCocina({ turno = "no hay turno", pedido = "no hay pedido", mesa = "no hay mesa", mesero = "no hay mesero" }) {
  const [pendiente, setPendiente] = useState(true);

  function validate(e) {
    setPendiente(!pendiente);
  }

  return (
    <div className={`Card ${pendiente ? 'pendiente' : 'entregado'}`}>
      <p><strong>Turno:</strong> {turno}</p>
      <p><strong>Pedido:</strong> {pedido}</p>
      <p><strong>Mesa:</strong> {mesa}</p>
      <p><strong>Mesero:</strong> {mesero}</p>
      {pendiente ? (<button onClick={validate} >PENDIENTE</button>) : (<button onClick={validate} >ENTREGADO</button>)}
    </div>
  )
}

export default CardCocina