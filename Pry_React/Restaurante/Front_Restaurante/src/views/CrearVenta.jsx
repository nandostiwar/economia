import { useState } from "react";
import { Link } from "react-router-dom";

const CrearVenta = () => {
  const [producto, setProducto] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [mensajeRespuesta, setMensajeRespuesta] = useState("");

  const crearVenta = async (e) => {
    e.preventDefault();

    if (producto !== "" && cantidad !== "") {
      try {
        const response = await fetch(
          "http://localhost:3500/v1/restaurante/crearVenta",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              producto,
              cantidad,
            }),
          }
        );
        console.log(response.body);
        if (response.ok) {
          setMensajeRespuesta("✅ Registro creado exitosamente");
          // Limpia los campos del formulario
          setProducto("");
          setCantidad("");
        } else {
          setMensajeRespuesta("❌ Error al registrar la Venta");
        }
      } catch (error) {
        console.error("❌ Error al enviar el formulario:", error);
        setMensajeRespuesta("❌ Error al registrar la Venta");
      }
    } else {
      setMensajeRespuesta("❌ Faltan campos por diligenciar");
    }
  };

  return (
    <div>
      <h1>Módulo Mesero</h1>
      <h2>Restaurante</h2>
      <div>
        <h3>Crear Venta</h3>
        <input
          type="text"
          name=""
          id=""
          placeholder="ingresa el Producto..."
          onChange={(e) => setProducto(e.target.value)}
        />
        <input
          type="number"
          name=""
          id=""
          placeholder="ingresa la Cantidad..."
          onChange={(e) => setCantidad(e.target.value)}
        />
        <div>
        <Link to="/">
          <button>Regresar</button>
        </Link>
          <button onClick={crearVenta}>Crear Venta</button>
        </div>
      </div>

      <br />
      {mensajeRespuesta && <p>{mensajeRespuesta}</p>}
      <br />
    </div>
  );
};

export default CrearVenta;
