//importaciones de FireStore
import { doc, collection, setDoc, deleteDoc } from 'firebase/firestore/lite';
import { firebaseDB } from '../../firebase/config';
import { fileUpload } from '../../helpers';
import { loadnotes } from '../../helpers/loadNotes';
//importaciones de app
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes, setSaving, updateNote, setPhotosToActiveNote, deleteNoteById } from './journalSlice';




//17.2-Creamos los thunks para JournalSlice para acciones asyncronas  

export const startNewNote = () => {
    return async( dispatch, getState ) => {
        //17.3.3-Deshabilitamos el btn de crear nueva nota por un momento para evitar duclicidades
        dispatch( savingNewNote() );
        //17.2.1-Obtenemos el uid del usuario atraves de la funcion 'getState().auth' y lo desestructuramos
        const { uid } = getState().auth;  
        //Estructura de la 'newNote' que vamos a insertar 
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),

        }
        // Creamos referencia al document 'newDoc'
        const newDoc = doc( collection( firebaseDB, `${uid}/journal/notes` ) );
        const setDocResp = await setDoc( newDoc, newNote);
        //console.log({newDoc, setDocResp});
        newNote.id = newDoc.id;
        //17.2.2-Hacemos el dispatch( addNewEmptyNote( newNote ) ) como payload newNote
        dispatch( addNewEmptyNote( newNote ) );
        dispatch( setActiveNote( newNote ) );
        
        
        //17.2.4-Hacemos el dispatch( activarNote )

    }
}

//18.1-Carga de tareas desde Firebase recibiendo el uid del usuario 
export const startLoadingNotes = () => {
    return async( dispatch, getState ) => {
        const { uid } = getState().auth;
        if( !uid ) throw new Error( 'El uid del usuario no existe' );

        //Llamamos al helper 'loadnotes' para traernos las notas de la coleccion de firebase
        const notes = await loadnotes( uid );
         
        dispatch( setNotes( notes ) );
    }
}

 //19.5-creamos la funcion 'startSavingNote' para guardar los cambios de una note en firebase

 export const startSavingNote = () => {
    return async(dispatch, getState) => {
        dispatch( setSaving() );
        //19.5.1-Creamos el url que nos lleve a la noe que queremos actualizar 
        //obtenemos el uid del usuario
        const { uid } = getState().auth;
        //obtenemos la nota activa
        const { active:note } = getState().journal
        //borramos el id de la nota activa
        const noteToFireStore = { ...note };
        delete noteToFireStore.id
        //Hacemos referencia al documento que queremos actualizar
        const docRef = doc( firebaseDB, `${uid}/journal/notes/${note.id}` );
        await setDoc( docRef, noteToFireStore, { merge:true } );
        //hacemos el dispatch de 'updateNote' para actualizar el contenido de la nota en la app
        dispatch( updateNote( note ) );
    }
}

//21.2-creamos la funcion 'startUploadingFiles' que recibe un arreglo de archivos 

export const startUploadingFiles = ( files = [] ) => {
    return async(dispatch ) => {
        dispatch( setSaving() );
        //llamamos al heplper de subida de archivos 'fileUpload.js'
        //subir un solo archivo
        //await fileUpload(files[0]);
        //Subir varios archivos a la vez
        const fileUploadPromises = [];
        for (const file of files) {
            fileUploadPromises.push( fileUpload( file ) );
        }
        const photosUrls = await Promise.all( fileUploadPromises );
        dispatch( setPhotosToActiveNote( photosUrls ) );
    }
}

//22.2-Creamos la funcion 'startDeletindNote' para borrar una nota de nuestra app

export const startDeletingdNote = () => {
    return async(dispatch, getState ) => {
        //obtenemos uid
        const { uid } = getState().auth;
        //obtenemos la nota activa
        const { active:note } = getState().journal
        // Creamos referencia al document 'docRef'
        const docRef = doc( firebaseDB, `${uid}/journal/notes/${note.id}` );
        await deleteDoc( docRef );
        //Limpiamos del arreglo de notas con del Store 
        dispatch( deleteNoteById( note.id ) );
    }
}