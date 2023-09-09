import React, {useState} from 'react'
import './TextField.css'


function TextField(props) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const UsernameChange = (e) => {
    setUsername(e.target.value);
};

const PasswordChange = (e) => {
    setPassword(e.target.value);
};

const ventana = (e) => 
{
    e.preventDefault();

    // Comprobación simple de credenciales en el lado del cliente
    if (username === "admin" && password === "admin123") {
        // Redirige al usuario "admin" a una página específica para el administrador
        window.location.href = "/Admin";
    } else if (username === "user" && password === "user123") {
        // Redirige al usuario "user" a una página específica para el usuario normal
        window.location.href = "/User";
    } else {
       alert("Credenciales incorrectas. Intente nuevamente.")
    }
};

  return (
    <div>
        <form method='#' onSubmit={ventana}>

        <p>{props.titulo_user}</p>
        <input type='text' value={username} onChange={UsernameChange} placeholder={props.placeholder_user}></input>

        <p>{props.titulo_password}</p>
        <input type='password' value={password} onChange={PasswordChange} placeholder={props.placeholder_password}></input>

        <p></p>
        <button id='btn_access' type='submit'>Entrar</button>
        </form>
        
    </div>
  )
}

export default TextField