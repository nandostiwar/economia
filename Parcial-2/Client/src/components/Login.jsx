import React, { useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './login.css'

function Login() {

    const [user,setUser] = useState("");
    const [accounts,setAccounts] = useState([]);
    const navigate = useNavigate();
    let update = true;
    

    useEffect(()=>
    {
        console.log("ejecutando");
      fetch('http://localhost:5000/users')
      .then(response => response.json()) //lo convierto en JS
      .then(data => {
        setAccounts(data);
        console.log(accounts);
        update = false;}) //lo guardo en el array   
      .catch(error => console.error('no funca', error));


    },[update]);

    const handleChange = async(e) =>
    {

        setUser(e.target.value);
    }

    const handleSubmit = async (e) =>
    {
       e.preventDefault();
       update = true
       console.log(accounts)
       console.log(user)
       let loginID = accounts.find(account=>account.username === user);
       console.log(loginID);
       if(loginID)
        {
            console.log("si estás")
            if(loginID.user_role == "Admin")
            {
                //NAVEGA AL DASHBOARD DEL ADMIN
                console.log("Admin")
                navigate("/Admin");
            }
            else
            {
                //NAVEGA AL DASHBOARD DEL MESERO
                console.log("Mesero")
                navigate("/Waiter")
            }
        
        }
 else {

        console.log("Usuario no encontrado");
        alert("Este usuario no existe");
      }
    }

  return (
    <div className='log'>
        
        <form onSubmit={handleSubmit}>
            <label>Inicio de sesión</label>
            <p></p>
            <input onChange={handleChange} className='text' type='text' placeholder='Nombre de usuario'></input>
            <p></p>
            <button type='submit'>Entrar</button>
        </form>

    </div>
  )
}

export default Login