import React from 'react'
import "./VistaSignos.css"
import { Link } from 'react-router-dom'

function VistaSignos({definitions}) {
  return (
    <div className='VistaSignos'>
        <img src={definitions.image} alt= {"Imagen de "+definitions.name}/>
        <h3>{definitions.dateRange}</h3>
        <p className='parraf'>{definitions.message}</p>
        <Link
                to={"./VistaHome"}>
                <input type="button" value="Regresar" />
            </Link>
    </div>
  )
}

export default VistaSignos