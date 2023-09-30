const words = ["elefante"];
let selectedWord = words[Math.floor(Math.random() * words.length)];
let guessedLetters = [];
let lives = 5;

const wordDisplay = document.getElementById("word-display");
const livesDisplay = document.getElementById("lives");
const letterInput = document.getElementById("letter-input");
const guessButton = document.getElementById("guess-button");

function displayWord() {
    let display = '';
    for (const letter of selectedWord) {
        if (guessedLetters.includes(letter)) {
            display += letter + ' ';
        } else {
            display += '_ ';
        }
    }
    wordDisplay.textContent = display;
}

function checkWin() {
    if (!wordDisplay.textContent.includes('_')) {
        alert('¡Ganaste!');
        resetGame();
    }
}

function checkLose() {
    if (lives === 0) {
        alert('¡Perdiste! La palabra era: ' + selectedWord);
        resetGame();
    }
}

function resetGame() {
    selectedWord = words[Math.floor(Math.random() * words.length)];
    guessedLetters = [];
    lives = 5;
    displayWord();
    livesDisplay.textContent = `Vidas restantes: ${lives}`;
}

displayWord();

guessButton.addEventListener('click', () => {
    const letter = letterInput.value.toLowerCase();
    letterInput.value = '';

    if (guessedLetters.includes(letter) || !/[a-z]/.test(letter)) {
        return;
    }

    guessedLetters.push(letter);
    if (!selectedWord.includes(letter)) {
        lives--;
    }

    displayWord();
    livesDisplay.textContent = `Vidas restantes: ${lives}`;
    checkWin();
    checkLose();
});
