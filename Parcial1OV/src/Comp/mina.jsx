import React from 'react'
import "./mina.css"


function Mina(mina) {
  return (
    <button type="button" onClick={mina.btn}
    style={mina.color}>{<img src={mina.img} alt="Aqui va una mina" />}</button>
    
  )
}

export default Mina