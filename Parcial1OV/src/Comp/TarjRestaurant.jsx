import React from 'react'
import "./TarjRes.css"

function TarjRestaurant(info) {
  return (
    <div className='tarjeta' style={info.col}>
       <div className='info'>
          <p>Turno: {info.turno}</p>
          <p>Pedido: {info.pedido}</p>
          <p>Mesa: {info.mesa}</p>
          <p>Mesero: {info.mesero}</p>
       </div>
    </div>
  )
}

export default TarjRestaurant