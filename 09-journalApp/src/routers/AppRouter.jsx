import { useEffect } from "react";
import { useSelector } from "react-redux";
import {
    Routes,
    Route,
    Link,
    Navigate
  } from "react-router-dom";

import { AuthRoutes } from "../auth/routes/AuthRoutes";
 
import { useCheckAuth } from "../hooks/useCheckAuth";
import { JournalRoutes } from "../journal/routes/JournalRoutes";
import { CheckingAuth } from "../ui";

//1.1-Creamos el componente de rutas PRINCIPAL AppRouter + estructura de carpetas del proyecto
export const AppRouter = () => {
 
    //15.3-Utilizamos el customHook 'useCheckAuth' para detectar cuando el estado de nuestra authentificacion cambie a traves de la funcion 'onAuthStateChange' de firebase.
    const status = useCheckAuth();
    


    //15.2-Con useSelector comprobamos el estado del auth y mostramos elcomponente Cheking
    
    if( status === 'checking' ){
        return <CheckingAuth/>
    }

    return (
        <>
            {/* 1.2- Contenedor de rutas principal Routes */}
            <Routes>
                {/* 15.4- logica condicional para proteger las rutas de authentificacion de usuarios que sustituyen a las rutasbasicas anyterioreas*/}
                {
                    (status === 'authenticated')
                    ? <Route path="/*" element={ <JournalRoutes/> }/>
                    : <Route path="/auth/*" element={ <AuthRoutes/>}/> 
                }
                <Route path='/*' element={ <Navigate to='/auth/login' />  } />

                {/* 1.3- Rutas a Login y Registro 
                <Route path="/auth/*" element={ <AuthRoutes/>}/> */}
                {/* 1.4- Rutas a JournalApp 
                <Route path="/*" element={ <JournalRoutes/> }/> */}
            </Routes>  
        </>
        
    )
}
