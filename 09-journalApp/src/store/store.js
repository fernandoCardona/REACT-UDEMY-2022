
//7.1-Creamos el store de la aplicacion
import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth'

export const store = configureStore({
    reducer: {
        //7.5-agregamos a nuestro STORE el reducer authSlice
        auth: authSlice.reducer,
    },
})