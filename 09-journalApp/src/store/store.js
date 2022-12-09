
//7.1-Creamos el store de la aplicacion
import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth'
import { journalSlice } from './journal'

export const store = configureStore({
    reducer: {
        //7.5-agregamos a nuestro STORE el reducer authSlice
        auth: authSlice.reducer,
        //17.3-agregamos a nuestro STORE el reducer journalSlice
        journal: journalSlice.reducer,
    },
})