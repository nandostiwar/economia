import "./login.css"
import { users } from "../users";
import React, { useState } from 'react';
import Content from "./horoscopo";
import { zodiacSigns } from "../horoscopo";

console.log(users)

function Login() {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    function handleLogin() {
        const user = users.find((u) => u.username === username && u.password === password);
      
        if (user) {
          setLoggedIn(true);
        } else {
          alert('Invalid username or password');
        }
      }

      const signsList = zodiacSigns.map(sign => {
        return(
          <Content name={sign.name} date={sign.date} description={sign.description} image={sign.image}/>
        )
      })

    return (<div>
        {!loggedIn ? (
          <div className="Form">
            <h2>Login</h2>
            <form>
              {<form>
        <h3>Username</h3>
        <input
          type="text"
          placeholder="Type your username"
          className="LoginInput"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <h3>Password</h3>
        <input
          type="password"
          placeholder="Type your password"
          className="LoginInput"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button type="button" className="LoginButton" onClick={handleLogin}>
          Login
        </button>
      </form>}
            </form>
          </div>
        ) : (
          <div className="Container">
            {zodiacSigns.map((sign) => (
              <Content
                key={sign.id}
                name={sign.name}
                date={sign.date}
                description={sign.description}
                image={sign.image}
              />
            ))}
          </div>
        )}
      </div>)
}

export default Login;