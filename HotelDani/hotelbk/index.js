const express = require('express');
const cors = require('cors');
const habitacionRoutes = require('./routes/habitaciones');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.use('/api/habitaciones', habitacionRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
