import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from './components/login'
import './App.css'

function App() {
  

  return (
    
      <div className='box'>
        <Login user_placeholder="Usuario" password_placeholder="Contraseña"/>
      </div>
       
  )
}

export default App
