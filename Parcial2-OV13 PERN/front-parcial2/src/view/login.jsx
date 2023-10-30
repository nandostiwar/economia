import React, { useState } from 'react';
function Login() {

    const [usuario,setUsuario]=useState("")
    const [login,setLogin]=useState()

    const btnLog = ()=>{
        
        if(usuario===""){
            alert("Llenar todos los campos")
        }else{
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ "usuario": usuario}) 
              };
            fetch(`http://localhost:3000/login`, requestOptions)
            .then(response => {
                    return response.json();
                })
            .then(ResponseData=>{
                    setLogin(ResponseData)
            })
            .catch(error => {
                    console.error('Error:', error);
                });
            switch (login) {
                case "mesero":
                    window.location.href = "/restaurante"
                    break;
                case "admin":
                    window.location.href = "/admin"
                    break;
                default:
                    alert("El usuario no esta registrado")
                    break;
            }
        }
        
    }
    

  return (
    <div className="container mt-5">
    <div className="row justify-content-center">
        <div className="col-md-6">
            <h1>Iniciar sesión</h1>
            <h4>Usuario: </h4>
            <input
                type="text"
                className="form-control"
                onChange={e => setUsuario(e.target.value)}
                value={usuario}
            />
            <br />
            <button type="button" className="btn btn-primary" onClick={btnLog}>
                Login
            </button>
        </div>
    </div>
</div>
  )
}

export default Login