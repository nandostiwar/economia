function encrypt() {
    const inputText = document.getElementById("inputText").value.toLowerCase();
    const encryptedText = encryptText(entradaJS);
    document.getElementById("encryptedText").salidaJS = "Texto encriptado: " + encryptedText;
}

function encryptText(text) {
    const letterMap = {
        'a': 'q', 'b': 'w', 'c': 'e', 'd': 'r', 'e': 't',
        'f': 'y', 'g': 'u', 'h': 'i', 'i': 'o', 'j': 'p',
        'k': 'a', 'l': 's', 'm': 'd', 'n': 'f', 'o': 'g',
        'p': 'h', 'q': 'j', 'r': 'k', 's': 'l', 't': 'z',
        'u': 'x', 'v': 'c', 'w': 'v', 'x': 'b', 'y': 'n',
        'z': 'm', ' ': ' '
    };

    let encryptedText = '';
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (letterMap.hasOwnProperty(char)) {
            encryptedText += letterMap[char];
        } else {
            encryptedText += char;
        }
    }
    return encryptedText;
}