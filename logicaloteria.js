document.addEventListener("DOMContentLoaded", function () {
    const playButton = document.getElementById("playButton");
    const message = document.getElementById("message");

    playButton.addEventListener("click", function () {
        // Obtener los números ingresados por el usuario
        const userNumbers = [
            parseInt(document.getElementById("number1").value),
            parseInt(document.getElementById("number2").value),
            parseInt(document.getElementById("number3").value),
            parseInt(document.getElementById("number4").value),
            parseInt(document.getElementById("number5").value),
        ];

        // Validar que todos los números del usuario estén en el rango correcto
        const userNumbersValid = userNumbers.every(
            (num) => num >= 1 && num <= 20
        );

        if (!userNumbersValid) {
            message.textContent =
                "Por favor, ingresa números válidos del 1 al 20.";
            return;
        }

        // Generar 10 números aleatorios únicos para la computadora
        const computerNumbers = generateRandomNumbers(1, 20, 10);

        // Mostrar los números seleccionados por la computadora
        message.innerHTML = `Numeros de la loteria: ${computerNumbers.join(
            ", "
        )}.<br>`;

        // Verificar si hay al menos un número en común
        const commonNumbers = userNumbers.filter((num) =>
            computerNumbers.includes(num)
        );

        // Mostrar el resultado
        if (commonNumbers.length > 0) {
            message.innerHTML += `¡Felicidades! Has ganado con ${commonNumbers.length} número(s) en común: ${commonNumbers.join(
                ", "
            )}.`;
        } else {
            message.innerHTML += "Lo siento, no has ganado. Inténtalo de nuevo.";
        }
    });

    function generateRandomNumbers(min, max, count) {
        const randomNumbers = new Set();
        while (randomNumbers.size < count) {
            const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            randomNumbers.add(randomNumber);
        }
        return Array.from(randomNumbers);
    }
});
