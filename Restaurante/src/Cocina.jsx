import React, { useState } from 'react';
import './cocina.css';
import Pedidos from './componets/Pedidos';
import Card from './componets/Card';

function Cocina() {
    const [pedidos, setPedidos] = useState([]);
    const [contadorTurno, setContadorTurno] = useState(1);

    const agregarPedido = (nuevoPedido) => {
        setPedidos([...pedidos, nuevoPedido]);
        setContadorTurno(contadorTurno + 1);
    };

    return (
    <div className="container">
        <div className="contenido">
        <div className="formulario">
            <Pedidos agregarPedido={agregarPedido} />
        </div>
        <div className="tarjetas">
            {pedidos.map((pedido, index) => (
            <Card key={index} pedido={pedido} turno={contadorTurno} />
            ))}
        </div>
        </div>
    </div>
    );
}

export default Cocina;
