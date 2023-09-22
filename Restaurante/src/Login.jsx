import React, { useState } from "react";
import './login.css'
import { Link, useNavigate } from "react-router-dom";

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const login = (event) => {
        event.preventDefault();
        if (username == "" || password == "") {
            setError(true);
            return;
        }
        setError(false);

        if(username == "juego" && password == "juego123"){
            navigate("/juego");
        }
    };


    return (
    <div className="login">
        <div className="login-screen">
        <div className="app-title">
            <h1>Login</h1>
        </div>
        <form onSubmit={login}>
            <div className="login-form">
            <div className="control-group">
                <input
                type="text"
                className="login-field"
                placeholder="Usuario"
                onChange={(e) => setUsername(e.target.value)}
                id="login-name"
                />
                <label className="login-field-icon fui-user"></label>
            </div>

            <div className="control-group">
                <input
                type="password"
                className="login-field"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                id="login-pass"
                />
                <label className="login-field-icon fui-lock"></label>
            </div>

            <button className="btn btn-primary btn-large btn-block">
                Inicar Sesion
            </button>
            </div>
        </form>
        {error && <p>Todos los campos son obligatorios</p>}
        </div>
    </div>
    );
}

export default Login