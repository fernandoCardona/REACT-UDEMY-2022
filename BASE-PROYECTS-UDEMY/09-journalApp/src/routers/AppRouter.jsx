import {
    Routes,
    Route,
    Link,
    Navigate
  } from "react-router-dom";

import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { JournalRoutes } from "../journal/routes/JournalRoutes";

//1.1-Creamos el componente de rutas PRINCIPAL AppRouter + estructura de carpetas del proyecto
export const AppRouter = () => {
    return (
        <>
            {/* 1.2- Contenedor de rutas principal Routes */}
            <Routes>
                {/* 1.3- Rutas a Login y Registro */}
                <Route path="/auth/*" element={ <AuthRoutes/>}/>
                {/* 1.4- Rutas a JournalApp */}
                <Route path="/*" element={ <JournalRoutes/> }/>
            </Routes>  
        </>
        
    )
}
