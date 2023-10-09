import React from 'react'
import './Tabla.css'
import { useState } from 'react'
import { useEffect } from 'react'


function Tabla(props) {

    const [cliente,setCliente] = useState([])

    
    useEffect(()=>
    {
      fetch('http://localhost:3001/obtener-clientes') //solicito los datos del servidor
      .then(response => response.json()) //la respuesta la convierte en un objeto de JS
      .then(data => {setCliente(data)}) //seteo el array cliente
      .catch(error => console.error('no funca', error));
    }, []);


  return (

    <div>
    <table className='mi-tabla'>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Edad</th>
          <th>Cédula</th>
          <th>Correo</th>
        </tr>
      </thead>
      <tbody>
        {cliente.map((dato, index) => (
            <tr key={index}>

              <td>{dato.nombre}</td>
              <td>{dato.edad}</td>
              <td>{dato.cedula}</td>
              <td>{dato.correo}</td>
   
            </tr>

        ))}

      </tbody>
    </table>     
    </div>

  )

}

export default Tabla