import { createSlice } from '@reduxjs/toolkit';
//19.0-Creamos el slice 'authslice' y lo implementamos en el Store:

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking', // 'authenticated', 'not-authenticated'
        user: {},
        errorMessage: undefined,
    },
    reducers: {
        handleChecking: ( state ) => {
            state.status = 'checking'; 
            state.user ={};
            state.errorMessage = undefined;
        },
        handleLogin:( state, { payload } ) => {
            state.status = 'authenticated';
            state.user = payload;
            state.errorMessage = undefined;
        },
        handleLogOut:( state, { payload } ) => {
            state.status = 'not-authenticated'; 
            state.user ={};
            state.errorMessage = payload;
        },
        clearErrorMessage:( state ) => {
            state.errorMessage = undefined;
        }
    }
});


// Action creators are generated for each case reducer function
export const { handleChecking, handleLogin, handleLogOut, clearErrorMessage } = authSlice.actions;