//Importamos el objeto response de express: 
const { response } = require('express');
//IMPORTAMOS LA LIBRERIA DE JWT:
const jwt = require('jsonwebtoken');

const validarJWT = ( req, res, next ) => {

    //24.2- Helper de velidacion del JWT: va en el header( 'x-token')
    const token = req.header('x-token');

    if ( !token ) {
        
        res.status(400).json({
            ok: false,
            msg: 'No hay token disponible'
        });
    }

    try {
        const { uid, name } = jwt.verify(
            token, 
            process.env.SECRET_JWT_SEED
        );
        req.uid = uid;
        req.name = name;

        
    } catch (error) {
        
        return res.status(401).json({
            ok: false,
            msg: 'Token no valido'
        });
    }

    next();
}

module.exports = {
    validarJWT
}