//Variables y constantes
// const son variables que nunca van a cambiar 
const nombre = 'Fernando';
const apellido = 'Cardona';
// let son variables que nunca van a cambiar 
let valorDado = 4;
console.log( valorDado );

valorDado = 5;
console.log( valorDado );

//const en un scope distinto
console.log(nombre, 'fuera del scope de if');
if (true) {
    const nombre = 'Carolina';
    console.log(nombre, ' dentro del scope de if');
}