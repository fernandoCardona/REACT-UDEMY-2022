import{ getHeroesById2, getHeroeByOwner }from '../bases/08-import-export'
//PROMESAS

const promesa = new Promise( (resolve,reject) => {
    setTimeout(() => {
        const heroe = getHeroesById2(2);
        resolve(heroe);
        reject('Se genero un error');
    }, 2000);
} );

promesa.then( (heroe) =>{
    console.log(heroe);
}).catch(err => console.warn(err));


const getHeroesByIdAsync = ( id ) => {
    const promesa2 = new Promise( (resolve,reject) => { 

        setTimeout(() => {
            const heroe = getHeroesById2(id);
            heroe ? resolve(heroe) : reject('Se genero un error');
        }, 2000);
    })
    return promesa2;
}
getHeroesByIdAsync(1).then( (heroe)=>{
    console.log(heroe);
});
getHeroesByIdAsync(10).then( (heroe)=>{
    console.log(heroe);
}).catch(err => console.warn(err));