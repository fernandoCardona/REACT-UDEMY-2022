//30.0-Rutas CRUD EVENTOS, Todas las rutas han de pasar la validacion del JWT
//Eventos Roures:( '/api/events' )

//30.1-Importamos router de express:
const { Router } = require('express');
const router = Router();

//30.2-IPORTMOS EL MIDDLEWARE DE VALIDACION JWT:
const { validarJWT } = require('../middlewares/validar-jwt');

//30.4-Importamos el archivo events de controllers:
const { 
    getEventos,
    crearEventos,
    actualizarEvento,
    eliminarEvento
} = require('../controllers/events');


//Obtener eventos: 
router.get('/', validarJWT, getEventos);

//Crear eventos: 
router.post('/', validarJWT, crearEventos);

//Actualizar evento: 
router.put('/:id', validarJWT, actualizarEvento);

//Actualizar evento: 
router.delete('/:id', validarJWT, eliminarEvento);


module.exports = router;