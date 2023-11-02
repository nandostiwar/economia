const mongoose = require('mongoose');

const uri = 'mongodb://127.0.0.1:27017/test';

const connectDB = async () => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Conexión a MongoDB establecida');
    } catch (error) {
        console.error('Error al conectar a MongoDB:', error);
    }
};


const userSchema = new mongoose.Schema({
    usuario: String,
    rol: Number
}, {
    collection: 'usuario' // Especifica el nombre de la colección
    // versionKey: true
});

const ventaSchema = new mongoose.Schema({
    producto: Number,
    cantidad: Number
}, {
    collection: 'venta' // Especifica el nombre de la colección
    // versionKey: true
});

const productoSchema = new mongoose.Schema({
    precio: Number,
    producto: String
}, {
    collection: 'producto' // Especifica el nombre de la colección
    // versionKey: true
});

const User = mongoose.model('User', userSchema);
const venta = mongoose.model('venta', ventaSchema);
const producto = mongoose.model('producto', productoSchema);

module.exports = { connectDB, User, venta, producto };
