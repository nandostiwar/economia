
const contInicial = document.getElementById("contenedorInicial")
const contNumJuego = document.getElementById("contenedorNumJuego")
const contNumIngr = document.getElementById("contenedorNumIngresados")
const contReinicio = document.getElementById("contenedorReinicio")

const parrafoGuia = document.getElementById("parrafoGuia")
const numero = document.getElementById("numero")
const btnAddNum = document.getElementById("btnAddNum")
const numIngresados = document.getElementById("numIngresados")
const btnJugar = document.getElementById("btnJugar")
const numerosSistema = document.getElementById("numerosSistema")
const resultado = document.getElementById("resultado")
const btnReinicio = document.getElementById("btnReinicio")

btnAddNum.addEventListener('click', empezar)
btnJugar.addEventListener('click', suerte)
btnReinicio.addEventListener('click', reinicio)

let topeNumeros = 0
let arrNumerosUser = []
let arrNumerosSistema = []
function empezar() {
    contNumIngr.style.display = "block"
    if (numero.value <= 20) {
        arrNumerosUser.push(numero.value)
        parrafoGuia.innerHTML = "Ahora ingresa el siguiente"
        numero.value = ''
        topeNumeros++
        numIngresados.innerHTML = arrNumerosUser
    } else {
        alert("El número a ingresar debe ser entre 0 y 20")
        numero.value = ''
    }

    if (topeNumeros == 5) {
        contInicial.style.display = "none"
        contNumJuego.style.display = "block"
    }
}

function obtenerNumerosComunes(arr1, arr2) {
    const set1 = new Set(arr1);
    const numerosComunes = [];
    for (const elemento of arr2) {
        if (set1.has(elemento)) {
            numerosComunes.push(elemento);
        }
    }
    return numerosComunes;
}


function suerte() {
    arrNumerosSistema = generarNumerosAleatoriosNoRepetidos(0, 20, 10);
    console.log(arrNumerosSistema)

    const numerosComunes = obtenerNumerosComunes(arrNumerosUser, arrNumerosSistema);

    numerosSistema.innerHTML = numerosComunes

    if (numerosComunes.length!==0) {
        resultado.innerHTML="¡Ganaste!"
        resultado.style.color="green"
    } else {
        resultado.innerHTML="¡Perdiste!"
        resultado.style.color="red"
    }
    contReinicio.style.display="block"
}


function generarNumerosAleatoriosNoRepetidos(min, max, cantidad) {
    if (max - min + 1 < cantidad) {
        throw new Error("No hay suficientes números únicos en el rango especificado.");
    }
    while (arrNumerosSistema.length < cantidad) {
        const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!arrNumerosSistema.includes(numeroAleatorio)) {
            arrNumerosSistema.push(numeroAleatorio);
        }
    }
    return arrNumerosSistema;
}

function reinicio() {
    location.reload()
}