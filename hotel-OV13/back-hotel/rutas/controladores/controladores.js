const fs = require('fs/promises');
const path = require('path');

const getHabitaciones = async(req,res)=>{
    const habi = await fs.readFile(path.join(__dirname,'../../db/datos.json'));
    const habiJson = JSON.parse(habi);
    res.json(habiJson);
}
const editarEstado = async(req,res)=>{
    const habitacionSelect = req.params.habitacion;
    const {texto} = req.body;
    const habi = await fs.readFile(path.join(__dirname,'../../db/datos.json'));
    const habiJson = JSON.parse(habi);

    habiJson[habitacionSelect].estado = texto

    //console.log("El objeto a editar es este: ", editar){}
    await fs.writeFile(path.join(__dirname,'../../db/datos.json'),JSON.stringify(habiJson,null,2),{encoding:'utf-8'})
}

module.exports={
    getHabitaciones,
    editarEstado
}