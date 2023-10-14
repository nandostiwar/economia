const express = require('express');
const cors = require('cors');
const clienteRoutes = require('./routes/clientes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/clientes', clienteRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});