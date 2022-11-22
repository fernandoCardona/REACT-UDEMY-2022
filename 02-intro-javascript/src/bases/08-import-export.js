 
//IMPORT - EXPORT -imp ->shortCut
import { heroes } from '../data/heroes';

console.table(heroes);
// METODO TRADICIONAL 
const getHeroesById = id => {
    return heroes.find( heroe => {
        if (heroe.id === id){
            return true
        } else {
            return false
        }
    });
};
//console.log( getHeroesById(2) );

// METODO MODERNO

export const getHeroesById2 = id => heroes.find( heroe => heroe.id === id );
 
//console.log( getHeroesById2(4) );

export const getHeroeByOwner = owner => heroes.filter( heroe => heroe.owner === 'Marvel' );
//console.table( getHeroeByOwner('Marvel') );