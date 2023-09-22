import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cocina from './assets/cocina/Cocina';
import Login from './assets/login/Login';
import Juego from './assets/Juego/Juego'; 


function Main() {
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

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);