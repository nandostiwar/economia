import React, { useEffect, useState } from 'react';
import '../css/habitacion.css';

function Habitacion({ numero, habitacion, responseData }) {
  const [backgroundColor, setBackgroundColor] = useState(''); // Estado para almacenar el color de fondo  
  let estadoHabi = null;

  useEffect(() => {
    const tipo = habitacion.toLowerCase();

    // Verificar el valor correspondiente en responseData y establecer el color de fondo
    if (responseData && responseData[tipo] && responseData[tipo][`h${numero}`] === 0) {
      setBackgroundColor('green');
    } else {
      setBackgroundColor('red');
    }
  }, [habitacion, numero, responseData]);


  function validar(e) {
    e.preventDefault();

    //cambia el color cuando se quiere cambiar de estado la habitacion
    if (backgroundColor === 'green') {
      estadoHabi = 1;
      setBackgroundColor('red');
    } else {
      estadoHabi = 0;
      setBackgroundColor('green');
    }

    //consulta la api para poder modificar el valor de la habitacion
    fetch(`http://localhost:4000/v1/habitacion/setEstado`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ numero, tipo: habitacion.toLowerCase(), estadoHabi })
    })
      .then(res => res.json())
      .then(responseData => {
          console.log(responseData);
      });
  }

  return (
    <div className="habitacion" 
      onClick={validar} 
      style={{ backgroundColor: backgroundColor }}>
      {numero}
      
    </div>
  );
}

export default Habitacion;
