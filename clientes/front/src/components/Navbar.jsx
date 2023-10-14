import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="nav-item">Crear Cliente</Link>
      <Link to="/listar" className="nav-item">Listar Clientes</Link>
    </div>
  );
};

export default Navbar;
