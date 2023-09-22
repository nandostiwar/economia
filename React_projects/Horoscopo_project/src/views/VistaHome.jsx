import React from 'react'
import definitions from '../data/definitions'
import Card from '../components/Card'
// import "./VistaSignos.css"

const vsSignosList = definitions.map((sig) => {
  return <Card 
  key={sig.key}    
  name={sig.name} 
  dateRange={sig.dateRange} 
  img={sig.image} />
 })

function VistaHome() {
  return (
    <div>
      <div className='container'>{vsSignosList}</div>
    </div>
  )
}

export default VistaHome