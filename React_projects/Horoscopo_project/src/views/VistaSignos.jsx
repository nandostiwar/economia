import React from 'react'
import "./VistaSignos.css"

function VistaSignos({definitions}) {
  return (
    <div className='VistaSignos'>
        <img src={definitions.image} alt= {"Imagen de "+definitions.name}/>
        <h3>{definitions.dateRange}</h3>
        <p>{definitions.message}</p>
    </div>
  )
}

export default VistaSignos