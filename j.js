document.addEventListener('DOMContentLoaded', function() {
    const buttonUsuario = document.getElementById('generarNumerosUsuario');
    const buttonAleatorio = document.getElementById('generarNumeroAleatorio');
    const entrada = document.getElementById('entradaJS');
    const numerosIngresadosList = document.getElementById('numerosIngresados');
    const numeroAleatorio = document.getElementById('numeroAleatorio');
    const resultado = document.getElementById('resultado');

    buttonUsuario.addEventListener('click', function() {
        resultado.innerHTML = ''; // Limpiar resultados anteriores

        const numerosIngresados = entrada.value.trim().split(',');

        // Validar que haya ingresado 5 números
        if (numerosIngresados.length === 5) {
            const ul = document.createElement('ul');

            numerosIngresados.forEach(numero => {
                const li = document.createElement('li');
                li.textContent = numero.trim(); // Eliminar espacios en blanco
                ul.appendChild(li);
            });

            numerosIngresadosList.innerHTML = ''; // Limpiar la lista anterior
            numerosIngresadosList.
            numerosIngres
appendChild(ul);

            resultado.appendChild(numerosIngresadosList);

        } else {
            // Mostrar un mensaje de error si no se ingresaron 5 números
            resultado.textContent = 'Ingrese exactamente 5 números separados por comas.';
        }
    });

    buttonAleatorio.addEventListener('click', function() {
        resultado.innerHTML = ''; // Limpiar resultados anteriores

        // Generar un número aleatorio entre 1 y 20
        const numero = Math.floor(Math.random() * 20) + 1;
        numeroAleatorio.textContent = `Número aleatorio: ${numero}`;
    });
});
