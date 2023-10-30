import React, { useState } from 'react'

function MostrarProducto(info) {

const cuerpoTabla = (datos)=>{
  try {
    return datos.map((e) => (
      <tr key={e.productoid}>
        <td>{e.productoid}</td>
        <td>{e.producto}</td>
        <td>{e.precio}</td>
        <td>
          <button
            type="button"
            className="btn btn-danger"
            onClick={()=>info.clickBorrar(e.productoid) }
          >
            Borrar
          </button>
        </td>
      </tr>
    ))
  } catch (error) {
    console.log(error)
  }
}

  return (
    <div>
        <table className="table table-bordered">
    <thead className="table-primary">
      <tr>
        <th>ID</th>
        <th>Producto</th>
        <th>Precio</th>
        <th>Acción</th>
      </tr>
    </thead>
    <tbody>
      {cuerpoTabla(info.mostrar)}
    </tbody>
  </table>
    </div>
  )
}

export default MostrarProducto