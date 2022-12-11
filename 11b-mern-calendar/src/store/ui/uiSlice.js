//Importaciones de React:
import { createSlice } from '@reduxjs/toolkit';

//Importaciones de Terceros:

//Importaciones de la App:



export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isDateModalOpen: false
    },
    reducers: {
        //Accion de Modal abierto
        handleOpenDateModal: (state, /* action */ ) => {
            state.isDateModalOpen = true;
        },
        //Accion de Modal cerrado
        handleCloseDateModal: (state, /* action */ ) => {
            state.isDateModalOpen = false;
        },
    }
});


// Action creators are generated for each case reducer function
export const { handleOpenDateModal, handleCloseDateModal } = uiSlice.actions;