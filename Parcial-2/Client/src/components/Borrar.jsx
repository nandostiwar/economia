import React, { useState } from 'react'
import Ver from './Ver'

function Borrar() {

    const [id,setId] = useState("");

    const handleChange = async(e) =>
    {
       
        setId(e.target.value);

    }

    const handleSubmit = async(e)=>
    {
         e.preventDefault();
        await fetch(`http://localhost:5000/delete/${id}`,{
            method:'DELETE',
            headers: 
            {
                'Content-Type': 'application/json'  
            }
        }).then(response => {if(response.ok){alert("Usuario borrado")}else{alert("Algo ha salido mal")}});
    }
  return (

    <div>
        
    <Ver />

        <form onSubmit={handleSubmit}>

            <input onChange={handleChange} type='number' placeholder='Digite el ID'></input>
            <p></p>
            <button type='submit'>Borrar</button>

        </form>

    </div>

  )
}

export default Borrar