import React from 'react';
import "./cocina.css"
import CardCocina from './componentes/CardCocina';
import { Link } from 'react-router-dom'
import { useState } from "react";

const Cocina = () => {

    const [turno, setTurno] = useState(1);
    const [pedido, setPedido] = useState("");
    const [mesa, setMesa] = useState("");
    const [mesero, setMesero] = useState("");
    const [pendiente, setPendiente] = useState("");
    const [pedidos, setPedidos] = useState([]);

    const ped = document.getElementById("pedido")
    const mes = document.getElementById("mesa")
    const mese = document.getElementById("mesero")

    function handleSubmit(e) {
        e.preventDefault();
        setTurno(turno + 1);
        pedidos.push({ turno: turno, pedido: pedido, mesa: mesa, mesero: mesero })
        ped.value = ''
        mes.value = ''
        mese.value = ''
    }

    return (
        <>
            <h1>COCINA</h1>
            <div className='container'>
                <div>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="pedido">PEDIDO</label>
                        <input type="text" id="pedido" onChange={(e) => { setPedido(e.target.value) }} /><br></br>

                        <label htmlFor="mesa">MESA</label>
                        <input type="text" id="mesa" onChange={(e) => { setMesa(e.target.value) }} /><br></br>

                        <label htmlFor="mesero">MESERO</label>
                        <input type="text" id="mesero" onChange={(e) => { setMesero(e.target.value) }} /><br />

                        <button type="submit" >HACER PEDIDO</button>
                        <Link to="/" >
                            <button>REGRESAR</button>
                        </Link>
                    </form>
                </div>

                <div >
                    {pedidos.map((pedido) => {
                        return <CardCocina key={pedido.turno} turno={pedido.turno} pedido={pedido.pedido} mesa={pedido.mesa} mesero={pedido.mesero} />
                    })}
                </div>
            </div>
        </>
    );
};

export default Cocina;
