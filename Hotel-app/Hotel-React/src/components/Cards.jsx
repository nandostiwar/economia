import React from 'react'
import { useState } from 'react'
import './tarjeta.css'


function Cards(props) {


   

  return (
    <div className='tarjeta' style={{backgroundColor: props.color}} onClick={() => {
       // handleColor(); // Llama a la función handleColor cuando se hace clic
        props.funcion; // Llama a la función proporcionada en props
      }}>
        <h3>{props.titulo}</h3>
        <p>{props.numero}</p>
        <h2>{props.status}</h2>
    </div>
  )
}

export default Cards