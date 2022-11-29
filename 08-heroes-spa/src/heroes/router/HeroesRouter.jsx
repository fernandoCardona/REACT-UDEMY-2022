import { Navigate, Route, Routes } from 'react-router-dom';
import { DcPage, HeroePage, MarvelPage, SearchPage } from '../pages';
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
                <Route path="heroe/:id" element={ <HeroePage/> }/>
                

                <Route path="/" element={ <Navigate to="/marvel"/> } />
                
            </Routes> 
        </div>
        
    </>
        
    ) 
}
