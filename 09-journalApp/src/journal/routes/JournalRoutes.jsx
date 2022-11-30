import {
    Routes,
    Route,
    Link,
    Navigate
  } from "react-router-dom";
import { JournalPage } from "../pages/JournalPage";

//3.1-Creamos el componente de rutas JournalPages
export const JournalRoutes = () => {
  return (
    <>
        {/* 3.2- Contenedor de rutas secundarias journalRoutes */}
        <Routes>
            {/* 3.3- Ruta a JournalPage */}
            <Route path="/" element={ <JournalPage/> }/>

            {/* 3.5- Ruta univessal */}
            <Route path="/*" element={ <Navigate to="/"/> }/>
        </Routes>  
    </>
  )
}
