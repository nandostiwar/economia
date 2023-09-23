import React, { useState } from 'react';
import './card.css';

function Card({ pedido, mesa, mesero, turno }) {
    
    // const pedidoReal = pedido.mesa;
    console.log(turno);
    console.log(pedido);
    console.log(mesa);
    console.log(mesero);

    const [estadoPedido, setEstadoPedido] = useState('PENDIENTE');
    const [backgroundColor, setBackgroundColor] = useState('');
    const [botonDeshabilitado, setBotonDeshabilitado] = useState(false); 

    //cambia de color la tarjeta
    const cambio = () => {
    if (estadoPedido === 'PENDIENTE') {
        setEstadoPedido('ENTREGADO');
        setBackgroundColor('green');
        setBotonDeshabilitado(true);    
    }
    };

    const cardStyles = {
    backgroundColor: backgroundColor,
    };

    return (
    <div className="card" style={cardStyles}>
        <div className="card-content">
        <div className="label-container">
            <label>Turno: {turno}</label>
        </div>
        <div className="label-container">
            <label>Pedido: {pedido}</label>
        </div>
        <div className="label-container">
            <label>Mesa: {mesa}</label>
        </div>
        <div className="label-container">
            <label>Mesero: {mesero}</label>
        </div>
        <button onClick={cambio} disabled={botonDeshabilitado}>
                {estadoPedido}
        </button>
        </div>
    </div>


//     <div className="card" >
//     <div className="card-content">
//     <div className="label-container">
//         <label>Turno:</label>
//     </div>
//     <div className="label-container">
//         <label>Pedido: </label>
//     </div>
//     <div className="label-container">
//         <label>Mesa:</label>
//     </div>
//     <div className="label-container">
//         <label>Mesero: </label>
//     </div>
//     <button></button>
//     </div>
// </div>
    );
}

export default Card;
