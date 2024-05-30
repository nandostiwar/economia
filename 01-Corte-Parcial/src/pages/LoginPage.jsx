import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../styles/LoginPage.css';

function LoginPage() {

    const goTo = useNavigate()
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    //const [boton, setBoton] = useState(0)

    const validateUser = (event) => {
        if (username === 'cocina' && password === 'cocina123') {
            goTo("/pedido")
        }
        else if (username === 'juego' && password === 'juego123') {
            goTo("/Card")
        }
        else {
            alert("Usuario Incorrecto")
        }
    }

    return (
        <div className='LoginPage'>
            <h1>LOGIN</h1>
            <br></br>
            <form onSubmit={validateUser} className='formPage'>
                <h3 className="txt">Usuario</h3>
                <input type="text" onChange={(e) => setUsername(e.target.value)} /><br></br>
                <h3 className="txt">Contraseña</h3>
                <input type="password" onChange={(e) => setPassword(e.target.value)} />
                <br></br><br></br>
                <input type="submit" value="Ingresar" />
            </form>
            <br></br><br></br>
            {/*<button onClick={() => setBoton(boton => boton + 1)}>Contar</button>
            <h1>{boton}</h1>*/}
        </div>

    )
}
export default LoginPage
