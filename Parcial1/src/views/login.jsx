import React, { useState } from 'react'
import "./login.css"


function Login() {
    const [user,setUser] = useState("")
    const [password,setPassword] = useState("")

    const usuario=[{
        user:"juego",
        password:"juego123"
    },
    {
        user:"cocina",
        password:"cocina123"
    }];
    
    const handletSubmit = (e)=>{
        e.preventDefault()
        const validar = (user,password)=>{
          const users = usuario.find(users => user === users.user)
          if(typeof users !== 'undefined'){
            return users.password === password
          }return false
        }
    
        if(validar(user,password)===false){
          return window.location.href = "/"
        }
        const check = (user)=>{
          const v = usuario.find(v => user===v.user)
          if(v.user==="cocina"){
            return true
          }
          
        }
        if(check(user)===true){
          return window.location.href = "/cocina"
        }
    
        return window.location.href = "/juego"
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