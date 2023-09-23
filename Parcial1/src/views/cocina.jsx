import React, { useState } from 'react';
import TarjRestaurant from '../Comp/TarjRestaurant';
import "./cocina.css"

function Cocina() {
  const [pedidos, setPedidos] = useState([]);
  const [regis, setRegis] = useState({
    Turno: 1,
    Pedido: "",
    Mesa: "",
    Mesero: "",
    Estado: "Pendiente",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegis({ ...regis, [name]: value });
  };

  const handleSubmit = () => {
    const nuevoPedido = { ...regis };
    setPedidos([...pedidos, nuevoPedido]);

    setRegis((prevRegis) => ({ ...prevRegis, Turno: prevRegis.Turno + 1 }));
    setRegis({
      Turno: regis.Turno + 1,
      Pedido: "",
      Mesa: "",
      Mesero: "",
      Estado: "Pendiente",
    });
  };

  const regresar =()=>{
    window.location="/"
  } 
  
  const Estado = (indicador) => {
    const nuevosPedidos = [...pedidos];
    if(nuevosPedidos[indicador].Estado==="Pendiente"){
      nuevosPedidos[indicador].Estado = nuevosPedidos[indicador].Estado === "Pendiente" ? "Entregado" : "Pendiente";
      setPedidos(nuevosPedidos);
    }else alert("El pedido ya se entrego")
  };

  return (
    <div className='principal'>
      <div className='pedidos'>
        <h4>Pedido</h4>
        <input
          type="text"
          name="Pedido"
          value={regis.Pedido}
          onChange={handleChange}
        />
        <h4>Mesa</h4>
        <input
          type="text"
          name="Mesa"
          value={regis.Mesa}
          onChange={handleChange}
        />
        <h4>Mesero</h4>
        <input
          type="text"
          name="Mesero"
          value={regis.Mesero}
          onChange={handleChange}
        />
        <br />
        <button onClick={handleSubmit}>Guardar Pedido</button>
        <br />
        <button type="button" onClick={regresar}>Regresar</button>

        {pedidos.length > 0 && (
        <p>Pedido registrado con éxito con el número de turno: {regis.Turno - 1}</p>
      )}

      </div>

      <div className='lista'>
        <h2>Lista de Pedidos:</h2>
        <br />
        {pedidos.map((pedido, indicador) => (
          <div key={indicador}>
            <TarjRestaurant
              turno={pedido.Turno}
              pedido={pedido.Pedido}
              mesa={pedido.Mesa}
              mesero={pedido.Mesero}
              col={pedido.Estado === "Pendiente"? {background:"red"}:{background:"green"}}
            />
            <button onClick={() => Estado(indicador)}>
              {pedido.Estado === "Pendiente" ? "Pendiente" : "Entregado"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cocina;
