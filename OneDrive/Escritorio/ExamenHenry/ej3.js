function buscarAmigo(amigos, nombre) {
    for (const amigo of amigos) {
      if (amigo.nombre === nombre) {
        return amigo;
      }
    }
    return null; // Return null if no match found
  }
  
  // Example usage:
//   const amigos = [
// { nombre: 'toni', edad: 33 },
 // { nombre: 'Emi', edad: 25 },
//   ];
  
  const amigoBuscado = buscarAmigo(amigos, 'toni');
  console.log(amigoBuscado); // { nombre: 'toni', edad: 33 }
