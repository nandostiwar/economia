import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import CrearCliente from './pages/CrearCliente';
import ListarClientes from './pages/ListarClientes';
import Navbar from './components/Navbar';  

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />  {}
        <Routes>
          <Route index element={<CrearCliente />} />
          <Route path="/listar" element={<ListarClientes />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
