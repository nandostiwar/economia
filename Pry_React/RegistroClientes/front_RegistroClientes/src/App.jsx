import { useState, useEffect } from 'react';

import './App.css';

function App() {
  const [id, setId] = useState('');
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensajeRespuesta, setMensajeRespuesta] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3500/v1/regisClientes/regisCliente', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id,
          nombre,
          edad,
          correo,
        }),
      });
      console.log(response.body)
      if (response.ok) {
        setMensajeRespuesta('✅ Registro creado exitosamente');
      } else {
        setMensajeRespuesta('❌ Error al registrar el cliente');
      }
    } catch (error) {
      console.error('❌ Error al enviar el formulario:', error);
      setMensajeRespuesta('❌ Error al registrar el cliente');
    }
  };

  useEffect(() => {
    console.log(mensajeRespuesta);
  }, [mensajeRespuesta]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Registro de Clientes</h2>
        <label>Cedula</label>
        <input type="text" onChange={(e) => setId(e.target.value)} />
        <br />
        <label>Nombre</label>
        <input type="text" onChange={(e) => setNombre(e.target.value)} />
        <br />
        <label>Edad</label>
        <input type="number" onChange={(e) => setEdad(e.target.value)} />
        <br />
        <label>Correo</label>
        <input type="email" onChange={(e) => setCorreo(e.target.value)} />
        <br />
        <input type="submit" value="Enviar" />
      </form>
      {mensajeRespuesta && <p>{mensajeRespuesta}</p>}
    </>
  );
}

export default App;
