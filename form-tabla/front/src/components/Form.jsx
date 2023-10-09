import React from 'react'
import { useState } from 'react';

function Form() {

const [name, setName] = useState("");

const [age, setAge] = useState("");
const [cedula, setCedula] = useState("");
const [email, setEmail] = useState("");

const handleSubmit = async (e) =>
{
   
    e.preventDefault();

    try {
        const response = await fetch('http://localhost:3001/up', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          
          body: JSON.stringify({
            // los datos que subo desde el componente
            "nombre": name,
            "edad": age,
            "cedula": cedula,
            "correo": email
          }, null, 2),
        });

        
  
        if (response.ok) {
          // La solicitud se realizó con éxito
          console.log('Usuario agregado correctamente');
          // Puedes realizar alguna acción adicional si es necesario
        } else {
          console.error('Error al agregar el usuario');
          // Manejar el error como consideres adecuado
        }
      } catch (error) {
        console.error('Error:', error);
        // Manejar el error como consideres adecuado
      }
    
}

const handleNameChange = (e) =>
{
    setName(e.target.value);
   
}

const handleAgeChange = (e) =>
{
    setAge(e.target.value);
   
}

const handlecedulaChange = (e) =>
{
    setCedula(e.target.value);
   
}

const handleEmailChange = (e) =>
{
    setEmail(e.target.value);
    
}


  return (
    <div>
        
        <form onSubmit={handleSubmit}>

            <label>Nombre</label>
            <br></br>
            <input type='text' placeholder='Nombre' onChange={handleNameChange}></input>

            <br></br>
            
            <label>Edad</label>
            <br></br>
            <input type='text' placeholder='Edad' onChange={handleAgeChange}></input>
            
            <br></br>

            <label>Cedula</label>
            <br></br>
            <input type='text' placeholder='Cedula' onChange={handlecedulaChange}></input>

            <br></br>

            <label>Correo</label>
            <br></br>
            <input type='text' placeholder='Correo' onChange={handleEmailChange}></input>


            <br></br>
            <br></br>
            <button type='submit'>Enviar</button>


        </form>

    </div>
  )
}

export default Form