import { useDispatch, useSelector } from "react-redux"
import { calendarApi } from "../api";
import { clearErrorMessage, handleChecking, handleLogin, handleLogOut, handleLogoutCalendar } from "../store";
 


export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector( state => state.auth );
    const dispatch = useDispatch();
    //console.log(user)

    //22.1-Creamos el Proceso de Login con la funcion startLogin que espera los argumentos de email y password:
    const startLogin = async( { email, password } ) => {
        dispatch( handleChecking )
        try {
            const { data } = await calendarApi.post('/auth',{ email, password });
            //console.log({data})
            localStorage.setItem( 'token', data.token );
            localStorage.setItem( 'token-init-date', new Date().getTime() );
            dispatch( handleLogin( { name: data.name, uid: data.uid  } ) );
        } catch (error) {
            //console.log({error})
            dispatch( handleLogOut('Credenciales incorrectas') );
            setTimeout(() => {
                dispatch( clearErrorMessage() );
            }, 10);
        }
    }
    //23.1-Creamos el Proceso de Login con la funcion startRegister que espera los argumentos de name, email y password:
    const startRegister = async( { name, email, password } ) => {
        dispatch( handleChecking )
        try {
            const { data } = await calendarApi.post('/auth/new',{ name, email, password });
            //console.log({data})
            localStorage.setItem( 'token', data.token );
            localStorage.setItem( 'token-init-date', new Date().getTime() );
            dispatch( handleLogin( { name: data.name, uid: data.uid  } ) );

        } catch (error) {
            //console.log({error})
            dispatch( handleLogOut(error.response.data?.msg || ' Error de registro') );
            setTimeout(() => {
                dispatch( clearErrorMessage() );
            }, 10);
        }
    }
    //24.1-Renew tokenLen
    const checkAuthToken = async() => {
        const token = localStorage.getItem('token');
        if( !token ) return dispatch( handleLogOut() );
        try {

            const { data } = await calendarApi.post('/auth/renew');
            localStorage.setItem( 'token', data.token );
            localStorage.setItem( 'token-init-date', new Date().getTime() );
            dispatch( handleLogin( { name: data.name, uid: data.uid  } ) );

        } catch (error) {
            localStorage.clear();
            dispatch( handleLogOut() );
        }
    }

    //25.1-Creamos la funcion startLogOut
    const startLogOut = () => {
        localStorage.clear();
        dispatch( handleLogoutCalendar() );
        dispatch( handleLogOut() );

    }


    return {
        //PROPIEDADES:
        errorMessage,
        status,
        user,
        //METHODS:
        checkAuthToken,
        startLogin,
        startLogOut,
        startRegister
    }
       
    
}
