import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactDOM from 'react-dom';
import Cocina from './assets/cocina/Cocina';
import Login from './assets/login/Login';
import Juego from './assets/Juego/Juego'; 


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    < Cocina/>
  </React.StrictMode>,
);


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/juego" element={<Juego />} />
        <Route path="/cocina" element={<Cocina />} />
      </Routes>
    </Router>
  );
}

export default App;