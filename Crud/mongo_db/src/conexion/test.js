const { connectDB } = require('./conexion.js');

async function testConnection() {
  try {
    await connectDB();
    console.log('Conexión exitosa');
  } catch (error) {
    console.error('Error de conexión:', error);
  }
}

testConnection();
