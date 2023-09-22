import { useState } from 'react'
import './App.css'
import { userValidation } from './components/UserValidation.js'
// import definitions from './data/definitions'
// import Card from './components/Card'
import VistaHome from './views/VistaHome'

function App() {

  let [isLoggedIn, setIsLoggedIn] = useState(null)
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  // const vsSignosList = definitions.map((sig) => {
  //   return <Card
  //     key={sig.key}
  //     name={sig.name}
  //     dateRange={sig.dateRange}
  //     img={sig.image} />
  // })

  const handleButtonClick = () => {
    const user = document.getElementById('user').value;
    const passw = document.getElementById('pass').value;
    userValidation(user, passw) ? setIsLoggedIn(true) : setIsLoggedIn(false)
    console.log("isLoggedIn " + isLoggedIn)
    console.log("usuario " + usuario)
    console.log("password " + password)
  }


  return (
    <>
      {!isLoggedIn ? (
        <div className='containerlogin'>
          <h1 className='white-with-blue-shadow'>Horóscopo</h1>
          <h3 >Iniciar Sesión</h3>
          <input id='user' className='form-control' type="text" placeholder='Usuario...' value={usuario}
            onChange={(e) => setUsuario(e.target.value)} />
          <input id='pass' className='form-control' type="password" placeholder='Contraseña...' required="" value={password}
            onChange={(e) => setPassword(e.target.value)} />
          <button id='btnLogin' type="button" className="btn btn-info" onClick={handleButtonClick}>Ingresar</button>
        </div>
      ) : (
        // <div className='container'>{vsSignosList}</div>
      <>
      <h3 className='title'>¡Bienvenido al Horóscopo!</h3>
        <div className='container'>
          <VistaHome />
        </div>
      </>

      )}
    </>
  )
}

export default App
