// MIDDLEWARE DE VALIDACION
//IMPORTACION DE EXPRESS: desestructuramos la 'response'
const { response } = require('express');

//1.9.0-Importaamos express-validator manejo de errores:
const { validationResult } = require('express-validator');

const validarCampos = (req, res = response, next) => {

    //1.9.2-Manejo de errores de 'express-validator' de la response:
    //console.log(errors)
    const errors = validationResult( req );
    if ( !errors.isEmpty() ) {
        return res.status(400).json({ 
            ok: false,
            errors: errors.mapped()
        });
    }
   
    next();

}

module.exports = {
    validarCampos
}







