import { useState } from 'react'
import './App.css'
import { userValidation } from './components/UserValidation.js'
import definitions from './data/definitions'
import Card from './components/Card'

function App() {
  let [isLoggedIn, setIsLoggedIn] = useState(true)
  
  const vsSignosList = definitions.map((sig) => {
   return <Card 
   key={sig.key}    
   name={sig.name} 
   dateRange={sig.dateRange} 
   img={sig.image} />
  })

  const handleButtonClick = () => {
    const user = document.getElementById('user').value;
    const passw = document.getElementById('pass').value;
    setIsLoggedIn(userValidation(user, passw));
    console.log("isLoggedIn " + isLoggedIn)
  }

  return (
    <>
      {!isLoggedIn ? (
        <div className='containerlogin'>
          <h1 className='white-with-blue-shadow'>Horóscopo</h1>
          <h3 >Iniciar Sesión</h3>
          <input id='user' className='form-control' type="text" placeholder='Usuario...' />
          <input id='pass' className='form-control' type="password" placeholder='Contraseña...' required="" />
          <button id='btnLogin' type="button" className="btn btn-info" onClick={handleButtonClick}>Ingresar</button>
        </div>
      ) : (
        <div className='container'>{vsSignosList}</div>
      )}
    </>
  )
}

export default App
