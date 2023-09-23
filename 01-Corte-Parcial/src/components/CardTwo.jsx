import React from 'react'

const CardTwo = (props) => {
    return (
        <div style={{ width: "15rem" , height: "20rem", padding: "2rem", alignContent: "center", margin: "1rem" }} className={`${props.condicional ? "carta-azul" : "carta-roja"}`}>
            <h3>Turno: {props.turno}</h3>
            <h3>Mesa: {props.mesa}</h3>
            <h3>Mesero: {props.mesero} </h3>
            <h3>Orden de Pedido: {props.orden} </h3>
            <h3>Estado: {props.estado} </h3>
        </div>

    )
}

export default CardTwo



{/*<div style={{ width: "10rem", display: 'flex', flexDirection: 'row' , height: "12rem", padding: "2rem", alignContent: "center", margin:"1rem" }} className={`${props.condicional ? "carta-azul" : "carta-roja"}`}>
<h3>Turno: {props.index}</h3>
<h3>Mesa: {props.mesa}</h3>
<h3>Mesero: {props.mesero} </h3>
<h3>Estado: {props.estado} </h3>
</div>*/}