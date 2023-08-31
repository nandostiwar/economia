
const contPalabra = document.getElementById("contenedorPalabra")
const contLetra = document.getElementById("contenedorLetra")
const contReinicio = document.getElementById("contenedorReinicio")

const palabra = document.getElementById("palabra")
const letra_ = document.getElementById("letra")
const vidas = document.getElementById("vidas")
const btnEmpezar = document.getElementById("btnEmpezar")
const btnJugar = document.getElementById("btnJugar")
const btnReinicio = document.getElementById("btnReinicio")
const salida = document.getElementById("salida")

btnEmpezar.addEventListener('click', empezar)
btnJugar.addEventListener('click', suerte)
btnReinicio.addEventListener('click', reinicio)

//Función replaceAt para reemplazar un caracter en una posición //
String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

let palabraGuiones
function empezar() {
    palabraGuiones = palabra.value.replace(/./g, "_ ")
    salida.innerHTML = palabraGuiones
    console.log(palabra.value + " " + palabraGuiones)
    contPalabra.style.display = "none"
    contLetra.style.display = "block"
}

let ttlVidas = 5
function suerte() {

    const letra = document.querySelector('#letra').value

    if (letra.trim() === "") {
        alert("Debes digitar una letra para seguir")
    } else {
        let letrasEncontradas = 0
        for (let i = 0; i < palabra.value.length; i++) {
            if (letra.toLowerCase() === palabra.value[i].toLowerCase()) {
                letrasEncontradas++
                console.log("exito: encontraste la letra: " + letra)
                console.log("letrasEncontradas: " + letrasEncontradas)
                console.log(palabraGuiones)
                palabraGuiones = palabraGuiones.replaceAt(i*2, letra.toUpperCase())
                console.log(palabraGuiones)
                salida.innerHTML = palabraGuiones
                letra_.value = ''
            }
        }
        if (letrasEncontradas == 0) {
            ttlVidas--
            alert("Perdiste | Vidas: " + ttlVidas)
            vidas.innerHTML = ttlVidas
            letra_.value = ''
        }
        if (ttlVidas == 0) {
            gameOver()
        }

    }
    //salida.innerHTML = palabraGuiones
}

function gameOver(){
    contLetra.style.display = "none"
    contReinicio.style.display = "block"
    palabra.value = ''
}
function reinicio(){
    contReinicio.style.display = "none"
    contPalabra.style.display = "block"
}