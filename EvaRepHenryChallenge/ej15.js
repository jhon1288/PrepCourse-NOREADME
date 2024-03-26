function findMaxMin(numeros) {
    if (!numeros || numeros.length === 0) {
        return null;
    }

    let max = numeros[0];
    let min = numeros[0];

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > max) {
            max = numeros[i];
        }
        if (numeros[i] < min) {
            min = numeros[i];
        }
    }

    return { max, min };
}

// Ejemplo de uso
const numerosEjemplo = [10, 5, 20, 15, 8];
const { max, min } = findMaxMin(numerosEjemplo);
console.log(`Valor máximo: ${max}, Valor mínimo: ${min}`);