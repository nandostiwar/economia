import React, { useState } from 'react'

function MostrarUsuario(info) {

    const [dato,setDato]=useState("")

    const cuerpotabla = (datos)=>{

      try {
         return datos.map((e) => (
          <tr key={e.usuarioid}>
            <td>{e.usuarioid}</td>
            <td>{e.usuario}</td>
            <td>{e.rol}</td>
            <td>
              <button
                type="button"
                className="btn btn-danger"
                onClick={()=>info.clickMost(e.usuarioid) }
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
        <th>Usuario</th>
        <th>Rol</th>
        <th>Acción</th>
      </tr>
    </thead>
    <tbody>
      {cuerpotabla(info.mostrar)}
    </tbody>
  </table>
</div>

  )
}

export default MostrarUsuario;