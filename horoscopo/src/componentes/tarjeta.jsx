import React from 'react'
import "./tarjeta.css"

function Tarjeta(props) {
  return (
    
      <div className='tarjeta' onClick={props.click} >
        <div className='icon'>
            <img src={props.img} alt="No veo" /> 
        </div>
        <h3>{props.titulo}</h3>
        <br />
        <h5>{props.fecha}</h5>
        
      </div>
    
  )
}

export default Tarjeta