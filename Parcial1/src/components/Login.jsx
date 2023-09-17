import React, { useState } from "react";
import './Login.css'


function Login(props) {

  const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

const handleSubmit = (e) => {
    e.preventDefault();

    // Comprobación simple de credenciales en el lado del cliente
    if (username === "juego" && password === "juego123") {
        // Redirige al usuario "admin" a una página específica para el administrador
        window.location.href = "/juego";
    } else if (username === "cocina" && password === "cocina123") {
        // Redirige al usuario "user" a una página específica para el usuario normal
        window.location.href = "/cocina";
    } else {
        alert("contraseña incorrecta")
    }
};

  return (
    <div className='form'>

        <form method='#' onSubmit={handleSubmit}>

            <h2>Iniciar sesión</h2>

            <p>Nombre de usuario</p>
            <input type='text' placeholder={props.user_placeholder} onChange={handleUsernameChange}></input>
            <p>Contraseña</p>
            <input type='password' placeholder={props.password_placeholder} onChange={handlePasswordChange}></input>
            <p></p>
            <button>Entrar</button>


        </form>


    </div>
  )
}

export default Login