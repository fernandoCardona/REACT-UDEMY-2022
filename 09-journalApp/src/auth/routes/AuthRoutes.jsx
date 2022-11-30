import {
    Routes,
    Route,
    Link,
    Navigate
  } from "react-router-dom";

import { LoginPage, RegisterPage  } from "../pages";


//2.1-Creamos el componente de rutas secundarias Login y register + estructura de carpetas Auth
export const AuthRoutes = () => {
  return (
    
        
        <Routes>
        {/* 2.2- Contenedor de rutas secundarias AuthRoutes */}
            {/* 2.3- Ruta a Login */}
            <Route path="login" element={ <LoginPage/> }/>

            {/* 2.4- Ruta Registro */}
            <Route path="/register" element={ <RegisterPage/> }/>

            {/* 2.5- Ruta univessal */}
            <Route path="/*" element={ <Navigate to="/auth/login"/> }/>
        </Routes>  
    
  )
}
