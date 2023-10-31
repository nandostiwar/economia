const db = require('../db');

const getUsuarios = async (req,res)=>{
    try {
        const usuarios = await db.query("SELECT * FROM usuarios WHERE estado = true")
        res.json(usuarios.rows)
    } catch (error) {
        console.log(error.message)
    }
}

const getUsuario = async (req,res)=>{
    const {id} = req.params;
    const usuario = await db.query("SELECT * FROM usuarios WHERE usuarioid = $1 ",[id])

    if(usuario.rows.length===0){

        return  res.status(404).json({
            message:"Usuario no encontrado",
        })
    }

    res.json(usuario.rows[0])

}
const createUsuario = async (req,res)=>{
    
    try {
        const {user,role} = req.body
        const result = await db.query("INSERT INTO usuarios(usuario, rol) VALUES($1 , $2) RETURNING * ",[user,role]);
        res.json(result.rows[0])
    } catch (error) {
        res.json({error:error.message})
    }
}
const delateUsuario = async (req,res)=>{
    const {id} = req.params;
    console.log(id)
    const borrar = await db.query("UPDATE usuarios SET estado = false WHERE usuarioid = $1 ",[id])
    if(borrar.rowCount === 0){
        return res.json("usuario no encontrado");
    }
    return res.json("Se eliino correctamente")
}

module.exports = {

    getUsuarios,
    getUsuario,
    createUsuario,
    delateUsuario,

}