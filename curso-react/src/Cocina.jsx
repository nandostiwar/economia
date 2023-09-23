import React, { useState } from 'react';
import './Cocina.css';

function Cocina() {
  const [pedidos, setPedidos] = useState([]);
  const [pedidoActual, setPedidoActual] = useState({ mesa: '', pedido: '', mesero: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPedidoActual({ ...pedidoActual, [name]: value });
  };

  const handleHacerPedido = () => {
    if (pedidoActual.mesa && pedidoActual.pedido && pedidoActual.mesero) {
      setPedidos([...pedidos, pedidoActual]);
      setPedidoActual({ mesa: '', pedido: '', mesero: '' });
    }
  };

  const handleCambiarEstado = (index) => {
    const nuevosPedidos = [...pedidos];
    nuevosPedidos[index].entregado = !nuevosPedidos[index].entregado;
    setPedidos(nuevosPedidos);
  };

  return (
    <div className="cocina-container">
      <h1 className="titulo">Cocina</h1>
      <div className="formulario">
        <input
          type="text"
          placeholder="Mesa"
          name="mesa"
          value={pedidoActual.mesa}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Pedido"
          name="pedido"
          value={pedidoActual.pedido}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Mesero"
          name="mesero"
          value={pedidoActual.mesero}
          onChange={handleInputChange}
        />
        <button onClick={handleHacerPedido}>Hacer Pedido</button>
      </div>
      {pedidos.map((pedido, index) => (
        <div key={index} className={`pedido ${pedido.entregado ? 'entregado' : 'pendiente'}`}>
          <div className="info-pedido">
            <div className="numero-pedido">Pedido #{index + 1}</div>
            <div>Mesa: {pedido.mesa}</div>
            <div>Pedido: {pedido.pedido}</div>
            <div>Mesero: {pedido.mesero}</div>
          </div>
          <button onClick={() => handleCambiarEstado(index)}>
            {pedido.entregado ? 'Entregado' : 'Pendiente'}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Cocina;
