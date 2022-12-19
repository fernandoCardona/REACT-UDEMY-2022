



export const getEnvVariables = () => {

    //17.0-Importamos nuestras variables de entorno:
    //import.meta.env;

    return {
        //...import.meta.env
        VITE_API_URL: import.meta.env.VITE_API_URL
    }
}

//export default getEnvVariables;
