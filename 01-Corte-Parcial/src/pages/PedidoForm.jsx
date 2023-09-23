import React, { useState } from 'react';
import '../styles/PedidoForm.css';
import CardTwo from '../components/CardTwo';

function PedidoForm() {
  const [turno, setTurno] = useState(1); // Inicializamos el turno en 1
  const [mesa, setMesa] = useState('');
  const [mesero, setMesero] = useState('');
  const [ordenPedidos, setOrdenPedidos] = useState('');
  const [pedidosPendientes, setPedidosPendientes] = useState([]);
  const [estado, setEstado] = useState('Pendiente');

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoPedido = {
      turno,
      mesa,
      mesero,
      ordenPedidos,
      estado,
    };
    setPedidosPendientes([...pedidosPendientes, nuevoPedido]);
    setTurno(turno + 1); // Incrementamos el turno automáticamente
    setMesa('');
    setMesero('');
    setOrdenPedidos('');
  };

  const handleEstadoChange = (index) => {
    const nuevosPedidos = [...pedidosPendientes];
    nuevosPedidos[index].estado = 'Entregado';
    setPedidosPendientes(nuevosPedidos);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='PedidoForm'>
        
        <h2>Hacer Pedido</h2>
        <h4>Turno: {turno}</h4>
        <h4>Mesa</h4>
        <input
          type="number"
          value={mesa}
          onChange={(e) => setMesa(e.target.value)}
        />
        <h4>Mesero</h4>
        <input
          type="text"
          value={mesero}
          onChange={(e) => setMesero(e.target.value)}
        />
        <h4>Escribir el Pedido</h4>
        <input
          type="text"
          value={ordenPedidos}
          onChange={(e) => setOrdenPedidos(e.target.value)}
        />
        <br />
        <button type="submit" className='BotonPedidos'>Hacer Pedido</button>
      </form>
    
      <h2></h2>
      <ul>
        {pedidosPendientes.map((pedido, index) => (
          <>
            console.log({index});
            




          <CardTwo key={index}  turno={pedido.turno} mesa={pedido.mesa} mesero={pedido.mesero}  orden={pedido.ordenPedidos} estado={pedido.estado} />
          
          {pedido.estado === 'Pendiente' && (
              <button onClick={() => handleEstadoChange(index)}>
                Entregado
              </button>
          )}
          
        </>
        ))}
      </ul>
    </div>
  );
}

export default PedidoForm;