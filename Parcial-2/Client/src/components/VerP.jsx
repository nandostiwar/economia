import React from 'react'
import { useState, useEffect } from 'react';

function VerP() {
    const[productos, setProductos] = useState([]);

    useEffect(()=>
    {
      fetch('http://localhost:5000/products') //solicito los datos del servidor
      .then(response => response.json()) //la respuesta la convierte en un objeto de JS
      .then(data => {setProductos(data)}) //seteo el array
      .catch(error => console.error('no funca', error));
    } );//no le pongo [] para que la actualización en editar sea en tiempo real y no tenga que recargar el componente
  
    return (
      <div>
  <table className='mi-tabla'>
       <thead>
              <tr>
                <th>ID</th>
                <th>Producto</th>
                <th>Precio</th>
              </tr>
        </thead>
        <tbody>
          {productos.map((dato, index) => (
              <tr key={index}>
  
                <td>{dato.product_id}</td>
                <td>{dato.product}</td>
                <td>{dato.price}</td>
     
              </tr>
  
          ))}
  
        </tbody>
      </table>     
  
      </div>
    );
  }

export default VerP