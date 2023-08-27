document.addEventListener("DOMContentLoaded", function () {
    const botonJS = document.getElementById("botonJS");
    const entradaJS = document.getElementById("entradaJS");
    const salidaJS = document.getElementById("salidaJS");
    const letrasAdivinadasDiv = document.getElementById("letrasAdivinadas");
    const vistasDiv = document.getElementById("vistas");

    let palabraSecreta = "elefante";
    let vidas = 5;
    let palabraMostrada = "_".repeat(palabraSecreta.length);
    let juegoTerminado = false;

    function mostrarMensaje(mensaje) {
        salidaJS.textContent = mensaje;
    }

    function reiniciarJuego() {
        vidas = 5;
        palabraMostrada = "_".repeat(palabraSecreta.length);
        letrasAdivinadasDiv.textContent = "";
        juegoTerminado = false;

        mostrarMensaje("");
    }

    function verificarFinJuego() {
        if (palabraMostrada === palabraSecreta) {
            mostrarMensaje("Ganaste");
            juegoTerminado = true;
            setTimeout(reiniciarJuego, 2000); 
        } else if (vidas <= 0) {
            mostrarMensaje("Perdiste. Vuelve a intentarlo.");
            juegoTerminado = true;
            setTimeout(reiniciarJuego, 2000); 
        }
    }

    botonJS.addEventListener("click", function () {
        if (juegoTerminado) {
            mostrarMensaje("Juego terminado. Espera un momento...");
            return;
        }

        const letraIngresada = entradaJS.value.toLowerCase();
        entradaJS.value = "";

        const letraCorrecta = palabraSecreta.includes(letraIngresada);

        if (letraCorrecta) {
            actualizarPalabraMostrada(letraIngresada);
            mostrarMensaje(`Vidas restantes: ${vidas}`);
        } else {
            vidas--;
            mostrarMensaje(`Vidas restantes: ${vidas}`);
        }

        verificarFinJuego();
    });

    function actualizarPalabraMostrada(letra) {
        let nuevaPalabraMostrada = "";
        let letrasAdivinadas = "";

        for (let i = 0; i < palabraSecreta.length; i++) {
            if (palabraSecreta[i] === letra || palabraMostrada[i] !== "_") {
                nuevaPalabraMostrada += palabraSecreta[i];
            } else {
                nuevaPalabraMostrada += "_";
            }

            if (palabraSecreta[i] === letra) {
                letrasAdivinadas += letra;
            } else {
                letrasAdivinadas += palabraMostrada[i];
            }
        }

        palabraMostrada = nuevaPalabraMostrada;
        letrasAdivinadasDiv.textContent = letrasAdivinadas;

        verificarFinJuego();
    }
});