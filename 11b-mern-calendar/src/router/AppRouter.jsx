//Importaciones de React:
import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
//Importaciones de Terceros:

//Importaciones de la App:
import { LoginPage } from "../auth";
import { CalendarPage } from "../calendar";
import { getEnvVariables } from "../helpers";
import { useAuthStore } from "../hooks";
//18.0- IMPORTAMOS LA FUNCION 'getEnvVariables' de los helpers:



export const AppRouter = () => {
    //1.0-Creacion del router y validacion del estatus del mismo:
    //const authStatus = 'not-authenticated'; // 'checking', 'not-authenticated'

    //18.0- Usamos 'getEnvVariables' para traernos las va:
    //console.log( getEnvVariables() )

    //24.2-Llamamos a la funcion checkAuthToken para renovar el token:
    useEffect(() => {
        checkAuthToken();
    }, []);
    const { status, checkAuthToken } = useAuthStore();
    if( status === 'checking' ) {
        return (
            <h3>Cargando...</h3>
        )
    }
    return (
        //1.1-Con un condicional ternario mostramos una ruta o otra
        <Routes>
            {
                (status === 'not-authenticated')
                ? (
                    <>
                        <Route path='/auth/*' element={ <LoginPage />} />
                        <Route path='/*' element={ <Navigate to='/auth/login'/>} />
                    </>
                )
                : 
                (
                    <>
                        <Route path='/' element={ <CalendarPage />} />
                        <Route path='/*' element={ <Navigate to='/'/>} />
                    </>
                )
            }  

            
        </Routes>
    )
}
