import React, { useState } from 'react';
import './cocina.css';
import Pedidos from './componets/Pedidos.jsx';
import Card from './componets/Card.jsx';

function Cocina() {
    const [pedidos, setPedidos] = useState([]);
    const [contadorTurno, setContadorTurno] = useState(1);

    function agregarPedido(p){
        const nuevoPedido = {
            pedido: p.pedido,
            mesa: p.mesa,
            mesero: p.mesero,
            turno: contadorTurno // Asigna el número de turno actual a este pedido
        };

        setContadorTurno(contadorTurno + 1); // Incrementa el contador de turno para el siguiente pedido
        setPedidos([...pedidos, nuevoPedido]);
    }
    
    return (
        <div className="container">
            <div className="formulario">
                <Pedidos agregarPedido={agregarPedido}/>
            </div>
            <div className="tarjetas">
                {pedidos.map((pe, index) => (   
                    <Card key={index} pedido={pe.pedido} mesa={pe.mesa} mesero={pe.mesero} turno={pe.turno} />
                ))}
            </div>
        </div>
    );
}


export default Cocina;
