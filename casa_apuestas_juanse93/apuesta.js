let saldo
let apuesta
let seleccion
let numeroAleatorio

const contInsertarDinero = document.getElementById("contInsertarDinero")
const ingrDinero = document.getElementById("ingrDinero")
const btnIngrDinero = document.getElementById("btnIngrDinero")
const contDinero_apuesta = document.getElementById("contDinero-apuesta")
const dineroSaldo = document.getElementById("dineroSaldo")
const dineroApuesta = document.getElementById("dineroApuesta")
const btnApostar = document.getElementById("btnApostar")
const btnApuesta25 = document.getElementById("apuesta25")
const btnApuesta50 = document.getElementById("apuesta50")
const btnApuesta75 = document.getElementById("apuesta75")
const opcApuestas = document.getElementById("opcApuestas")
const txtEscogiste = document.getElementById("txtEscogiste")
const btnSuerte = document.getElementById("btnSuerte")
const contenedorFinal = document.getElementById("contenedorFinal")
const numSistema = document.getElementById("numSistema")
const mensajeResult = document.getElementById("mensajeResult")
const btnVolver = document.getElementById("btnVolver")
const btnReinicio = document.getElementById("btnReinicio")

btnIngrDinero.addEventListener('click', deposito)
function deposito() {
    if (ingrDinero.value > 0) {
        saldo = parseInt(ingrDinero.value)
        dineroSaldo.innerHTML = "Dinero en la cuenta $ " + saldo
        dineroSaldo.style.color = "#3300ff"
        contInsertarDinero.style.display = "none"
        contDinero_apuesta.style.display = "block"
    } else {
        alert("El depósito debe ser mayor a cero")
    }

}

btnApostar.addEventListener('click', ingApuesta)
function ingApuesta() {
    apuesta = parseInt(dineroApuesta.value)
    console.log(saldo + " " +apuesta)
    if (apuesta > 0 && apuesta <= saldo) {
        btnApostar.style.display = "none"
    } else {
        alert("El valor de apuesta debe ser mayor a cero y ser menor o igual al saldo")
    }
}

btnApuesta25.addEventListener('click', sel25)
function sel25() {
    seleccion = 1
    opcApuestas.style.display = "none"
    txtEscogiste.innerHTML = "Escogiste el 25% de probabilidad para ganar"
}
btnApuesta50.addEventListener('click', sel50)
function sel50() {
    seleccion = 2
    opcApuestas.style.display = "none"
    txtEscogiste.innerHTML = "Escogiste el 50% de probabilidad para ganar"
}
btnApuesta75.addEventListener('click', sel75)
function sel75() {
    seleccion = 3
    opcApuestas.style.display = "none"
    txtEscogiste.innerHTML = "Escogiste el 75% de probabilidad para ganar"
}

btnSuerte.addEventListener('click', suerte)
function suerte() {
    numeroAleatorio = Math.floor(Math.random() * 1001)
    btnSuerte.style.display = "none"
    numSistema.innerHTML = numeroAleatorio


    if (seleccion == 1) {
        let dineroGano
        if (numeroAleatorio <= 250) {
            dineroGano = (apuesta * 2) + apuesta
            console.log("ganó 2 veces $" + dineroGano)
            mensajeResult.innerHTML = "¡Ganaste! $" + dineroGano
            mensajeResult.style.color = "green"
            saldo = saldo + dineroGano
        } else {
            dineroGano = (apuesta * 2) + apuesta
            mensajeResult.innerHTML = ":0 Perdiste $" + dineroGano
            mensajeResult.style.color = "red"
            saldo = saldo - dineroGano
        }
    }

    if (seleccion == 2) {
        if (numeroAleatorio <= 500) {
            dineroGano = apuesta * 2
            console.log("ganó 1 vez $" + dineroGano)
            mensajeResult.innerHTML = "¡Ganaste! $" + dineroGano
            mensajeResult.style.color = "green"
            saldo = saldo + dineroGano
        } else {
            dineroGano = (apuesta * 2) + apuesta
            mensajeResult.innerHTML = ":0 Perdiste $" + dineroGano
            mensajeResult.style.color = "red"
            saldo = saldo - dineroGano
        }
    }

    if (seleccion == 3) {
        if (numeroAleatorio <= 750) {
            dineroGano = apuesta / 2
            console.log("ganó 0.5 veces $" + dineroGano)
            mensajeResult.innerHTML = "¡Ganaste! $" + dineroGano
            mensajeResult.style.color = "green"
            saldo = saldo + dineroGano
        } else {
            dineroGano = (apuesta * 2) + apuesta
            mensajeResult.innerHTML = ":0 Perdiste $" + dineroGano
            mensajeResult.style.color = "red"
            saldo = saldo - dineroGano
        }
    }
    contenedorFinal.style.display="block"
    dineroSaldo.innerHTML = "Dinero en la cuenta $ " + saldo
}

btnVolver.addEventListener('click', volver)
function volver() {
    dineroApuesta.value=''
    apuesta=0
    seleccion=0
    btnApostar.style.display="block"
    contDinero_apuesta.style.display="block"
    btnSuerte.style.display="block"
    opcApuestas.style.display="block"
    txtEscogiste.innerHTML=""
    contenedorFinal.style.display="none"
}

btnReinicio.addEventListener('click', reinicio)
function reinicio(){
    location.reload()
}