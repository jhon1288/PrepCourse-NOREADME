function foo(numeros) {

    var my_var = 0;
    
    for (var i = 0; i < numeros.length; i++) {
    
    if (numeros[i] > my_var) {
    
    my_var = numeros[i];
    
    }
    
    }
    
    return my_var;
    var resultado = foo([3, 7, 2, 9, 4]);
     console.log(my_var);
   
    }
   