const mongoose = require('mongoose');
const { connectDB } = require('../conexion/conexion.js'); // Importa el módulo de conexión

connectDB(); // Llama a la función para establecer la conexión

const producto = mongoose.model('producto'); 

//Funcion que crea los PRODUCTOS
const createProducto = async (req, res) => {
    const { nombre, precio } = req.body;    

    try {
        const newProducto = new producto({ precio, producto:nombre });
        await newProducto.save();

        res.json({
            message: 'Producto creado con éxito',
            status: 'ok',
            body: {
                producto: newProducto
            }
        });
    } catch (error) {
        console.error("Error al agregar el usuario:", error);
        res.status(500).json({ error: "Error al agregar un producto" });
    }
};

//consulta los PRODUCTOS en la base de datos
const getProduAll = async (req, res) => {
    try {
        const prod = await producto.find({});
        if (prod.length > 0) {
            res.status(200).json(prod);
        } else {
            res.status(404).json({ error: "No se encontraron productos" });
        }
    } catch (error) {
        console.error("Error en la consulta a la base de datos:", error);
        res.status(500).json({ error: "Error en la consulta a la base de datos" });
    }
};

//Funcion que elimina PRODUCTOS
const deleteProduc = async (req, res) => {
    
    const id = req.params.id; // El ID del producto que deseas eliminar

    try {
        const result = await producto.deleteOne({ _id: id });

        if (result.deletedCount > 0) {
            res.json({
                estado: 'ok',
                mensaje: `El Producto con ID: ${id} se eliminó correctamente.`
            });
        } else {
            res.status(404).json(`No se encontró ningún producto con el ID: ${id}`);
        }
    } catch (error) {
        console.error("Error al eliminar el producto:", error);
        res.status(500).json({ error: "Error al eliminar el producto" });
    }
};

module.exports = {
    createProducto,
    getProduAll,
    deleteProduc
};