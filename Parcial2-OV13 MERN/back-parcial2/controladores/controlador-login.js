const db = require('../db');

const login = async(req,res)=>{
    try {
        const {usuario} = req.body
        const resultado = await db.query("SELECT * FROM usuarios WHERE usuario = $1 ",[usuario])
        if(usuario === resultado.rows[0].usuario){
            res.json(resultado.rows[0].rol)}
    } catch (error) {
        res.json({error:error.message})
    }
}

module.exports={
    login
}