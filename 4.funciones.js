//FUNCIONES

// FUNCIÓN PARA SUMAR
function sumar(a, b) {
    return a + b;
}

console.log("Función sumar");
let resultadoSuma = sumar(10, 5);
console.log("sumar(10, 5) =", resultadoSuma);

// FUNCIÓN PARA RESTAR
function restar(a, b) {
    return a - b;
}

console.log("Función restar");
let resultadoResta = restar(20, 8);
console.log("restar(20, 8) =", resultadoResta);

// FUNCIÓN PARA MULTIPLICAR
function multiplicar(a, b) {
    return a * b;
}

console.log("Función multiplicar");
let resultadoMultiplicacion = multiplicar(6, 7);
console.log("multiplicar(6, 7) =", resultadoMultiplicacion);

// FUNCIÓN PARA DIVIDIR (CON VALIDACIÓN)
function dividir(a, b) {
    if (b === 0) {
        return "Error: No se puede dividir por cero";
    }
    return a / b;
}

console.log("Función dividir");
console.log("dividir(100, 4) =", dividir(100, 4));
console.log("dividir(10, 0) =", dividir(10, 0));


// FUNCIÓN QUE LLAMA A OTRA FUNCIÓN
function operacionDoble(num1, num2) {
    let suma = sumar(num1, num2);
    let resultado = multiplicar(suma, 2);
    return resultado;
}

console.log("Función que llama a otras funciones");
console.log("operacionDoble(5, 3) = (5+3)*2 =", operacionDoble(5, 3));

