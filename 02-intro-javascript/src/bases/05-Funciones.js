//Funciones
//METODO ANTIGUO
function saludar ( nombre ) {
    return `Hola, ${ nombre }`;
};
console.log( saludar('Fernando') );


//METODO Nuevo
const saludar2 = ( nombre ) => {
    return `Hola, ${ nombre }`;
};
console.log( saludar2('Carolina') );

//METODO Nuevo Simplificado
const saludar3 = nombre => `Hola, ${ nombre }`;

console.log( saludar3('Tom') );

//METODO Nuevo Simplificado para objetos 
const saludar4 = () => ( {
    nombre: 'Tom',
    apellido: 'Perez',
    edad: 35
} );

console.table( saludar4() );