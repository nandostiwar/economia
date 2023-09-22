import React, { useState, useEffect } from 'react';
import CardJuego from './componentes/CardJuego'
import { Link } from 'react-router-dom';

let numSis1, numSis2

const Juego = () => {
    const [minas, setMinas] = useState([]);
    const [ganador, setGanador] = useState(null);

    const seleccionarNumAleatorios = () => {
        numSis1 = Math.floor(Math.random() * 5) + 1;
        numSis2 = Math.floor(Math.random() * 5) + 1;
        let numSis3 = Math.floor(Math.random() * 5) + 1;

        while (numSis2 === numSis1) {
            numSis2 = Math.floor(Math.random() * 5) + 1;
        }
        while (numSis1 === numSis3 || numSis2 === numSis3) {
            numSis3 = Math.floor(Math.random() * 5) + 1;
        }
        console.log("nums sistema: " + numSis1 + " " + numSis2)
        return [numSis1, numSis2, numSis3];
    };

    useEffect(() => {
        const minasAleatorias = seleccionarNumAleatorios();
        setMinas(minasAleatorias);
        console.log("minasAleatorias " + minasAleatorias)
    }, []);

    const handleReiniciarJuego = () => {
        window.location.reload();
    };


    return (
        <div >
            <h1>JUEGO DE BUSCA MINAS</h1>
            <h2>POSICIÓN ALEATORIA DE MINAS: {numSis1 + " y " + numSis2}</h2><br />
            <div style={{ display: 'inline-flex' }}>
                {Array.from({ length: 5 }, (_, i) => (
                    <CardJuego key={i + 1} num={i + 1} esMina={minas.includes(i + 1)} />
                ))}
            </div>
            <br /> <br /> <br /> <br />
 
            <button type="button" onClick={handleReiniciarJuego}>VOLVER A JUGAR</button>
            <Link to="/" >
                <button type="button">REGRESAR</button>
            </Link>
        </div>
    )
}



export default Juego