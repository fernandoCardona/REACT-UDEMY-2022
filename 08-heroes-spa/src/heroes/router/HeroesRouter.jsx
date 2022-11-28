import { Navigate, Route, Routes } from 'react-router-dom';
import { DcPage, MarvelPage, SearchPage, HeroePage } from '../../heroes';
import { Navbar } from '../../ui';

export const HeroesRouter = () => {
    return (
    <>
        <Navbar/>
        <div className="container">
           <Routes>
                <Route path="marvel" element={ <MarvelPage/> }/>
                <Route path="dc" element={ <DcPage/> }/>

                <Route path="search" element={ <SearchPage/> }/>
                <Route path="heroe" element={ <HeroePage/> }/>
                

                <Route path="/" element={ <Navigate to="/marvel"/> } />
                
            </Routes> 
        </div>
        
    </>
        
    ) 
}
