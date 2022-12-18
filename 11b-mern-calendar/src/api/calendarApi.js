//IMPORTAMOS AXIOS:
import axios from 'axios';

//IMPORTAMOS VARIABLES DE ENTORNO:
import { getEnvVariables } from '../helpers';

const { VITE_API_URL } = getEnvVariables();
 
//21.1-Creamos la funcion 'calendarApi' 
const calendarApi = axios.create({
    baseURL: VITE_API_URL
});

//CONFIGURAR INTERCEPTORES: (nos permiten interceptar las peticiones al backend o las resp)
calendarApi.interceptors.request.use( config => {

    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token')
    }

    return config;
})
;


export default calendarApi;