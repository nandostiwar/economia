
const contPalabra = document.getElementById("contenedorPalabra")
const contLetra = document.getElementById("contenedorLetra")

const palabra = document.getElementById("palabra")
const letra = document.getElementById("letra")
const vidas = document.getElementById("vidas")
const btnEmpezar = document.getElementById("btnEmpezar")
const btnJugar = document.getElementById("btnJugar")
const salida = document.getElementById("salida")

btnEmpezar.addEventListener('click', empezar)
btnJugar.addEventListener('click', suerte)

function empezar() {
    let palabraGuiones = palabra.value.replace(/./g, "_ ")
    salida.innerHTML = palabraGuiones
    alert(palabra.value + " " + palabraGuiones)
    contPalabra.style.display = "none"
    contLetra.style.display = "block"
}

let ttlVidas = 5
function suerte() {

    if (letra.value.trim() === "") {
        alert("Debes digitar una letra para seguir")
    } else {
        let flag = 0
        for (let i = 0; i < palabra.value.length; i++) {
            if (letra.value === palabra.value[i]) {
                flag++
                alert("exito: encontraste la letra: "+letra.value)
            }
        }
            if(flag == 0){
                ttlVidas--
                alert("Perdiste | Vidas: " + ttlVidas)
                vidas.innerHTML = ttlVidas
            }

    }
}