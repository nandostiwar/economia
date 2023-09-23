import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './pedidos.css';

function Pedidos({ agregarPedido }) {
    const [pedido, setPedido] = useState('');
    const [mesa, setMesa] = useState('');
    const [mesero, setMesero] = useState('');

        const navigate = useNavigate();

    const agregar = () => {
    const nuevoPedido = {
        pedido,
        mesa,
        mesero,
    };
    
    agregarPedido(nuevoPedido);
    setPedido('');
    setMesa('');
    setMesero('');
    };

    const atras = () => {
        navigate("/");
    };

    return (
    <div>
        <div className="form-group">
        <label htmlFor="pedido">Pedido:</label>
        <input
            type="text"
            id="pedido"
            name="pedido"
            value={pedido}
            onChange={(e) => setPedido(e.target.value)}/>
        </div>
        <div className="form-group">
        <label htmlFor="mesa">Mesa:</label>
        <input
            type="text"
            id="mesa"
            name="mesa"
            value={mesa}
            onChange={(e) => setMesa(e.target.value)}/>
        </div>
        <div className="form-group">
        <label htmlFor="mesero">Mesero:</label>
        <input
            type="text"
            id="mesero"
            name="mesero"
            value={mesero}
            onChange={(e) => setMesero(e.target.value)}/>
        </div>
        <div className="form-buttons">
        <button type="button" onClick={agregar}>
            Pedido
        </button>
        <button onClick={atras} type="button">Atrás</button>
        </div>
    </div>
    );
}

export default Pedidos;
