import React from 'react';
import '../css/habitacion.css'

function Habitacion({numero,habitacion}) {

    function validar(e){
        e.preventDefault();
        const operacion = "prueba";
        fetch(`http://localhost:4000/v1/habitacion/sitio`, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({operacion})
        })
            .then(res =>res.json())
            .then(responseData => {
                setResultado(responseData.resultado)
            })

        console.log("habitacion: "+numero+" seccion: "+habitacion );
    }


    return (
    <div className="habitacion"
            onClick={validar}>
        {numero}
    </div>
    );
}

export default Habitacion;
