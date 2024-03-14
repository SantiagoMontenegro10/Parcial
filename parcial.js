// Función para calcular la suma de los divisores de un número
function sumaDivisores(num) {
    let suma = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            suma += i;
        }
    }
    return suma;
}

// Función para verificar si la suma de los divisores de dos números es igual al otro número
function verificarSumaDivisores(num1, num2) {
    let sumaDivisoresNum1 = sumaDivisores(num1);
    let sumaDivisoresNum2 = sumaDivisores(num2);

    if (sumaDivisoresNum1 === num2 && sumaDivisoresNum2 === num1) {
        return "La suma de los divisores de ambos números es igual al otro número.";
    } else {
        return "La suma de los divisores de ambos números no es igual al otro número.";
    }
}

// Ejemplo de uso
let num1 = 220;
let num2 = 284;
console.log(verificarSumaDivisores(num1, num2)); // Resultado esperado: La suma de los divisores de ambos números es igual al otro número.
