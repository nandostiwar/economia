import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (user === "juego" && password === "juego123") {
        navigate("/juego");
    } else if (user === "cocina" && password === "cocina123") {
        navigate("/cocina");
    } else {
        alert("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Usuario"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Iniciar sesión</button>
    </div>
  );
}

export default Login;
