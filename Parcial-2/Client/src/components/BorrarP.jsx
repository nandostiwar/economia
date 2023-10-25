import React, { useState } from 'react'
import Ver from './Ver'
import VerP from './VerP';

function BorrarP() {

    const [id,setId] = useState("");

    const handleChange = async(e) =>
    {
       
        setId(e.target.value);

    }

    const handleSubmit = async(e)=>
    {
         e.preventDefault();
        await fetch(`http://localhost:5000/delete_product/${id}`,{
            method:'DELETE',
            headers: 
            {
                'Content-Type': 'application/json'  
            }
        }).then(response => {if(response.ok){alert("Producto borrado")}else{alert("Algo ha salido mal")}});
    }
  return (

    <div>
        
    <VerP />

        <form onSubmit={handleSubmit}>

            <input onChange={handleChange} type='number' placeholder='Digite el ID'></input>
            <p></p>
            <button type='submit'>Borrar</button>

        </form>

    </div>

  )
}

export default BorrarP