function encriptar(){
    let texto = document.getElementById("entradaJS").value;
    let salidaTexto = document.getElementById("salidaJS");
    let msmEncriptado = "";

    let  letrasEncriop = {
        "a": "x",
        "e": "y",
        "i": "z",
        "o": "w",
        "u": "k",
        " ": "0"
    }; 

    for (let i = 0; i < texto.length; i++) {
        let letra = texto[i];
        let letraEncriptada = letrasEncriop[letra] || letra;
        msmEncriptado += letraEncriptada;
    }
    
    salidaTexto.innerHTML = msmEncriptado;
}