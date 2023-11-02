import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../App.css'

const CrearVenta = () => {
  const [productos, setProductos] = useState([]);
  const [productoSeleccionado, setProductoSeleccionado] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [mensajeRespuesta, setMensajeRespuesta] = useState("");

  const crearVenta = async (e) => {
    e.preventDefault();

    if (productoSeleccionado !== "" && cantidad !== "") {
      const id_producto = productoSeleccionado
      console.log("venta: ",id_producto, cantidad )
      try {
        const response = await fetch(
          "http://localhost:3500/restaurante/ventas/crearVenta",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id_producto,
              cantidad,
            }),
          }
        );
        console.log(response.body);
        if (response.ok) {
          setMensajeRespuesta("✅ Registro creado exitosamente");
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

  // Llamar al servidor y obtener la lista de productos
  useEffect(() => {
    const obtenerProductos = async () => {
      const response = await fetch(
        "http://localhost:3500/restaurante/productos/getProductos"
      );
      const data = await response.json();
      setProductos(data.productos);
      console.log(data.productos)
    };
    console.log("prod. seleccionado:",productoSeleccionado)

    obtenerProductos(); 
  }, []);

  return (
    <div className="card">
      <h1>Módulo Mesero</h1>
      <h2>Restaurante</h2>
      <div className="card">
        <h3>Crear Venta</h3>

        <select
        className="form-select"
          value={productoSeleccionado}
          onChange={(e) => setProductoSeleccionado(e.target.value)}
          {...console.log("producto seleccionado" ,productoSeleccionado)}
        >
          <option value="">Selecciona un producto</option>
          {productos.map((producto) => (
            <option key={producto.id_producto} value={producto.id_producto}>
              {producto.producto}
            </option>
          ))}
        </select>
        <input
        className="form-control"
          type="number"
          name=""
          id=""
          placeholder="ingresa la Cantidad..."
          onChange={(e) => setCantidad(e.target.value)}
        />
        <div>
          <Link to="/">
            <button className="btn btn-secondary" >Regresar</button>
          </Link>
          <button className="btn btn-success" onClick={crearVenta}>Crear Venta</button>
        </div>
      </div>

      <br />
      {mensajeRespuesta && <p>{mensajeRespuesta}</p>}
      <br />
    </div>
  );
};

export default CrearVenta;
