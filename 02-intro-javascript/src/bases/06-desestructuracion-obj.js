import React, { useContext } from 'react';
//Destructuracion de Objetos
//Asignacion desestructurante


const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
} 
// METODO TRADICIONAL 
console.log( persona.nombre );
console.log( persona.edad);
console.log( persona.clave );

//METODO DESEATRUCTURANTE
const { nombre, edad, clave } = persona;
console.log( nombre );
console.log( edad);
console.log( clave );

//METODO DESESTRUCTURANTE EN FUNCIONES Y asignacion por defecto
const retornaPersona = ( {nombre, apellido = 'stark', edad, clave} ) => {
     
    console.table( nombre, apellido );
}
retornaPersona( persona );

//METODO DESESTRUCTURANTE EN useContext
// const useContext = ( {nombre, apellido = 'stark', edad, clave} ) => {
     
//    return {
//         nombreClave: clave,
//         years: edad
//     }
//  }
//  const { nombreClave, years } =  useContext( persona );
//  console.log( nombreClave, years  );