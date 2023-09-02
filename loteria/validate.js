var numIngreso = [];
var numRandom = [];
var numerosCoincidentes = [];
var contador = 0;

function validarNumero() {

    let numero = document.getElementById("numero").value;

    if (numero => 1 && numero <= 20) {

        numIngreso.push(numero)

        if (numIngreso.length == 5) {
            numeroRandom();
            document.getElementById("msm_salida_user").textContent = numIngreso;
            document.getElementById("numero").disabled = true;
        }
        document.getElementById("numero").value = "";

        contador += 1;
        document.getElementById("contador").textContent = "Cantidad de número ingresados: " + contador;
    } else {
        alert("el numero debe estar en el rango de 1 a 20");
        document.getElementById("numero").value = "";
    }
}

function numeroRandom() {
    for (let i = 0; i <= 20; i++) {
        let numeroAleatorio = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
        numRandom.push(numeroAleatorio);
    };
    document.getElementById("msm_salida_sistema").textContent = numRandom;
}

function comparar() {
    for (var i = 0; i < numIngreso.length; i++) {
        var numero = numIngreso[i];
      
        // Verificar si el número está en lista2
        if (numeroRandom.includes(numero)) {
          // Si coincide, agregarlo a la lista de números coincidentes
          numerosCoincidentes.push(numero);
        }
      }
      document.getElementById("coincidencia").textContent = "Numeros que coinciden: " + numerosCoincidentes;
}