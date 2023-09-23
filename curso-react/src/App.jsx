import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';
import './App.css';
import LoginForm from './LoginForm';
import Ruta from './Ruta';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [redirectPath, setRedirectPath] = useState(null);

  const handleLogin = (path) => {
    setLoggedIn(true);
    setRedirectPath(path);
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={!loggedIn ? <LoginForm onLogin={handleLogin} /> : <Navigate to={redirectPath || '/'} />} />
        <Route path="/*" element={<Ruta />} />
      </Routes>
    </Router>
  );
}

export default App;
