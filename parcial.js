function sumaDivisores(num) {
    let suma = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            suma += i;
        }
    }
    return suma;
}

let num1 = prompt("Ingrese el primer número:");

num1 = parseInt(num1);

let num2 = prompt("Ingrese el segundo número:");

num2 = parseInt(num2);


let sumaDivisoresNum1 = sumaDivisores(num1);
let sumaDivisoresNum2 = sumaDivisores(num2);


if (sumaDivisoresNum1 === num2 && sumaDivisoresNum2 === num1) {
    alert("Los números " + num1 + " y " + num2 + " son amigos.");
} else {
    alert("Los números " + num1 + " y " + num2 + " no son amigos.");
}

