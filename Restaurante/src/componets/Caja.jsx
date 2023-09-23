import React, { useState } from 'react';
import './caja.css';

function Caja({ numero, hasPerdido, hasGanado,onGanado, onPerdida }) {
    const [color, setColor] = useState('');
    
    let mina1, mina2;
    do {
        mina1 = Math.floor(Math.random() * 5) + 1;
        mina2 = Math.floor(Math.random() * 5) + 1;
    } while (mina1 === mina2);

    function validar() {
        if (numero === mina1 || numero === mina2) {
            setColor('red');
            onPerdida();
        } else {
            setColor('green');
            onGanado();
        }
    }

    return (
        <div
            className={`caja ${hasPerdido || hasGanado ? 'disabled' : ''}`}
            onClick={hasPerdido || hasGanado ? null : validar}
            style={{ backgroundColor: color }}
        >
            {numero}
        </div>
    );
}

export default Caja;
