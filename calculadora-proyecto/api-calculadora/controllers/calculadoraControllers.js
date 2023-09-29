const {add, subtract, multiply} = require('../operaciones/operaciones.js');


//funcion que valida el tipo de operacion y ejecuta su funcion correspondiente
function operacion(req, res){
    const {body} = req;
    const {number1, number2} = body;
    let  result = 0;
    
    if(body['operacion'] == "sumar"){
        result = add(number1, number2);
    }else if(body['operacion'] == "restar"){
        result = subtract(number1, number2);
    }else if(body['operacion'] == "multiplicar"){
        result = multiply(number1, number2);
    }

    res.json({
        resultado: result
    })
}


function sumar(req, res){
    // const {body} = req;
    // const {number1, number2} = body;
    // const result = add(number1, number2);
    // res.json({
    //     resultado: result
    // });
}

function restar(req, res){
    // const {body} = req;
    // const {number1, number2} = body;
    // const result = subtract(number1, number2);
    // res.json({
    //     resultado: result
    // })
}

function multiplicar(req, res){
    // const {body} = req;
    // const {number1, number2} = body;
    // const result = multiply(number1, number2);
    // res.json({
    //     resultado: result
    // })
}

module.exports = {
    sumar,
    restar,
    multiplicar,
    operacion
}