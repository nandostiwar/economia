import React, { useState } from 'react';
import './card.css';

function Card({ pedido, turno }) {
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
            <label>Pedido: {pedido.pedido}</label>
        </div>
        <div className="label-container">
            <label>Mesa: {pedido.mesa}</label>
        </div>
        <div className="label-container">
            <label>Mesero: {pedido.mesero}</label>
        </div>
        <button onClick={cambio} disabled={botonDeshabilitado}>
                {estadoPedido}
        </button>
        </div>
    </div>
    );
}

export default Card;
