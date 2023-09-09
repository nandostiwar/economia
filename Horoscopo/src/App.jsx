import Login from './componets/login';
import Home from './componets/home';
import React, { useState } from "react";
import './App.css'

function App() {  

  const [user, setUser] = useState([]);

  return (
    <div className="App">
      {
        !user.length > 0
        ?<Login setUser={setUser}/>
        :<Home user={user}/>
      }
    </div>
  );
}

export default App
