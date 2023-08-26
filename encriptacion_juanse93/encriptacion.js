const txt = document.getElementById("entradaJS");
const btnEncriptar = document.getElementById("botonJS");
const salida = document.getElementById("salidaJS")

const sustituciones = {
    'a': 'x',
    'e': 'y',
    'i': 'z',
    'o': 'w',
    'u': 'k',
    ' ': ''
};

btnEncriptar.addEventListener("click", function () {
    const textoEntrada = txt.value;
    const textoEncriptado = encriptar(textoEntrada);
    salida.textContent = textoEncriptado;
});

function encriptar(texto) {
    let txtEncriptado = "";
    for (let i = 0; i < texto.length; i++) {
        const caracter = texto[i].toLowerCase();
        if (sustituciones[caracter] !== undefined) {
            txtEncriptado += sustituciones[caracter];
        } else {
            txtEncriptado += caracter;
        }
    }
    return txtEncriptado;
}

