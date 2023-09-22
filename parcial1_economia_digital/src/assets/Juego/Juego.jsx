import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Juego.css';

function Juego() {
const navigate = useNavigate();
const [gameStarted, setGameStarted] = useState(false);
const [mines, setMines] = useState([]);
const [revealedBoxes, setRevealedBoxes] = useState(0);
const [boxStates, setBoxStates] = useState(Array(5).fill('hidden'));
const [message, setMessage] = useState('');

const handlePlayClick = () => {
    setGameStarted(true);
    setMessage('');
    setRevealedBoxes(0);
    setBoxStates(Array(5).fill('hidden'));

    const newMines = [];
    while (newMines.length < 2) {
    const randomIndex = Math.floor(Math.random() * 5);
    if (!newMines.includes(randomIndex)) {
        newMines.push(randomIndex);
    }
    }
    setMines(newMines);
};

const handleBoxClick = (index) => {
    if (gameStarted && boxStates[index] === 'hidden') {
    const newBoxStates = [...boxStates];
    if (mines.includes(index)) {
        newBoxStates[index] = 'mine';
        setMessage('Has perdido');
        setGameStarted(false);
    } else {
        newBoxStates[index] = 'safe';
        setRevealedBoxes((prev) => prev + 1);
        if (revealedBoxes === 2) {
        setMessage('Has ganado');
        setGameStarted(false);
        }
    }
    setBoxStates(newBoxStates);
    }
};

return (
    <div className="game-container">
    <div className="boxes-container">
        {boxStates.map((state, index) => (
        <div
            key={index}
            className={`box ${state}`}
            onClick={() => handleBoxClick(index)}
        ></div>
        ))}
    </div>
    <p>{message}</p>
    <div className="buttons-container">
        <button onClick={() => navigate(-1)}>Regresar</button>
        <button onClick={handlePlayClick}>
        {gameStarted ? 'Volver a jugar' : 'Jugar'}
        </button>
    </div>
    </div>
);
}

export default Juego;
