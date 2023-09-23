import React, { useState } from 'react';
import './juego.css';
import Caja from './componets/caja';
import { Link, useNavigate } from "react-router-dom";

function Juego() {
    const arrayNum = [1, 2, 3, 4, 5];
    const [hasPerdido, setHasPerdido] = useState(false);
    const [hasGanado, setHasGanado] = useState(false);
    const [gana, setGana] = useState(1);
    const [pierde, setPierde] = useState(1);

    const navigate = useNavigate();

    function valPerdido() {
        setPierde(pierde + 1);
        if (pierde === 1) {
            setHasPerdido(true);
        }
    }

    function valGanado() {
        setGana(gana + 1);
        if (gana === 3) {
            setHasGanado(true);
        }
    }

    const atras = () => {
        navigate("/");
    };

    const reiniciar = () => {
        window.location.reload(); // Recargar la página completa
    };
    return (
        <div className="container">
            <div className="formulario">
                <h1>POSICIÓN ALEATORIA DE MINAS: 1 y 4</h1>
            </div>
            <div className="tarjetas">
                {arrayNum.map((num, index) => (
                    <Caja
                        key={index}
                        numero={num}
                        hasPerdido={hasPerdido}
                        hasGanado={hasGanado}
                        onPerdida={valPerdido}
                        onGanado={valGanado}
                    />
                ))}
            </div>
            {hasPerdido && <h1>¡Perdiste!</h1>}
            {hasGanado && <h1>¡Ganaste!</h1>}
            <div className="button-container">
                <button onClick={reiniciar}>VOLVER A JUGAR</button>
                <button onClick={atras}>REGRESAR</button>
            </div>
        </div>
    );
}

export default Juego;
