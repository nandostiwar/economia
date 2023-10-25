import React, { useState } from 'react'
import Ver from './Ver'
function Editar() {

    const [ID,setID] = useState("");
    const [newUser,setUser] = useState("");
    const [newRole,setRole]= useState("");


    const handleChangeID = (e) =>
    {
        setID(e.target.value);
    }

    const handleChangeUser = (e) =>
    {
        setUser(e.target.value);
    }
    const handleChangeRole =(e) =>
    {
        setRole(e.target.value);
    }

    const handleSubmit = async (e) =>
    {
        e.preventDefault();
        await fetch(`http://localhost:5000/users/${ID}`,
        {
            method:'PUT',
            headers: 
            {
                'Content-Type': 'application/json'  
            },
            body: JSON.stringify(
                {
                    username:newUser,
                    user_role:newRole
                }
            )
        }).then(response => { if(response.ok) { alert("Usuario actulizado")}else{alert("ha habido un error")}})
    }

  return (

    <div>
        
        <Ver />
    <p></p>
        <form onSubmit={handleSubmit}>

            <label>ID</label>
            <input type='number' onChange={handleChangeID} placeholder='#'></input>

            <label>Nuevo nombre de usuari</label>
            <input type='text' onChange={handleChangeUser} placeholder='Nuevo nombre'></input>

            <label>
                <input type='radio' name='role' onChange={handleChangeRole} value='Mesero' />Mesero
            </label>
            <label>
                <input type='radio' onChange={handleChangeRole} name='role' value='Admin'/>Administrador
            </label>
           

<p></p>
            <button type='submit'>Actualizar</button>
        </form>
    
    </div>
  )
}

export default Editar