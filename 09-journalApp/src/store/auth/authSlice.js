import { StarRateTwoTone } from '@mui/icons-material';
import { createSlice } from '@reduxjs/toolkit';
//7.2-Creamos el authSlice para la autentificacion
//7.3-Definimos el initialState con los 3 estados que queremos en la aplicacion: 'checking', 'not-authhenticated', 'authenticated'
//7.4-Creamos las acciones que vamos a ejecutar login, logout, checkingCredentials. Y las exportamos !!!


export const authSlice = createSlice({
      name: 'auth',
      initialState: {
            status: 'checking', // 'checking','not-authhenticated', 'authenticated'
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: null,
      },

      reducers: {
         login: ( state, { payload } ) => {
            state.status = 'authenticated'; 
            state.email = payload.email;
            state.uid = payload.uid;
            state.displayName = payload.displayName;
            state.photoURL = payload.photoURL;
            state.errorMessage = null;
         },
         logout: ( state, { payload } ) => {
            state.status = 'not-authenticated'; 
            state.uid = null;
            state.email = null;
            state.displayName = null;
            state.photoURL = null;
            state.errorMessage = payload?.errorMessage;
         },
         checkingCredentials: ( state ) => {
            //8.5- con esta funcion definimos el estado inicial a checking en el State.
            state.status = 'checking'
         }
      }
});


// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;