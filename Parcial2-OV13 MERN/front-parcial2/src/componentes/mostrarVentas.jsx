import React from 'react'

function MostrarVentas(info) {

    const cuerpotabla = (datos)=>{
        try {
            return datos.map((e) => (
                <tr>
                  <td>{e.producto}</td>
                  <td>{e.cantidad_vendida}</td>
                  <td>{e.total_ventas}</td>
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
                <th>Producto</th>
                <th>Cantidad vendida</th>
                <th>Total ventas</th>
            </tr>
         </thead>
    <tbody>
      {cuerpotabla(info.mostrar)}
    </tbody>
  </table>
  <div>
    <h2>Total vendido: {info.totalVendido.total}</h2>
  </div>
    </div>
  )
}

export default MostrarVentas;
