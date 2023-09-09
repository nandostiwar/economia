document.addEventListener("DOMContentLoaded", function() {
    const userNumbers = document.getElementById("NumerosUsuario");
    const machineNumbers = document.getElementById("NumerosMaquina");
    const result = document.getElementById("Resultado");
    const playButton = document.getElementById("BotonInicio");

    playButton.addEventListener("click", playGame);

    function generateRandomNumbers() {
        const numbers = [];
        while (numbers.length < 10) {
            const randomNum = Math.floor(Math.random() * 20) + 1;
            if (!numbers.includes(randomNum)) {
                numbers.push(randomNum);
            }
        }
        return numbers;
    }

    function areNumbersUnique(numbers) {
        return new Set(numbers).size === numbers.length;
    }

    function playGame() {
        userNumbers.innerHTML = "";
        machineNumbers.innerHTML = "";
        result.innerHTML = "";

        const userPicks = [
            parseInt(document.getElementById("number1").value),
            parseInt(document.getElementById("number2").value),
            parseInt(document.getElementById("number3").value),
            parseInt(document.getElementById("number4").value),
            parseInt(document.getElementById("number5").value),
        ];

        if (!areNumbersUnique(userPicks) || userPicks.some(num => num < 1 || num > 20)) {
            alert("Por favor, ingrese 5 números diferentes del 1 al 20.");
            return;
        }

        const machinePicks = generateRandomNumbers();

        userNumbers.innerHTML = `Tus números: ${userPicks.join(", ")}`;
        machineNumbers.innerHTML = `Números de la máquina: ${machinePicks.join(", ")}`;

        const matchingNumbers = userPicks.filter(num => machinePicks.includes(num));

        if (matchingNumbers.length > 0) {
            result.innerHTML = `¡Felicidades! Tienes ${matchingNumbers.length} número(s) repetido(s). ¡Has ganado!`;
        } else {
            result.innerHTML = "Lo siento, no hay números repetidos. Has perdido.";
        }
    }
});
