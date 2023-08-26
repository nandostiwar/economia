document.addEventListener('DOMContentLoaded', function () {
    const sustituciones = {
        'a': 'x',
        'e': 'y',
        'i': 'z',
        'o': 'w',
        'u': 'k',
        ' ': '0'
    };

    const entrada = document.getElementById('entradaJS');
    const boton = document.getElementById('botonJS');
    const salida = document.getElementById('salidaJS');

    boton.addEventListener('click', function () {
        const textoEntrada = entradaJS.value;
        const textoEncriptado = encriptarTexto(textoEntrada);
        salidaJS.textContent = textoEncriptado;
    });

    function encriptarTexto(texto) {
        let textoEncriptado = "";
        for (let i = 0; i < texto.length; i++) {
            const caracter = texto[i].toLowerCase();
            if (sustituciones[caracter] !== undefined) {
                textoEncriptado += sustituciones[caracter];
            } else {
                textoEncriptado += caracter;
            }
        }
        return textoEncriptado;
    }
});