var saldoUsuario = 0;

function ingresar_saldo() {
    let numero = parseFloat(document.getElementById("numero").value);

    if (!isNaN(numero)) {
        saldoUsuario += numero;
        document.getElementById("saldo").textContent = "Saldo: " + saldoUsuario;
        document.getElementById("numero").value = "";
    } else {
        alert("Debe ingresar un valor.");
        document.getElementById("numero").focus();
    }
}


function ruleta() {
    let opcion = document.getElementById("opcion_apuesta").value;
    let montoApuesta = document.getElementById("monto").value;

    let numeroAleatorio = Math.floor(Math.random() * 1001);
    if (montoApuesta > saldoUsuario) {
        alert("El monto a apostar es superior al saldo actual");
    } else {
        if (!isNaN(montoApuesta)) {
            if (opcion != 0) {
                if (opcion == 1) {
                    if (numeroAleatorio >= 1 && numeroAleatorio <= 250) {
                        document.getElementById("titulo").textContent = "Ganastes !!";
                        document.getElementById("info").textContent = "El número de la ruleta es : " + numeroAleatorio;
                        saldoUsuario += montoApuesta * 2;
                    } else {
                        document.getElementById("titulo").textContent = "Perdistes !!";
                        document.getElementById("info").textContent = "El número de la ruleta es : " + numeroAleatorio;
                        saldoUsuario -= montoApuesta;
                    }
                }
                if (opcion == 2) {
                    if (numeroAleatorio >= 1 && numeroAleatorio <= 500) {
                        document.getElementById("titulo").textContent = "Ganastes !!";
                        document.getElementById("info").textContent = "El número de la ruleta es : " + numeroAleatorio;
                        saldoUsuario += montoApuesta * 1;
                    } else {
                        document.getElementById("titulo").textContent = "Perdistes !!";
                        document.getElementById("info").textContent = "El número de la ruleta es : " + numeroAleatorio;
                        saldoUsuario -= montoApuesta;
                    }
                }
                if (opcion == 3) {
                    if (numeroAleatorio >= 1 && numeroAleatorio <= 750) {
                        document.getElementById("titulo").textContent = "Ganastes !!";
                        document.getElementById("info").textContent = "El número de la ruleta es : " + numeroAleatorio;
                        saldoUsuario += montoApuesta * 0.5;
                    } else {
                        document.getElementById("titulo").textContent = "Perdistes !!";
                        document.getElementById("info").textContent = "El número de la ruleta es : " + numeroAleatorio;
                        saldoUsuario -= montoApuesta;
                    }
                }

            } else {
                alert("Dede de seleccionar una opcion");
            }
        } else {
            alert("Debe de ingresar el monto a apostar");
        }
    }
    document.getElementById("saldo").textContent = "Saldo: " + saldoUsuario;
}