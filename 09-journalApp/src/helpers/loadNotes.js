//importaciones de FireStore
import { collection, getDocs } from 'firebase/firestore/lite';
import { firebaseDB } from '../firebase/config';
 


//18.3-Creamos un helper para extraer las notes con una funcion asyncrona
export const loadnotes = async( uid = '' ) => {
    if( !uid ) throw new Error( 'El uid del usuario no existe' );

    //18.3.1-Creamos la referencia a la coleccion que necesitamos en firebase
    const collectionRef = collection( firebaseDB, `${ uid }/journal/notes` );
    const docs = await getDocs( collectionRef );
    //console.log( docs)
    //Hacemos un foreach de docs para extraer la data de cada documento
    const notes = []
    docs.forEach( doc => {
            notes.push( { id: doc.id, ...doc.data() } );
    })
    //console.log(notes);
    return notes;
}