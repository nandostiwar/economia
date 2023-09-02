document.addEventListener('DOMContentLoaded', function () {


    let palabraAdivinar = [];
    let palabraMostrar = [];
    let historialLetrasUsuario = [];
    let numIntentos = 5;
    let palabra = document.querySelector('#palabra');
    let btnInicio = document.querySelector('#btnInicio');
    let letra = document.querySelector('#letra');
    let btnComp = document.querySelector('#boton');
    let resultado = document.querySelector('#resultado');
    let vidas = document.querySelector('#intentos');
    let historial = document.querySelector('#historial');

    
    function prepararJuego () {
        palabraAdivinar = palabra.value.split('');
        
        for (let letra of palabraAdivinar) {
            palabraMostrar.push('_');
        }  
        dibujarJuego();
    }

    
    function dibujarJuego () {
       
        resultado.textContent = palabraMostrar.join(' ');
        vidas.textContent = numIntentos;
        historial.textContent = historialLetrasUsuario.join(' ');
    }

    
    function comprobarLetraUsuario () {
        
        let letraUsuario = letra.value;
        letra.value = '';
        letra.focus();
        for (const [posicion, letraAdivinar] of palabraAdivinar.entries()) {
            if (letraUsuario == letraAdivinar) {  
                palabraMostrar[posicion] = letraAdivinar;
            }
        }
        if (!palabraAdivinar.includes(letraUsuario)) {
            numIntentos -= 1;
            historialLetrasUsuario.push(letraUsuario);
        }
        acabarJuego();
        dibujarJuego();
    }

    
    function comprobarPulsadoEnter (evento) {
        if (evento.code == 'Enter') {
            comprobarLetraUsuario();
        }
    }

    
    function acabarJuego () {
       
        if (!palabraMostrar.includes('_')) {
            alert('Has ganado!!!');   
            location.reload(true);
        }
        if (numIntentos == 0) {
            alert('Has Perdido!!! Era: ' + palabraAdivinar.join(''));
            location.reload(true);
        }
    }
    btnComp.addEventListener('click', comprobarLetraUsuario);
    letra.addEventListener('keyup', comprobarPulsadoEnter);
    btnInicio.addEventListener('click', prepararJuego);
    
});
