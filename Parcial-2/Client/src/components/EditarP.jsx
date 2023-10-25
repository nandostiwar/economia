import React, { useState } from 'react'
import Ver from './Ver'
import VerP from './VerP';
function EditarP() {

    const [ID,setID] = useState("");
    const [newProduct,setProduct] = useState("");
    const [newPrice,setPrice]= useState("");


    const handleChangeID = (e) =>
    {
        setID(e.target.value);
    }

    const handleChangeProduct = (e) =>
    {
        setProduct(e.target.value);
    }
    const handleChangePrice =(e) =>
    {
        setPrice(e.target.value);
    }

    const handleSubmit = async (e) =>
    {
        e.preventDefault();
        await fetch(`http://localhost:5000/products/${ID}`,
        {
            method:'PUT',
            headers: 
            {
                'Content-Type': 'application/json'  
            },
            body: JSON.stringify(
                {
                    product:newProduct,
                    price:newPrice
                }
            )
        }).then(response => { if(response.ok) { alert("Producto actulizado")}else{alert("ha habido un error")}})
    }

  return (

    <div>
        
        <VerP />
    <p></p>
        <form onSubmit={handleSubmit}>

            <label>ID</label>
            <input type='number' onChange={handleChangeID} placeholder='#'></input>

            <label>Nuevo producto</label>
            <input type='text' onChange={handleChangeProduct} placeholder='Nuevo nombre'></input>

            <label>Nuevo precio</label>
            <input type='text' onChange={handleChangePrice} placeholder='Nuevo precio'></input>

            
           

<p></p>
            <button type='submit'>Actualizar</button>
        </form>
    
    </div>
  )
}

export default EditarP