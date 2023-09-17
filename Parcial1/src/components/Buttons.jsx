import React from 'react'
import './Buttons.css'

function Buttons(props) {
  return (
    <div>
        <button onClick={props.funcion} id={props.id}>{props.texto}</button>
    </div>
  )
}

export default Buttons