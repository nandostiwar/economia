import React, { useState } from 'react'
import './login.css'
import usuario from '../data/Usuarios'


function Login() {
  
   const [user,setUser] = useState("")
   const [password,setPassword] = useState("")

  const handletSubmit = (e)=>{
    e.preventDefault()
    const validar = (user,password)=>{
      const users = usuario.find(users => user === users.user)
      if(typeof users !== 'undefined'){
        return users.password === password
      }return false
    }

    if(validar(user,password)===false){
      console.log("perro")
      return window.location.href = "/"
    }
    const check = (user)=>{
      const v = usuario.find(v => user===v.user)
      if(v.rol==="admin"){
        return true
      }
      
    }
    if(check(user)===true){
      return window.location.href = "/admin-view"
    }

    return window.location.href = "/home"
  }
  
  
  return (
    <div className='login-container'>
      <form className='login' onSubmit={handletSubmit}>
        <div>
          
          <h2>Inicio de sesión</h2>
          
          <div id='datoLog'>
            <p>Usuario*</p>
            <input type="text" value={user} onChange={e=>setUser(e.target.value)}/>
            <p>Contraseña*</p>
            <input type="password"  value={password} onChange={e=>setPassword(e.target.value)} />
          </div>
          <button type="submit" id='btnLogin'>Login</button>
      </div>
      </form>
    </div>
  )
}

export default Login