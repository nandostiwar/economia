// import { useState } from 'react'
import CardHabitacion from './CardHabitacion'
import { useState, useEffect } from 'react';
import './App.css'

function App() {

    const [habitaciones, setHabitaciones] = useState([]);

    useEffect(() => {
      const obtenerHabitaciones = async () => {
        try {
          const response = await fetch('http://localhost:3500/v1/hotel/getHabitaciones')
          const data = await response.json()
          setHabitaciones(data.habitaciones)
        } catch (error) {
          console.error('Error al obtener las habitaciones:', error);
        }
      };
      obtenerHabitaciones();
    }, []);

  if (habitaciones.length === 0) {
    return <p>Cargando...</p>
  }

  return (
    <>
      <div className='App'>
        <h1 className='title'>HOTEL CALIFORNIA</h1>
        <br />
        <div className='container'>
          {/* {
            habitaciones.map(([id, tipo, estado]) => {
              // console.log(id, tipo, estado);
            })
          } */}
          {habitaciones.map(({id, tipo, estado}) => (
            <CardHabitacion key={id} id={id} tipo={tipo} estado={estado} />
          ))}
          {/* {Array.from({ length: 5 }, (_, i) => (
              <CardHabitacion key={i + 1} tipo='Suite' numero={i + 1} color='green' />
            ))}
         
            {Array.from({ length: 5 }, (_, i) => (
              <CardHabitacion key={i + 1} tipo='Junior' numero={i + 1} color='blue' />
            ))}
          

            {Array.from({ length: 5 }, (_, i) => (
              <CardHabitacion key={i + 1} tipo='Economic' numero={i + 1} color='yellow' />
            ))} */}

        </div>
      </div>
    </>
  )
}


export default App
