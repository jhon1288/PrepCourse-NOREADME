function foo(texto) {
    return texto.charAt(0) === texto.charAt(texto.length - 1);
  }
  
  var resultado = foo('aaraa');
  console.log(resultado);