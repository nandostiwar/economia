import React from 'react'

function Tarjeta(props) {
    const entregar = (e) =>
    {
       box= document.getElementById("card")
       box.style.backgroundColor = "Green"
    }
  return (
    <div id="card">
        
        <h3>Turno:</h3>
        <label>{props.turno}</label>
        <br></br>
        <h3>Pedido:</h3>
        <label>{props.pedido}</label>
        <br></br>
        <h3>Mesa:</h3>
        <label>{props.mesa}</label>
        <br></br>
        <h3>Meserio:</h3>
        <label>{props.mesero}</label>

    <div>
    <button onClick={entregar}>Entregar</button>
    </div>
        

    </div>
  )
}

export default Tarjeta