//30.0-Rutas CRUD EVENTOS, Todas las rutas han de pasar la validacion del JWT
//Eventos Roures:( '/api/events' )

//30.1-Importamos router de express:
const { Router } = require('express');
const router = Router();
//32.1-Importaamos express-validator
const { check } = require('express-validator');
//32.2.1-Importamos middleware 'validarCampos'
const { validarCampos } = require('../middlewares/validar-campos');
//32.2.2-Importamos helper 'isDate'
const { isDate } = require('../helpers/isDate');

//30.2-IPORTMOS EL MIDDLEWARE DE VALIDACION JWT:
const { validarJWT } = require('../middlewares/validar-jwt');

//30.4-Importamos el archivo events de controllers:
const { 
    getEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento
} = require('../controllers/events');


//Obtener eventos: 
router.get('/', validarJWT, getEventos);

//Crear eventos: 
router.post('/', validarJWT,
    [
        //32.2-Validation middelwares from express-validator
        check('title','El titulo es obligatorio').not().isEmpty(),
        check('start','Fecha de inicio es obligatoria').custom( isDate ),
        check('end','Fecha de finalización es obligatoria').custom( isDate ),
        validarCampos
    ],
    crearEvento);

//Actualizar evento: 
router.put('/:id', validarJWT, 
    [
        check('title','El titulo es obligatorio').not().isEmpty(),
        check('start','Fecha de inicio es obligatoria').custom( isDate ),
        check('end','Fecha de finalización es obligatoria').custom( isDate ),
        validarCampos
    ], 
    actualizarEvento);

//Actualizar evento: 
router.delete('/:id', validarJWT, eliminarEvento);


module.exports = router;