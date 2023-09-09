import React from 'react'
import "./tarjeta.css"

function Tarjeta(props) {
  return (
    <div className='tarjeta' >
        <div className='icon'>
            <img src={props.img} alt="No veo" /> 
        </div>
        <h3>{props.titulo}</h3>
        <br />
        <h5>{props.fecha}</h5>
        <p>{props.info}</p>
    </div>
  )
}

export default Tarjeta