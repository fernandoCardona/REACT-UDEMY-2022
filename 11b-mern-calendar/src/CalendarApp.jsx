//Importaciones de React
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
//Importaciones de Terceros

//Importaciones de la App
import { AppRouter } from "./router"
import { store } from "./store"


export const CalendarApp = () => {


    return (
        <>  
            <Provider store={ store }>
                <BrowserRouter>
                {/*<HasRouter>*/}
                    <AppRouter />
                {/*</HasRouter>*/}   
                </BrowserRouter>
            </Provider>
            
            
        </>
    )
}
