const fs = require('fs/promises')
const path = require('path')

/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

/** Obtener todas las habitaciones */
const getClientes = async (req, res) => {
  const clientes = await fs.readFile(path.join(__dirname, './data/clientes.json'))
  const clientesJSON = JSON.parse(clientes)
  res.json(clientesJSON)
}

const regisCliente = async (req, res) => {
    try {
      const { body } = req;
      const { id, nombre, edad, correo } = body;
  
      // Lee el archivo clientes.json para obtener la lista actual de clientes
      const clientesList = await fs.readFile(path.join(__dirname, './data/clientes.json'), 'utf-8');
      const clientesData = JSON.parse(clientesList);
  
      // Crea un nuevo objeto para el cliente
      const nuevoCliente = {
        id,
        nombre,
        edad,
        correo,
      };
  
      // Agrega el nuevo cliente a la lista
      clientesData.clientes.push(nuevoCliente);
  
      // Escribe la lista actualizada en el archivo clientes.json
      await fs.writeFile(path.join(__dirname, './data/clientes.json'), JSON.stringify(clientesData, null, 2), 'utf-8');
  
      res.json({
        message: '✅ Registro creado exitosamente',
      });
    } catch (error) {
      console.error('❌ Error al registrar el cliente:', error);
      res.status(500).json({
        message: '❌ Error al registrar el cliente',
      });
    }
  };

module.exports = {
  regisCliente,
  getClientes}
