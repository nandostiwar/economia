
var saldoActual = 1000;

function actualizarSaldo() {
    document.getElementById("saldo").textContent = saldoActual.toFixed(2);
}

function ingresarDinero() {
    var monto = parseFloat(document.getElementById("monto").value);
    if (!isNaN(monto) && monto > 0) {
        saldoActual += monto;
        actualizarSaldo();
    }
}

function retirarDinero() {
    var monto = parseFloat(document.getElementById("monto").value);
    if (!isNaN(monto) && monto > 0 && monto <= saldoActual) {
        saldoActual -= monto;
        actualizarSaldo();
    }
}

function realizarApuesta() {
    var montoApuesta = parseFloat(document.getElementById("apuesta").value);
    var tipoApuesta = parseFloat(document.getElementById("tipoApuesta").value);
    
    if (!isNaN(montoApuesta) && montoApuesta > 0 && montoApuesta <= saldoActual && tipoApuesta) {
        var numeroAleatorio = Math.floor(Math.random() * 1001); // Genera un número aleatorio entre 0 y 1000
        
        if (numeroAleatorio <= tipoApuesta) {
            if (tipoApuesta === 25) {
                var ganancia = montoApuesta * 3; // Gana el triple
            } else if (tipoApuesta === 50) {
                var ganancia = montoApuesta * 2; // Gana el doble
            } else if (tipoApuesta === 75) {
                var ganancia = montoApuesta / 2; // Gana la mitad
            }
            saldoActual += ganancia;
            document.getElementById("resultadoApuesta").textContent = "¡Ganaste " + ganancia.toFixed(2) + " USD!";
        } else {
            saldoActual -= montoApuesta;
            document.getElementById("resultadoApuesta").textContent = "Perdiste " + montoApuesta.toFixed(2) + " USD.";
        }

        actualizarSaldo();
    } else {
        document.getElementById("resultadoApuesta").textContent = "Por favor, ingrese un monto válido para la apuesta y elija un tipo de apuesta.";
    }
}
