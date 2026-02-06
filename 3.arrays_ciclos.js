//ARRAYS Y CICLOS

// Creo un arrays con números
let misNumeros = [5, 12, 8, 20, 15, 3, 25, 10];
console.log("Mi arrays de números:", misNumeros);
console.log("Cantidad de elementos:", misNumeros.length);

// CICLO FOR

for (let i = 0; i < misNumeros.length; i++) {
    console.log("Posición", i, "=", misNumeros[i]);
}

// CICLO WHILE


let numerosMayores = [];
let i = 0;

while (i < misNumeros.length) {
    if (misNumeros[i] > 10) {
        numerosMayores.push(misNumeros[i]);
        console.log("", misNumeros[i], "es mayor a 10");
    }
    i++;
}

console.log("Números mayores a 10:", numerosMayores);

// Métodos de arrays, filter, map, forEach.
console.log("Usando métodos de arrays:");

// Filter
let menoresA10 = misNumeros.filter(num => num < 10);
console.log("Números menores a 10:", menoresA10);

// Map
let numerosDobles = misNumeros.map(num => num * 2);
console.log("Números multiplicados por 2:", numerosDobles);

// ForEach
console.log("Tabla de multiplicar del 5");
let tabla = [];

for (let j = 1; j <= 10; j++) {
    tabla.push(5 * j);
}

tabla.forEach((resultado, index) => {
    console.log("5 *", (index + 1), "=", resultado);
});

