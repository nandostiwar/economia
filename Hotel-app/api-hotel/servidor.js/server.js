const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.get('/habitaciones', (req, res) => {

    try {
        
      const jsonContent = fs.readFileSync('../db/habitaciones.json', 'utf8');
      const clientes = JSON.parse(jsonContent).habitaciones;
     
      res.json(clientes)

  

    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al obtener los clientes' });
    }
});


app.post('/cambiarEstado', (req, res) => {

    try {
        
const habitacionNum = req.body.habitacionNum; //la consulta

const data = fs.readFileSync('../db/habitaciones.json', 'utf-8'); //leo el archivo JSON actual

const habitaciones = JSON.parse(data).habitaciones;//transformo la lectura en un objeto JS
console.log('Contenido de data:', habitaciones);
const habitacion = habitaciones.find(h => h.numero === habitacionNum); //si en el array habitaciones para cada objeto
                                                                       // su atributi numero es igual a la consulta guarda dicho objeto en esta var

if(habitacion)
{
    habitacion.status = habitacion.status === 'Libre' ? 'Ocupado' : 'Libre';
    habitacion.color = habitacion.color === 'Green' ? 'Red' : 'Green'

    fs.writeFileSync('../db/habitaciones.json', JSON.stringify({ habitaciones }));

    res.json({ success: true, message: 'Estado cambiado exitosamente.'});

}
else
{
    res.status(404).json({success: false, message: 'Habitación no encontrada.'});
}   
    } catch (error) {
        console.error('Error en la solicitud POST /cambiarEstado:', error); // Agrega esta línea
        res.status(500).json({ success: false, message: 'Error interno del servidor' }); // En caso de error interno
 
    }


});

app.listen(port,() =>
{
    console.log(`Servidor en el puerto ${port}`)
})