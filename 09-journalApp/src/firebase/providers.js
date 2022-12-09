//9.3-Creamos el archivo provides para contener aqui todos los porveedores de auth de la app 

//9.4-Importamos de firebase/auth --> GoogleAuthProvider
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from 'firebase/auth';
import { firebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();
//9.5-creamos una funcion asincrona para llamar a la configuracion de firebase anteriro contenida en el config
export const singInWithGoogle = async() => {
    try {
        const result = await signInWithPopup( firebaseAuth, googleProvider );
        //const credentials = GoogleAuthProvider.credentialFromResult( result );
        const { displayName, email, photoURL, uid } = result.user;
        return { 
            ok: true,
            //user info
            displayName, email, photoURL, uid
        }

    } catch (error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        
        return{
            ok: false,
            errorMessage,
        }
    }
}
//12.2-creamos un nuevo provaider para madar la info de nuestro register a firebase y registrar el nuevo usuario
export const registerUserWithEmailPassword = async( { displayName, email, password } ) => {
    try {
        const resp = await createUserWithEmailAndPassword( firebaseAuth, email, password );
        const { uid, photoURL } = resp.user;
        //console.log(resp);
        //12.3-Actualizar displayName en Firebase con updateProfile
        await updateProfile(firebaseAuth.currentUser, { displayName });


        return{
            ok: true,
            uid, photoURL, displayName, email
        }

    } catch (error) {
        //console.log(error);
        return { ok: false, errorMessage: error.message }
    }
}

//14.2-funcion LoginWithEmailPassword
export const LoginWithEmailPassword = async( { email, password } ) => {
    try {
        const resp = await signInWithEmailAndPassword( firebaseAuth, email, password );
        //const credentials = GoogleAuthProvider.credentialFromResult( result );
        const { displayName, photoURL, uid } = resp.user;
        return { 
            ok: true,
            //user info
            displayName, photoURL, uid
        }
    } catch (error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        
        return{
            ok: false,
            errorMessage: error.message,
        }
    }
}
//16.2-Funcion logoutFirebase

export const logoutFirebase = async() => {
    return await firebaseAuth.signOut();
}











