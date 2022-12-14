//1.6-IMPORTACION DE EXPRESS EL ROUTER:
const { Router } = require('express');
const router = Router();
//1.8.1-IMPORTAMOS LOS CONTROLLERS DE ('./controllers/auth'):
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');
//1.9.0-Importaamos express-validator
const { check } = require('express-validator');
//Importamos middleware 'validarCampos'
const { validarCampos } = require('../middlewares/validar-campos');
//Importamos middleware 'validarJWT'
const { validarJWT } = require('../middlewares/validar-jwt');

//1.7-RUTAS de USUARIO AUTH ( 'host+/api/auth/' ):

    //Ruta crearUsuario
    router.post(
        '/new',
        [   
            //1.9.1-Validation middelwares from express-validator
            check('name', 'El nombre es obligatorio.').not().isEmpty(),
            check('email', 'El email es obligatorio.').isEmail(),
            check('password', 'El password debe tener 6 caracteres').isLength({ min: 6 }),
            validarCampos

        ],
        crearUsuario 
    );

    //Ruta loginUsuario
    router.post(
        '/', 
        [
            //1.9.1-Validation middelwares from express-validator
            check('email', 'El email es obligatorio.').isEmail(),
            check('password', 'El password debe tener 6 caracteres').isLength({ min: 6 }),
            validarCampos
        ],
        loginUsuario 
    );

    //Ruta revalidarToken
    router.get('/renew',validarJWT , revalidarToken );


module.exports = router;