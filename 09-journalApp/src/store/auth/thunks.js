import { singInWithGoogle } from "../../firebase/providers";
import { checkingCredentials } from "./authSlice";

//8.4-Creamos una funcion asincrona en el thunk de store/auth que recoge el email y el password como argumentos.
export const checkingAuthentication = ( email, password ) => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() );
    }
}


//8.4.1-Creamos una funcion asincrona en el thunk de store/auth que recoge las credenciales de Google.
export const startGoogleSingIn = () => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() );
        //10.1-llamamos a la funcion singInWithGoogle de nuestro provider de la carpeta firebase 
        const result = await singInWithGoogle();
        console.log({result})
    }
}