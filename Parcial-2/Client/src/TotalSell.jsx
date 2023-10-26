import React, { useEffect, useState } from 'react'

function TotalSell() {

  const [ventas, setVentas] = useState([]);
  const [total, setTotal] = useState([]);

  useEffect(()=>
  {

    fetch('http://localhost:5000/sum')
    .then(response => response.json())
    .then(data => {setTotal(data)})
    .catch(error => {console.error(error)})

    

    fetch('http://localhost:5000/sellings') //solicito los datos del servidor
    .then(response => response.json()) //la respuesta la convierte en un objeto de JS
    .then(data => {setVentas(data)}) //seteo el array
    .catch(error => console.error('no funca', error));
  } );//no le pongo [] para que la actualización en editar sea en tiempo real y no tenga que recargar el componente


  return (

    <div>
    
    <table className='mi-tabla'>
       <thead>
              <tr>
                <th>ID</th>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
                <th>Total de venta</th>
              </tr>
        </thead>
        <tbody>

        {ventas.map((dato, index) => (
           
               
                <tr key={index}>

                {/*<td><input type='checkbox' value={dato.product_id}/></td>*/}

                <td><label>{dato.product_id}</label></td>
                
                <td>{dato.product}</td>

                <td>{dato.amount}</td>

                <td>{dato.price}</td>
                <td>{dato.total}</td>
                
                </tr>
             
  
          ))}
  
        </tbody>
      </table> 

      <h2>Total: ${total.sum}</h2>  
    
    </div>

  )
}

export default TotalSell