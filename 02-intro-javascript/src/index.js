//OPERADOR CONDICIONAL TERNADIO

// METODO TRADICIONAD       
const activo = true;
let mensaje = '';

if (activo) {
    mensaje = 'Activo';
}else{
    mensaje = 'Inactivo';
}
console.log( mensaje );


// METODO TERNARIO 
!activo ? mensaje = 'activo' : mensaje = 'inactivo';
const mensaje2 = (activo) ? 'activo' : 'inactivo';
console.log( mensaje );
console.log( mensaje2 );

const mensaje3 = activo && 'Activo';
console.log( mensaje3 );