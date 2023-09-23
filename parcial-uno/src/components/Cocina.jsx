import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Cocina.css"

function Cocina() {
    const navigate =  useNavigate();
    const [pedidos, setPedidos] = useState([]);
    const [pedidoActual, setPedidoActual] = useState({ pedido: '', mesa: '', mesero: '', estado: 'pendiente' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pedidoActual.pedido && pedidoActual.mesa && pedidoActual.mesero) {
      setPedidos([...pedidos, pedidoActual]);
      setPedidoActual({ pedido: '', mesa: '', mesero: '', estado: 'pendiente' });
    }
  };
  const handleBackToLogin = () => {
    navigate('/');
  };

  const handleEntregarPedido = (index) => {
    const updatedPedidos = [...pedidos];
    updatedPedidos[index].estado = 'entregado';
    setPedidos(updatedPedidos);
  };

  return (
    <div className='Container'>
      <h1>Cocina</h1>
      <button onClick={handleBackToLogin}>Volver al Login</button>
      <br/>
      <br/>
      <form onSubmit={handleSubmit}>
        <label>
          Pedido:
          <input
            className='Input'
            type="text"
            value={pedidoActual.pedido}
            onChange={(e) => setPedidoActual({ ...pedidoActual, pedido: e.target.value })}
          />
        </label>
        <label>
          Mesa:
          <input
            type="text"
            value={pedidoActual.mesa}
            onChange={(e) => setPedidoActual({ ...pedidoActual, mesa: e.target.value })}
          />
        </label>
        <label>
          Mesero:
          <input
            type="text"
            value={pedidoActual.mesero}
            onChange={(e) => setPedidoActual({ ...pedidoActual, mesero: e.target.value })}
          />
        </label>
        <button type="submit">Agregar Pedido</button>
      </form>
      <div>
        {pedidos.map((pedido, index) => (
          <div key={index} className={pedido.estado === 'pendiente' ? 'pedido-pendiente' : 'pedido-entregado'}>
            <p>Pedido: {pedido.pedido}</p>
            <p>Mesa: {pedido.mesa}</p>
            <p>Mesero: {pedido.mesero}</p>
            {pedido.estado === 'pendiente' && (
              <button onClick={() => handleEntregarPedido(index)}>Marcar como entregado</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cocina;