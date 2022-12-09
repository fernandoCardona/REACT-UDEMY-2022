import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';

import { firebaseAuth } from '../firebase/config';
import { login, logout } from '../store/auth';
import { startLoadingNotes } from '../store/journal';



export const useCheckAuth = () => {
  
    const { status } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    //15.2-Creamos un custom hook y utilizamos useEffect para detectar cuando el estado de nuestra authentificacion cambie a traves de la funcion 'onAuthStateChange' de firebase.
    useEffect(() => {
        
        onAuthStateChanged( firebaseAuth, async( user ) => {
            if ( !user ) return dispatch( logout() );

            const { uid, email, displayName, photoURL } = user;
            dispatch( login({ uid, email, displayName, photoURL }) );
            
            //18.2-disparamos la funcion
            dispatch( startLoadingNotes() );
        })
        
    }, []);

    return status;
}