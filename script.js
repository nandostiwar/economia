document.addEventListener("DOMContentLoaded", function () {
    const saldoElement = document.getElementById("saldo");
    const apuesta1Btn = document.getElementById("apuesta1");
    const apuesta2Btn = document.getElementById("apuesta2");
    const apuesta3Btn = document.getElementById("apuesta3");
    const recargarBtn = document.getElementById("recargarBtn");
    const apuesta1Input = document.getElementById("apuesta1Input");
    const apuesta2Input = document.getElementById("apuesta2Input");
    const apuesta3Input = document.getElementById("apuesta3Input");
    const resultado1Element = document.getElementById("resultado1");
    const resultado2Element = document.getElementById("resultado2");
    const resultado3Element = document.getElementById("resultado3");
    const saldoInput = document.getElementById("saldoInput");
    const setSaldoBtn = document.getElementById("setSaldoBtn");

    let saldo = 1000;

    setSaldoBtn.addEventListener("click", function () {
        saldo = parseInt(saldoInput.value);
        actualizarSaldo();
    });

    apuesta1Btn.addEventListener("click", function () {
        const apuesta = parseInt(apuesta1Input.value);
        const resultado = Math.random() * 1000;

        resultado1Element.textContent = resultado.toFixed(2);

        if (apuesta <= saldo && apuesta >= 0) {
            if (resultado <= 250) {
                saldo += apuesta * 2;
            } else {
                saldo -= apuesta;
            }
        } else {
            alert("No tienes suficiente saldo o la apuesta es inválida.");
        }

        actualizarSaldo();
    });

    apuesta2Btn.addEventListener("click", function () {
        const apuesta = parseInt(apuesta2Input.value);
        const resultado = Math.random() * 1000;

        resultado2Element.textContent = resultado.toFixed(2);

        if (apuesta <= saldo && apuesta >= 0) {
            if (resultado <= 500) {
                saldo += apuesta;
            } else {
                saldo -= apuesta;
            }
        } else {
            alert("No tienes suficiente saldo o la apuesta es inválida.");
        }

        actualizarSaldo();
    });

    apuesta3Btn.addEventListener("click", function () {
        const apuesta = parseInt(apuesta3Input.value);
        const resultado = Math.random() * 1000;

        resultado3Element.textContent = resultado.toFixed(2);

        if (apuesta <= saldo && apuesta >= 0) {
            if (resultado <= 750) {
                saldo += apuesta / 2;
            } else {
                saldo -= apuesta;
            }
        } else {
            alert("No tienes suficiente saldo o la apuesta es inválida.");
        }

        actualizarSaldo();
    });

    recargarBtn.addEventListener("click", function () {
        saldo += 100;
        actualizarSaldo();
    });

    function actualizarSaldo() {
        saldoElement.textContent = saldo;
    }
});
