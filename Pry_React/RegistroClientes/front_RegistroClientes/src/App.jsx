import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./App.css";

function App() {
  const [id, setId] = useState("");
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensajeRespuesta, setMensajeRespuesta] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (id !== "" && nombre !== "" && edad !== "" && correo !== "") {
      try {
        const response = await fetch(
          "http://localhost:3500/v1/regisClientes/regisCliente",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id,
              nombre,
              edad,
              correo,
            }),
          }
        );
        console.log(response.body);
        if (response.ok) {
          setMensajeRespuesta("✅ Registro creado exitosamente");
          // Limpia los campos del formulario
          setId("");
          setNombre("");
          setEdad("");
          setCorreo("");
        } else {
          setMensajeRespuesta("❌ Error al registrar el cliente");
        }
      } catch (error) {
        console.error("❌ Error al enviar el formulario:", error);
        setMensajeRespuesta("❌ Error al registrar el cliente");
      }
    } else{
      setMensajeRespuesta("❌ Faltan campos por diligenciar");
    }
  };

  useEffect(() => {
    console.log(mensajeRespuesta);
  }, [mensajeRespuesta]);

  return (
    <>
      <div className="card">
        <div className="card-header">
          <h1>Registro de Clientes</h1>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Cédula</label>
              <input
                className="form-control"
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input
                className="form-control"
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Edad</label>
              <input
                className="form-control"
                type="number"
                value={edad}
                onChange={(e) => setEdad(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Correo</label>
              <input
                className="form-control"
                type="email"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
              />
            </div>
            <input className="btn btn-primary" type="submit" value="Enviar" />
            <Link to="/ListadoClientes">
              <input
                className="btn btn-secondary"
                type="button"
                value="Ver tabla Clientes"
              />
            </Link>
          </form>
          {mensajeRespuesta && <p>{mensajeRespuesta}</p>}
        </div>
      </div>
    </>
  );
}

export default App;
