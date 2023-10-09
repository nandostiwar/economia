import { useEffect, useState } from 'react'

import './App.css'
import Cards from './components/Cards'



function App() {





    const [habitaciones, setHabitaciones] = useState([]);

    useEffect(()=>
    {
      fetch('http://localhost:3000/habitaciones')
      .then(response => response.json()) //lo convierto en JS
      .then(data => {  setHabitaciones(data)}) //lo guardo en el array habitaciones      
      .catch(error => console.error('no funca', error));

    });

    
    const handleStatus = async (numero) => {
      try {
          const response = await fetch(`http://localhost:3000/cambiarEstado`, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({habitacionNum: numero}),
          });
               
          if(response.ok)
          {
            console.log("correcto")
          }
          else{
            console.log("algo salio mal")
            console.log(response)
          }
               
            }
            catch (error)
            {
                console.error('no funca', error);
            }
    }


   

    

  return (
    <div className='pisos'>
        
        {habitaciones.map((habitacion, index) =>
        (
            <div className='edificio' key={index} onClick={()=>handleStatus(habitacion.numero)}>
              
              <Cards
              
              titulo={habitacion.titulo}
              numero={habitacion.numero}
              status={habitacion.status}
              color={habitacion.color}

              />

              </div>
        ))}

    

    {/* <Cards titulo="Senior" numero={"301"} funcion={handleStatus}/>
        

      
      <div className='pisos'>

        <Cards titulo="Junior" numero={"201"}/>
        <Cards titulo="Junior" numero={"202"}/>
        <Cards titulo="Junior" numero={"203"}/>
        <Cards titulo="Junior" numero={"204"}/>
        <Cards titulo="Junior" numero={"205"}/>

      </div>

      <div className='pisos'>

        <Cards titulo="Eco" numero={"101"}/>
        <Cards titulo="Eco" numero={"102"}/>
        <Cards titulo="Eco" numero={"103"}/>
        <Cards titulo="Eco" numero={"104"}/>
        <Cards titulo="Eco" numero={"105"}/>

      </div> */}
    </div>
  )
}

export default App
