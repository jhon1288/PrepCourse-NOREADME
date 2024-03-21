/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function soloNumeros(array) {
    // La funcion llamada 'soloNumeros' recibe como argumento un arreglo de enteros y strings llamado 'array'.
    // Debe devolver un arreglo con solo los enteros.
    // Ej: 
    // soloNumeros([1, 'Henry', 2]) debe retornar [1, 2]
  
    // Tu código aca:
    // Filtramos los elementos del arreglo que sean números enteros
  const numeros = array.filter((elemento) => typeof elemento === 'number' && Number.isInteger(elemento));
  return numeros;
}

  
  // No modifiques nada debajo de esta linea //
  
  
  module.exports = soloNumeros
  // Ejemplo de uso:
//const miArreglo = [1, 'Henry', 2, 3.14, 'Copilot', 5];
// const resultado = soloNumeros(miArreglo);
// console.log(resultado); // Debería mostrar [1, 2, 5]
