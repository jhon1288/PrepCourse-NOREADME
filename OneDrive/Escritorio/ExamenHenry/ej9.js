Array.prototype.filtrar = function (funcion) {
    const filteredArray = [];
    for (let i = 0; i < this.length; i++) {
      if (funcion(this[i])) {
        filteredArray.push(this[i]);
      }
    }
    return filteredArray;
  };
  
  // Ejemplo de uso:
  const productos = [
    { price: 100, name: 'tv' },
    { price: 50, name: 'phone' },
    { price: 30, name: 'lamp' },
    { price: 60,name:'radio'},
    { price: 70,name:'auricular'},
  ];
  
  const resultadoFiltrado = productos.filtrar(function (p) {
    return p.price >= 50;
  });
  
  console.log(resultadoFiltrado); // [{ price: 100, name: 'tv' }]

  // Escribi una función filtrar en el prototipo de Arrays,
  // que recibe una funcion (callback) que devuelve true o false.
  // filtrar los elementos de ese arreglo en base al resultado de esa funcion
  // comparadora, devolver un nuevo arreglo con los elementos filtrados.
  // NO USAR LA FUNCION FILTER DE LOS ARREGLOS.
  // ej:
  // var productos = [{
  //   price: 100,
  //   name: 'tv'
  // }, {
  //   price: 50,
  //   name: 'phone'
  // }, {
  //   price: 30,
  //   name: 'lamp'
  // }]
  // productos.filtrar(function(p) {
  //   return p.price >= 50;
  // }) => [{price: 100, name:'tv'}]