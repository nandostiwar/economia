document.addEventListener('DOMContentLoaded', function() {
    var inputElement = document.getElementById('inJS');
    var buttonElement = document.getElementById('btnJS');
    var outputElement = document.getElementById('outJS');

    // Cuando se hace click en el botón vamos a producir la acción de encriptado
    buttonElement.addEventListener('click', function() {
        // Obtenemos el mensaje ingresado por el usuario en el campo de texto
        var inputValue = inputElement.value;
        
        // Usamos la función de encriptación para convertir el mensaje
        var encryptedValue = encryptText(inputValue);

        // Mostramos el mensaje encriptado como resultado
        outputElement.textContent = encryptedValue;
    });
});

// Aquí vamos a realizar el encriptado básico al darle valores distintos a cada letra
const encryptionMap = {
    'a': 'q', 'b': 'x', 'c': 'p',
    'd': 'z', 'e': 'k', 'f': 'm',
    'g': 'a', 'h': 'r', 'i': 'l',
    'j': 's', 'k': 'c', 'l': 't',
    'm': 'e', 'n': 'y', 'o': 'b',
    'p': 'u', 'q': 'o', 'r': 'i',
    's': 'n', 't': 'd', 'u': 'f',
    'v': 'g', 'w': 'h', 'x': 'v',
    'y': 'w', 'z': 'j'
};


// En esta función se va a tomar el mensaje introducido para encriptarlo
function encryptText(text) {
    let encryptedText = "";

    // Aquí se recorre el mensaje
    for (let i = 0; i < text.length; i++) {
        // Obtenemos la letra actual en minúscula
        const char = text[i].toLowerCase();

        // Si la letra está en las que declaramos para encriptar, la reemplazamos con esa versión
        if (char in encryptionMap) {
            encryptedText += encryptionMap[char];
        } else {
            // Si no declaramos qué la va a reemplazar (como un espacio o un símbolo), la dejamos sin cambios
            encryptedText += char;
        }
    }

    return encryptedText;
}
