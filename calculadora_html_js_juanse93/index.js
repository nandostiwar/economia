const txtOp1 = document.getElementById("op1");
const txtOperador = document.getElementById("op");
const txtOp2 = document.getElementById("op2");
const btnCalcular = document.getElementById("btnCalcular");
const result = document.getElementById("result");

btnCalcular.addEventListener('click', Calcular)

function Calcular() {
    const opr = txtOperador.value
    const op1 = parseFloat(txtOp1.value)
    const op2 = parseFloat(txtOp2.value)

    if ((opr == "+" || opr == "-" || opr == "*" || opr == "/") && !isNaN(op1) && !isNaN(op2)) {
        let resultado;
        switch (opr) {
            case "+":
                resultado = op1 + op2
                break;
            case "-":
                resultado = op1 - op2
                break;
            case "*":
                resultado = op1 * op2
                break;
            case "/":
                resultado = op1 / op2
                break;
        }
        result.style = "color: black";
        result.innerText = "= " + resultado;
    } else {
        result.style = "color: red";
        result.innerText = "Cálculo imposible"
    }
}