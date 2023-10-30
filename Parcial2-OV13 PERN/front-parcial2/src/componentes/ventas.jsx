import React from 'react'

function Ventas(info) {

  const opciones = (productos)=>{
    try {
      return productos.map((opcion)=>(
        <option value={opcion.producto}>
          {opcion.producto}
        </option>
      ))
    } catch (error) {
      console.log()
    }
  }

  return (
    <div>
  <div className="container mt-4">
    <h1>Menu de venta</h1>
    <br />
    <div className="form-group">
      <select
        className="form-control"
        name="comida"
        onChange={(e) => info.setOpci(e.target.value)}
        value={info.vlop}
      >
        <option value="">Seleccione un producto</option>
        {opciones(info.opci)}
      </select>
    </div>
    <div className="form-group">
      <input
        type="number"
        className="form-control"
        name="cantidad"
        placeholder="Cantidad"
        onChange={(e) => info.setcant(e.target.value)}
        value={info.vlca}
      />
    </div>
    <br />
    <button
      type="button"
      className="btn btn-primary"
      onClick={info.click}
    >
      Hacer pedido
    </button>
  </div>
</div>

  )
}

export default Ventas