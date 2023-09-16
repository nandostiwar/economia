import React, { useState } from 'react';
import TarjRestaurant from '../Comp/TarjRestaurant';

function Cocina() {
  const [pedidos, setPedidos] = useState([]);
  const [regis, setRegis] = useState({
    Turno: 1,
    Pedido: '',
    Mesa: '',
    Mesero: '',
    Estado: 'Pendiente',
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
      Pedido: '',
      Mesa: '',
      Mesero: '',
      Estado: 'Pendiente',
    });
  };

  
  const Estado = (indicador) => {
    const nuevosPedidos = [...pedidos];
    nuevosPedidos[indicador].Estado = nuevosPedidos[indicador].Estado === 'Pendiente' ? 'Entregado' : 'Pendiente';
    setPedidos(nuevosPedidos);
  };

  return (
    <div>
      <div>
        <p>Pedido:</p>
        <input
          type="text"
          name="Pedido"
          value={regis.Pedido}
          onChange={handleChange}
        />
        <p>Mesa:</p>
        <input
          type="text"
          name="Mesa"
          value={regis.Mesa}
          onChange={handleChange}
        />
        <p>Mesero:</p>
        <input
          type="text"
          name="Mesero"
          value={regis.Mesero}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Guardar Pedido</button>
      </div>

      {pedidos.length > 0 && (
        <p>Pedido registrado con éxito con el número de turno: {regis.Turno - 1}</p>
      )}

      <div>
        <h2>Lista de Pedidos:</h2>
        {pedidos.map((pedido, indicador) => (
          <div key={indicador}>
            <TarjRestaurant
              turno={pedido.Turno}
              pedido={pedido.Pedido}
              mesa={pedido.Mesa}
              mesero={pedido.Mesero}
              col={pedido.Estado === 'Pendiente'? {background:'red'}:{background:'green'}}
            />
            <button onClick={() => Estado(indicador)}>
              {pedido.Estado === 'Pendiente' ? 'Pendiente' : 'Entregado'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cocina;
