import React from 'react'

function Encabezado(c) {
  return (
    <div>
        <table border={"1"}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NOMBRE</th>
                    <th>CEDULA</th>
                    <th>CORREO</th>
                </tr>
            </thead>
            <tbody>
                    <tr>
                        <th>{c.r1}</th>
                        <th>{c.r2}</th>
                        <th>{c.r3}</th>
                        <th>{c.r4}</th>
                    </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Encabezado