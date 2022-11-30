
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './routers/AppRouter'

export const JournalApp = () => {

    return (
        //4.1-Hacemos el apunte a nuestro AppRouter desde nuestro componente de inicioJournalApp 
        //4.2-Lo envolvemos con el BrowserRouter 
            <>
                <BrowserRouter>
                    <AppRouter/>
                </BrowserRouter>     
            </>
        
    )
}
