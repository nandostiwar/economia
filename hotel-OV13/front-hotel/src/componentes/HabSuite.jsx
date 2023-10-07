import React from 'react'

function HabSuite(hb) {
  return (
    <div>
        <button type="button" onClick={hb.click} style={hb.color}>
           <p>Habitacion: {hb.habit}</p><br />
           <p>Estado: {hb.est}</p> 
        </button>
    </div>
  )
}

export default HabSuite