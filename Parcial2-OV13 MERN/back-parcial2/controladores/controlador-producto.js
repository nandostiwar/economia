const db = require('../db');

const getProductos = async (req,res)=>{
    try {
        const producto = await db.query("SELECT * FROM productos WHERE estado = true")
        res.json(producto.rows)
    } catch (error) {
        console.log(error.message)
    }
}


const createProducto = async (req,res)=>{
    try {
        const {producto,precio} = req.body
        const result = await db.query("INSERT INTO productos(producto, precio) VALUES($1 , $2) RETURNING * ",[producto,precio]);
        res.json(result.rows[0])
        console.log(producto, precio)
    } catch (error) {
        res.json({error:error.message})
    }
}

const delateProducto = async (req,res)=>{
    const {id} = req.params;
    console.log(id)
    const borrar = await db.query("UPDATE productos SET estado = false WHERE productoid = $1 ",[id])
    if(borrar.rowCount === 0){
        return res.json("Producto no encontrado");
    }
    return res.json("Se elimino correctamente")
}

module.exports = {
    getProductos,
    createProducto,
    delateProducto,
}