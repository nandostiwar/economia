import React from 'react'
import './Ordenes.css'

function Ordenes(props, {color="Red"}) {



  return (
    <div onClick={props.funcion} id={props.id} style={{backgroundColor:props.color}} className='card'>
        
       
            <p>Turno: {props.turno}</p>
            <p>Orden: {props.Torden}</p>
            <p>Mesa: {props.mesa}</p>
            <p>Mesero: {props.mesero}</p>
        
        
            <button >{props.estado}</button>

            <br></br>
        
    </div>
  )
}

export default Ordenes