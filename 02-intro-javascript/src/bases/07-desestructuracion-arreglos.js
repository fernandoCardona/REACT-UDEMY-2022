 
//Destructuracion de arreglos = Arrays
//Asignacion desestructurante

const personajes = ['Goku', 'Vegueta', 'Trunks'];

//METODO TRADICIONAL de extraccion de un valor del arreglo
console.table(personajes[0]);
console.table(personajes[1]);
console.table(personajes[2]);

//METODO MODERNO de extraccion de un valor del arreglo
const [ p1 ] = personajes;
console.log( p1 );
const [ ,p2 ] = personajes;
console.log( p2 );
const [ , ,p3 ] = personajes;
console.log( p3 );

const retornaArreglo = () => {
    return ['ABC', 123];
}
const [letras, numeros] = retornaArreglo();
console.log( letras );
console.log( numeros );


// const useState = valor  => {
// return [ valor, ()=>{console.log('Hola mundo') } ]
// }
// const [nombre, setNombre] = useState('Goku');
// console.log(nombre)
// setNombre();