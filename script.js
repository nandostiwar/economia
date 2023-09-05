const botonJS = document.getElementById("botonJS");
const inputJS = document.getElementById("entradaJS");
const outputJS = document.getElementById("salidaJS");

botonJS.addEventListener("click", function() {
    const textoEntrada = inputJS.value;
    const textoConvertido = encryptText(textoEntrada);
    
    outputJS.textContent = textoConvertido;
});

