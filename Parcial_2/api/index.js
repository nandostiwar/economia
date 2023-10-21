const express = require('express');
const cors = require('cors');
const productosRoutes = require('./routes/productos');
const ventasRoutes = require('./routes/ventas');
const usuariosRoutes = require('./routes/usuarios');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.use('/api/productos', productosRoutes);
app.use('/api/ventas', ventasRoutes);
app.use('/api/usuarios', usuariosRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
