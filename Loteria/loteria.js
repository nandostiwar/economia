let numeros = document.getElementById('numeros')
let numerosArray = []
let valSorteo = document.getElementById('Resultado')
let btnSortear = document.getElementById('btnSortear')
let sorteo = []

function boleto(){
    let numero = numeros.value
    numerosArray = numero.split('-')
}
function getNumeroAleatorio(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  
  
function sorteo(){
    // Crear un array de 20 posiciones con números del 1 al 20
    let sorteo = [];
    for (let i = 0; i < 20; i++) {
        sorteo[i] = i + 1;
    }

    console.log(sorteo)
    //valSorteo.textContent = "Resultado es:" + sorteo.join("-")
}
btnSortear.addEventListener('click', sorteo);