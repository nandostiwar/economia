function encryptText(texto) {
    const values = {
        'a': 'x',
        'e': 'y',
        'i': 'z',
        'o': 'w',
        'u': 'k',
        ' ': ''
    };

    let result = '';

    for (let i = 0; i < texto.length; i++) {
        const caracter = texto[i].toLowerCase();
        result += values[caracter] || texto[i];
    }

    return result;
}