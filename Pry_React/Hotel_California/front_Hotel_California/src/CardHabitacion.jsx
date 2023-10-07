
import "./assets/CardHabitacion.css"
import { useState } from "react";

// eslint-disable-next-line react/prop-types
function CardHabitacion({ id="id ?", tipo = "Tipo ?", estado}) {
    
    const [disponible, setDisponible] = useState(estado);
  

  function validate() {
    setDisponible(!disponible);
    
        fetch(`http://localhost:3500/v1/hotel/liberar`, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({"habitacionEdit": disponible})
        })
  }

    return (
        <div className={`CardHabitacion ${disponible ? 'disponible' : 'reservado'}`}>
            <h1>{tipo + " " + id}</h1>
            <p>{estado}</p>
            {disponible ? (<button onClick={validate} >Disponible</button>) : (<button onClick={validate} >Reservado</button>)}
        </div>
    )
}

export default CardHabitacion