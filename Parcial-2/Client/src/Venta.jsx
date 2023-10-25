import React, { useEffect, useState } from 'react'

function Venta() {

    const [prods, setProductos] = useState([]);

    const [Venta, setVenta] = useState([]);

    {let lista = []}

    useEffect(()=>
    {
      fetch('http://localhost:5000/products') //solicito los datos del servidor
      .then(response => response.json()) //la respuesta la convierte en un objeto de JS
      .then(data => {setProductos(data)}) //seteo el array
      .catch(error => console.error('no funca', error));
    } ,[]);
    

    const select = (e) =>
    {
      
      setVenta(Venta => [...Venta, e]);
      console.log(Venta);
    }



  return (
    <div>

    

    <table className='mi-tabla'>
       <thead>
              <tr>
                <th>ID</th>
                <th>Producto</th>
              </tr>
        </thead>
        <tbody>

        {prods.map((dato, index) => (
           
               
                <tr key={index}>

                {/*<td><input type='checkbox' value={dato.product_id}/></td>*/}

                <td><label>{dato.product_id}</label></td>
                
                <td>{dato.product}</td>
                
                </tr>
             
  
          ))}
  
        </tbody>
      </table>  

  

    
   

        
        

        
       
       

       

    </div>
  )
}

export default Venta