// CONDICIONALES

// IF / ELSE 

let edad = 20;
console.log("Mi edad es:", edad);

if (edad >= 18) {
    console.log("Soy mayor de edad");
} else {
    console.log("Soy menor de edad");
}

//SWITCH

let nota = 4.0;
let resultado;

console.log("Mi nota es:", nota);

switch (true) {
    case (nota >= 7.0):
        resultado = "Excelente ";
        break;
    case (nota >= 6.0):
        resultado = "Aprobado";
        break;
    case (nota >= 5.0):
        resultado = "Regular";
        break;
    default:
        resultado = "Reprobado";
}

console.log("Resultado:", resultado);

// Verificar si un número es par o impar
let numeroProbar = 8;

if (numeroProbar % 2 === 0) {
    console.log("El número", numeroProbar, "es PAR");
} else {
    console.log("El número", numeroProbar, "es IMPAR");
}