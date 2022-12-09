import { createSlice } from '@reduxjs/toolkit';

//17.1-Creamos nuestro JournalSlice
export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved:'',
        notes: [],
        active: null
        // active: {
        //     id:'ABC123',
        //     title: '',
        //     body: '',
        //     date:1234567,
        //     imageUrls: [], //https://foto1.jpg, https://foto2.jpg
        // }
    },
    reducers: {
        
    //Acciones sincronas que vaamos a necesitar:
        //savingNewNote: pasamos is saving a estado activo
        savingNewNote: ( state ) => {
            state.isSaving = true;
        },
        //addNewEmptyNote:Agregar una nota vacia
        addNewEmptyNote: ( state, action ) => {
            state.notes.push( action.payload );
            state.isSaving = false;
        },
        //setActiveNote:Cargar la nota activa
        setActiveNote: ( state, action ) => {
            state.active = action.payload;
            state.messageSaved = '';
        },
        //setNotes:Cargar las notas
        setNotes: ( state, action ) => {
            state.notes = action.payload;
        },
        //setSaving: guardamos las notas
        setSaving: ( state, ) => {
            state.isSaving = true;
            state.messageSaved = '';
            //Mensaje de error
        },
        //updateNote:Actualizamos una notam guardada en la app
        updateNote: ( state, action ) => {
            state.isSaving = false;
            state.notes = state.notes.map( note => { 
                if( note.id === action.payload.id ) {
                    return action.payload;
                }
                return note;
            });
            //Mostrar mensaje de actualizacion
            state.messageSaved = `${action.payload.title}, actualizada correctamente.`;
        },
        //setPhotosToActiveNote: Agrega images a la nota activa
        setPhotosToActiveNote: ( state, action) => {
            state.active.imageUrls = [ ...state.active.imageUrls, ...action.payload ];
            state.isSaving = false;
        },
        //clearNotesLogout: Limpiar nota al hacer logout
        clearNotesLogout: ( state ) => {
            state.isSaving = false;
            state.messageSaved = '';
            state.notes = [];
            state.active = null;

        },
        //deleteNoteById:Eliminamos una nota
        deleteNoteById: ( state, action) => {
            state.active = null;
            state.notes = state.notes.filter( note => note.id !== action.payload)
        },

    }
});


// Action creators are generated for each case reducer function
export const { 
    addNewEmptyNote,
    clearNotesLogout,
    deleteNoteById,
    savingNewNote,
    setActiveNote,
    setNotes,
    setPhotosToActiveNote,
    setSaving,
    updateNote,
} = journalSlice.actions;