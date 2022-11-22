//Template Strings

const nombre = 'Fernando';
const apellido = 'Cardona';
//let nombreCompleto = nombre + ' ' + apellido;


//Ejemplo Template String basico

const nombreCompleto = `${ nombre } ${ apellido }`;
console.log( nombreCompleto );

//Ejemplo Template String muestran resultado de funciones 

function getSaludo( nombre ) {
    return 'Hola ' + nombre; 
}
console.log(`Este es un texto: ${ getSaludo( nombre ) }`);