const { response, request } = require ('express');

const usuariosGet = (req=request, res=response) => {

    const {query} = req.query;

    res.json({
        msg: 'Get Api'
    });
}

const usuariosPost = (req, res=response) => {

    const {nombre, edad} = req.body;

    res.status(201).json({
        msg: 'post Api',
        nombre,
        edad
    });
}

const usuariosPut = (req, res=response) => {
    
    const { id } = req.params;
    
    res.json({
        msg: 'put Api',
        id
    });
}

const usuariosPatch = (req, res=response) => {
    res.json({
        msg: 'Patch Api'
    });
}

const usuariosDelete = (req, res=response) => {
    res.json({
        msg: 'delete Api'
    });
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}
