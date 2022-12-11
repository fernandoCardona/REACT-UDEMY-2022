//Importaciones de React:
import { Navigate, Route, Routes } from "react-router-dom";
//Importaciones de Terceros:

//Importaciones de la App:
import { LoginPage } from "../auth";
import { CalendarPage } from "../calendar";


export const AppRouter = () => {
    //1.0-Creacion del router y validacion del estatus del mismo:
    const authStatus = 'authenticated'; //'not-authenticated'

    return (
        //1.1-Con un condicional ternario mostramos una ruta o otra
        <Routes>
            {
                (authStatus === 'not-authenticated')
                ? <Route path='/auth/*' element={ <LoginPage />} />
                : <Route path='/*' element={ <CalendarPage />} />
            }  

            <Route path='/*' element={ <Navigate to='/auth/login'/>} />
        </Routes>
    )
}
