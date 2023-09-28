import { useState } from "react";
import '../styles/Calculadora.css'
import Resultado from "./Resultado";

function Calculadora(){
    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    const [resultado, setResultado] = useState('');

    function handleSubmit(e){

        e.preventDefault();
        const operacion = e.target.value;
        const func = e.target.dataset.text; //optenemos la palabra operacion, en la ruta ejecutamos la funcion operacion
        fetch(`http://localhost:3500/v1/calculadora/${func}`, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({number1, number2, operacion, func})//se nvia 2 parametros de mas, el tipo de operacion que va hacer y la palabra para que ejecute la ruta que la cual se va usar 
        })
            .then(res =>res.json())
            .then(responseData => {
                setResultado(responseData.resultado)
                // setResultado(responseData)
                // console.log(resultado)
            })
    }

    return (
        <div className="container">
            <h1 id="txtCalculadora">CALCULADORA</h1>
            <form>
                <input type="text" className="number" onChange={(e)=>{setNumber1(e.target.value)}}/><br />
                <input type="text" className="number" onChange={(e)=>{setNumber2(e.target.value)}}/><br />
                <input type="submit" className="btnEnviar" value="sumar" data-text="operacion" onClick={handleSubmit}/>
                <input type="submit" className="btnEnviar" value="restar" data-text="operacion" onClick={handleSubmit}/>
                <input type="submit" className="btnEnviar" value="multiplicar" data-text="operacion" onClick={handleSubmit}/>
            </form>
            <Resultado resultado={"El resultado es "+ resultado}/>
        </div>
    )
}

export default Calculadora