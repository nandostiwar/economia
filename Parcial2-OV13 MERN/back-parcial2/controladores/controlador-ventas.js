const { json } = require('express');
const db = require('../db');

const getOpciones = async (req,res)=>{
    try {
        const opciones = await db.query("select producto from productos where estado = true")
        res.json(opciones.rows)
    } catch (error) {
        console.log(error.message)
    }
}
const creteVenta = async(req,res)=>{
    try {
        const {producto, cantidad} = req.body
        const venta = await db.query("INSERT INTO ventas(producto,cantidad) VALUES($1,$2) RETURNING *",[producto,cantidad])
        res.json(venta.rows[0])
    } catch (error) {
        console.log(error.message)
    }
}
const getTotal = async(req,res)=>{
    const consulta = await db.query(`SELECT ventas.producto, SUM(ventas.cantidad) as cantidad_vendida, SUM(ventas.cantidad * productos.precio) as total_ventas
    FROM ventas
    INNER JOIN productos ON ventas.producto = productos.producto
    GROUP BY ventas.producto;`)
    res.json(consulta.rows)
}
const getTotalVentas = async(req,res)=>{
    const consulta =await db.query(`SELECT SUM(ventas.cantidad * productos.precio) as total FROM ventas 
    INNER JOIN productos ON ventas.producto = productos.producto`)
    res.json(consulta.rows[0])
}

module.exports = {
    getOpciones,
    creteVenta,
    getTotal,
    getTotalVentas
}