import React, { useState } from 'react';
import './juego.css';
import { Link, useNavigate } from "react-router-dom";

function Juego() {
    const coloresInicial = ['#3498db', '#3498db', '#3498db', '#3498db', '#3498db'];
    const [numRandom, setRandomNumbers] = useState([1, 4]);
    const [colores, setColores] = useState(coloresInicial);
    const [gameOver, setGameOver] = useState(false);
    const [victory, setVictory] = useState(false);

    const navigate = useNavigate();

    //funcion que valida, las cajas 
    const cajas = (num) => {
        if (gameOver || victory) return;

        const isMatch = numRandom.includes(num);

        const newColores = [...colores];
        if (isMatch) {
            newColores[num - 1] = 'red';
        } else {
            newColores[num - 1] = 'green';
        }

        setColores(newColores);

        const greenCount = newColores.filter(color => color === 'green').length;
        const redCount = newColores.filter(color => color === 'red').length;

        if (greenCount >= 3) {
            setVictory(true);
        } else if (redCount >= 1) {
            setGameOver(true);
        }
    };

    //funcion que reinicia el juego
    const resetGame = () => {
        const newNumRandom = generateRandomNumbers();
        setRandomNumbers(newNumRandom);
        setColores(coloresInicial);
        setGameOver(false);
        setVictory(false);
    };

    //funcion que devuelve al inicio
    const atras = () => {
        navigate("/");
    };

    const generateRandomNumbers = () => {
        const num1 = Math.floor(Math.random() * 5) + 1;
        let num2;
        do {
            num2 = Math.floor(Math.random() * 5) + 1;
        } while (num2 === num1);
        return [num1, num2];
    };

    return (
        <div className="wrapper">
            <h1>POSICIÓN ALEATORIA DE MINAS: 1 y 4</h1>
            <div className="container">
                {colores.map((color, index) => (
                    <div
                        key={index}
                        className="box"
                        style={{ backgroundColor: color }}
                        onClick={() => cajas(index + 1)}>
                        {index + 1}
                    </div>
                ))}
            </div>
            {victory && <p>GANÓ!.</p>}
            {gameOver && !victory && <p>PERDIÓ!</p>}
            <div className="button-container">
                <button onClick={resetGame}>VOLVER A JUGAR</button>
                <button onClick={atras}>REGRESAR</button>
            </div>
        </div>
    );
}

export default Juego;
