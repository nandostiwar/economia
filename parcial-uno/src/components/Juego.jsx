import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Juego.css"

function Juego() {
  const navigate = useNavigate();
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [bombs, setBombs] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [gameResult, setGameResult] = useState(null);

  useEffect(() => {
    generateBombs();
  }, []);

  const generateBombs = () => {
    const bomb1 = Math.floor(Math.random() * 5) + 1;
    let bomb2 = Math.floor(Math.random() * 5) + 1;
    while (bomb2 === bomb1) {
      bomb2 = Math.floor(Math.random() * 5) + 1;
    }
    setBombs([bomb1, bomb2]);
  };

  const selectNumber = (number) => {
    if (!gameOver && !selectedNumbers.includes(number)) {
      setSelectedNumbers([...selectedNumbers, number]);

      if (bombs.includes(number)) {
        setGameResult('Perdiste. Elegiste una bomba.');
        setGameOver(true);
      }

      if (selectedNumbers.length === 2 && !bombs.includes(number)) {
        const isWinner = selectedNumbers.every((num) => !bombs.includes(num)) && !bombs.includes(number);
        if (isWinner) {
          setGameResult('Ganaste. Elegiste los 3 números seguros.');
          setGameOver(true);
        }
      }
    }
  };

  const handleRestartGame = () => {
    generateBombs();
    setSelectedNumbers([]);
    setGameResult(null);
    setGameOver(false);
  };

  const handleBackToLogin = () => {
    navigate('/');
  };

  return (
    <div className='GameContainer'>
      <h1>Juego</h1>
      <button onClick={handleBackToLogin}>Volver al Login</button>
      <div>
        <p>Selecciona 3 números:</p>
        {[1, 2, 3, 4, 5].map((number) => (
          <button
            key={number}
            onClick={() => selectNumber(number)}
            className={`number ${selectedNumbers.includes(number) ? (bombs.includes(number) ? 'bomb' : 'safe') : ''}`}
            disabled={gameOver || selectedNumbers.length >= 3}
          >
            {number}
          </button>
        ))}
      </div>
      <div>
        <button onClick={handleRestartGame}>Reiniciar Juego</button>
        {gameResult && <p>{gameResult}</p>}
      </div>
    </div>
  );
}

export default Juego;