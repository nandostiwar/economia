import React, { useState } from "react";
import Ordenes from "./ordenes";
import './Cocina.css'
function Cocina() {
  const [turno, setTurno] = useState("");
  const [orden, setOrden] = useState("");
  const [mesa, setMesa] = useState("");
  const [mesero, setMesero] = useState("");
  const [ordenes, setOrdenes] = useState([]); 
  const [colores, setColores] = useState([]);
  const [estados, setEstados] = useState([]);


  const handlecolor = (index) => {
    const nuevosColores = [...colores];
    nuevosColores[index] = "Green"; 
    setColores(nuevosColores);

    const nuevosEstados=[...estados]
    nuevosEstados[index] = "Entregado"
    setEstados(nuevosEstados)
  };

  const handleAñadirOrden = () => {
    if (turno && orden && mesa && mesero) {
      const nuevaOrden = {
        turno,
        orden,
        mesa,
        mesero,
      };

      
      setOrdenes([...ordenes, nuevaOrden]);
      setColores([...colores, "Red"]);
      setEstados([...estados, "Pendiente"])
      
      setTurno("");
      setOrden("");
      setMesa("");
      setMesero("");
    } else {
      alert("Por favor, completa todos los campos antes de añadir una orden.");
    }
  };

  return (
    <div id="input" className="container">

      <div className="grid_item">
            <h1>Registrar Órdenes</h1>
            <br></br>
            <input
              type="text"
              value={turno}
              onChange={(e) => setTurno(e.target.value)}
              placeholder="Turno"
            />
            <br></br>
            <input
              type="text"
              value={orden}
              onChange={(e) => setOrden(e.target.value)}
              placeholder="Orden"
            />
            <br></br>
            <input
              type="text"
              value={mesa}
              onChange={(e) => setMesa(e.target.value)}
              placeholder="Mesa"
            />
            <br></br>
            <input
              type="text"
              value={mesero}
              onChange={(e) => setMesero(e.target.value)}
              placeholder="Mesero"
            />
            <br></br>
            <br></br>
            <button onClick={handleAñadirOrden}>Añadir Orden</button>
      </div>

      <div id="pedidos" className="grid_item">
        <h2>Órdenes Agregadas:</h2>
        
        {ordenes.map((orden, index) =>(

            <Ordenes

            key={index}
            id={index}
            turno={orden.turno}
            Torden={orden.orden}
            mesa={orden.mesa}
            mesero={orden.mesero}
            funcion={() => handlecolor(index)}
            color = {colores[index]}
            estado = {estados[index]}
           
            />

        ))}

      </div>
    </div>
  );
}

export default Cocina;
