const botonJS = document.getElementById("botonJS");
const inputJS = document.getElementById("entradaJS");
const outputJS = document.getElementById("salidaJS");

botonJS.addEventListener("click", function() {
    const textoEntrada = inputJS.value;
    const textoConvertido = encriptarTexto(textoEntrada);
    
    outputJS.textContent = textoConvertido;
})

function encriptarTexto(texto) {
    const valores = {
        'a': 'x', 'e': 'y', 'i': 'z','o': 'w','u': 'k'
    };

    let resultado = '';
    texto = texto.replace(/ /g, '');

    for (let i = 0; i < texto.length; i++) {
        const caracter = texto[i].toLowerCase();
        resultado += valores[caracter] || texto[i];
    }

    return resultado;
}