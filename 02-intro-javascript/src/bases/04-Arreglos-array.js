//Arreglos

//const arreglo = new Array( 100 );
const arreglo = []
arreglo.push(1);
arreglo.push(2);
arreglo.push(3);
arreglo.push(4);

console.log( arreglo );
//Para copiar un arreglo 
let arreglo2 = [ ...arreglo, 5];
console.log( arreglo2 );

//.map()
const arreglo3 = arreglo2.map(function( numero ){
    return numero * 2;
});
console.log( arreglo3 );