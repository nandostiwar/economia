var vidas = 5;
var validarCampo = false;
var palabraAdivinar = "";
var letrasAdivinadas = [];

function validarLetra() {
    let letra = "";
    letra = document.getElementById("letra").value;
    let salidaTexto = document.getElementById("salidaJS");

    if (letra !== "") {
        if (!validarCampo) {
            validarCampo = true;
            palabraAdivinar = document.getElementById("palabra").value;
            document.getElementById("palabra").disabled = true;
        }

        var msm = "";

        if (vidas === 0 || msm === palabraAdivinar) {
            document.getElementById("palabra").disabled = true;
            return;
        }

        letrasAdivinadas.push(letra);

        for (let i = 0; i < palabraAdivinar.length; i++) {
            if (letrasAdivinadas.includes(palabraAdivinar[i])) {
                msm += palabraAdivinar[i];
            } else {
                msm += "_";
            }
        }

        if (!palabraAdivinar.includes(letra)) {
            vidas--;
            document.getElementById("msm_salida").textContent = "vidas: " + vidas;
        }

        document.getElementById("letra").value = "";
        salidaTexto.innerHTML = msm.split("").join(" ");

        if (msm === palabraAdivinar) {
            alert("¡Has adivinado la palabra!");
            document.getElementById("palabra").disabled = true;
            document.getElementById("palabra").value = "";
            window.location.reload();
        }

        if (vidas === 0) {
            alert("¡Perdiste! La palabra era: " + palabraAdivinar);
            document.getElementById("palabra").disabled = true;
            document.getElementById("palabra").value = "";
            window.location.reload();
        }
    } else {
        alert("ingrese una letra, en el campo letra");
        document.getElementById("letra").focus();
    }
}
