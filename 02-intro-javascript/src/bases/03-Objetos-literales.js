//Objetos literales

const persona = {
    nombre: 'Tom',
    apellido: 'Perez',
    edad: 35, 
    direccion: {
        ciudad: 'Madrid',
        zipCode: 28012,
        lat: 14.21236,
        lng: 25.36545
    }
};

console.log( persona );
console.log( persona.nombre );
console.log( persona.apellido );
console.log( persona.edad );
console.table(persona);
console.table(persona.direccion);

//Para hacer una copia del obj
const persona2 = { ...persona };
persona2.nombre = 'Peter';
console.table( persona2 );
