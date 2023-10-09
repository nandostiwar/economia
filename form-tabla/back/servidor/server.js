const express = require('express');
const fs = require('fs');
const app = express();
const port = 3001;
const bodyParser = require('body-parser'); 

const cors = require('cors');

const path = require('path')

const JSONPath = path.join(__dirname, '..', 'db', 'clientes.json') //establezco la ruta como variable

app.use(bodyParser.json());
app.use(cors());

app.use(express.json());



app.get('/obtener-clientes', (req, res) => {
    try {
      // Lee el archivo JSON y convierte su contenido en un objeto JavaScript
      const jsonContent = fs.readFileSync(JSONPath, 'utf8');
      const clientes = JSON.parse(jsonContent); //convierto a JS
  
      // Envía los datos como respuesta
      res.json(clientes);
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error al obtener los clientes' });
    }
  });
  





app.post('/up', (req, res) => {
    try {
      const nuevoCliente = req.body; // Los datos enviados por el cliente en la solicitud POST
  
      // Leer los datos actuales del archivo JSON
      const data = fs.readFileSync(JSONPath, 'utf8')
      const datosActuales = JSON.parse(data);
        
      // Agregar el nuevo dato al arreglo existente
      datosActuales.push(nuevoCliente);
       
      // Escribir los datos actualizados en el archivo JSON
      const jsonString = JSON.stringify(datosActuales, null, 5);
      fs.writeFileSync(JSONPath, jsonString);

  
      res.json({ mensaje: 'Dato agregado con éxito' });
    } catch (error) {
      console.error("no funca", error);
      res.status(500).json({ mensaje: 'Error al agregar el dato' });
    }
  });

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor Express corriendo en el puerto ${port}`);
});
