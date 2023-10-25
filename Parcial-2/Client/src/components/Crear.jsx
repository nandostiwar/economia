import React, { useState } from 'react'

function Crear() {

    const [username,setUsername] = useState("");
    const [role,setRole] = useState("");
    

    const handleChangeUser = (e) =>
    {
        setUsername(e.target.value)
    }

    const handleChangeRole = (e) =>
    {
        setRole(e.target.value)
    }

    const handleSubmit = async (e) =>
    {
        e.preventDefault();
        console.log(role);
        console.log(username);

        await fetch('http://localhost:5000/create_user',
        {
            method:'POST',
            headers:
            {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(
                {
                    username:username,
                    user_role:role
                }
            )
        }).then(response => {if(response.ok){alert("Usuario creado con exito!")}else{alert("Algo ha salido mal")}})
        .catch(error => console.error('no funca', error)) 

    }

  return (

    <div>
    
        <form onSubmit={handleSubmit}>

            <h1>Crear usuario</h1>

            <label>Nombre de usuario</label>
            <p></p>
            <input type='text' onChange={handleChangeUser} placeholder='Inserte nombre de usuario'></input>
            <p></p>
            <label>Rol de usuario</label>
            <p></p>
            <label>
                <input type="radio" onChange={handleChangeRole} name="rol" value="Mesero" />
                Mesero
            </label>
            <label>
                <input type="radio" onChange={handleChangeRole} name="rol" value="Admin" />
                Administrador
           </label>

            <button type='submit'>Crear</button>
        </form>
        
    </div>

  )
}

export default Crear