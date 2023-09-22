import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './Cocina.css';
import { useNavigate } from 'react-router-dom';


class Pedido {
  constructor(turno, mesa, mesero, pedido) {
    this.turno = turno;
    this.mesa = mesa;
    this.mesero = mesero;
    this.pedido = pedido;
    this.estado = 'pendiente';
  }

  marcarEntregado() {
    this.estado = 'entregado';
  }
}

function Cocina() {
  const [mesa, setMesa] = useState('');
  const [mesero, setMesero] = useState('');
  const [pedido, setPedido] = useState('');
  const [pedidos, setPedidos] = useState([]);
  const navigate = useNavigate();

  const agregarPedido = () => {
    if (mesa && mesero && pedido) {
      const nuevoPedido = new Pedido(pedidos.length, mesa, mesero, pedido);
      setPedidos([...pedidos, nuevoPedido]);
      setMesa('');
      setMesero('');
      setPedido('');
    }
  };

  const marcarPedidoEntregado = (index) => {
    const nuevosPedidos = [...pedidos];
    nuevosPedidos[index].marcarEntregado();
    setPedidos(nuevosPedidos);
  };

  return (
    <div className="cocina-app">
      <div className="pedido-form">
        <input
          type="text"
          placeholder="Mesa"
          value={mesa}
          onChange={(e) => setMesa(e.target.value)}
        />
        <input
          type="text"
          placeholder="Mesero"
          value={mesero}
          onChange={(e) => setMesero(e.target.value)}
        />
        <input
          type="text"
          placeholder="Pedido"
          value={pedido}
          onChange={(e) => setPedido(e.target.value)}
        />
        <button onClick={agregarPedido}>Hacer Pedido</button>
        <button onClick={() => navigate(-1)}>Regresar</button>
      </div>
      <div className="lista-pedidos">
        {pedidos.map((pedido, index) => (
          <div key={index} className={`pedido ${pedido.estado}`}>
            <div>
                <span>Turno: {pedido.turno}</span>
              <span>Mesa: {pedido.mesa}</span>
              <span>Mesero: {pedido.mesero}</span>
            </div>
            <div>{pedido.pedido}</div>
            {pedido.estado === 'pendiente' ? (
              <button onClick={() => marcarPedidoEntregado(index)}>
                Pendiente
              </button>
            ) : (
              <span>Entregado</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}


export default Cocina;