// OBJECT

// CREAR UN OBJECT
console.log("Creando un object a estudiante");

let estudiante = {
    nombre: "Juan",
    edad: 25,
    ciudad: "Villarrica",
    curso: "Programación JavaScript",
    
    // Método dentro del object
    presentarse: function() {
        return "Hola, soy " + this.nombre + ", tengo " + this.edad + 
               " años y vivo en " + this.ciudad;
    },
    
    esMayorDeEdad: function() {
        return this.edad >= 18;
    }
};

console.log("Nombre:", estudiante.nombre);
console.log("Edad:", estudiante.edad);
console.log("Ciudad:", estudiante.ciudad);
console.log("Curso:", estudiante.curso);
console.log("\nPresentación:", estudiante.presentarse());
console.log("¿Es mayor de edad?", estudiante.esMayorDeEdad());

// ARRAYS DE OBJECT
console.log("Arrays de object (productos)");

let productos = [
    { nombre: "Laptop", precio: 800, stock: 5 },
    { nombre: "Mouse", precio: 20, stock: 15 },
    { nombre: "Teclado", precio: 50, stock: 8 },
    { nombre: "Monitor", precio: 300, stock: 3 }
];

console.log("Lista de productos:");

// Recorro con forEach
productos.forEach(function(producto, index) {
    console.log((index + 1) + ".", producto.nombre, "- $" + producto.precio, 
                "(Stock:", producto.stock + ")");
});

// USANDO MAP
console.log("Usando map() para calcular valores");

let valoresInventario = productos.map(function(producto) {
    return producto.precio * producto.stock;
});

console.log("Valor de cada producto en inventario:", valoresInventario);

// CALCULAR TOTAL
console.log("Calculando total del inventario");

let totalInventario = 0;

for (let i = 0; i < productos.length; i++) {
    let valorProducto = productos[i].precio * productos[i].stock;
    totalInventario = totalInventario + valorProducto;
    console.log(productos[i].nombre + ": $" + valorProducto);
}

console.log("Valor total del inventario: $" + totalInventario);

// FILTRAR PRODUCTOS CAROS
console.log("Filtrando productos con precio mayor a $100");

let productosCaros = productos.filter(function(producto) {
    return producto.precio > 100;
});

productosCaros.forEach(function(producto) {
    console.log("", producto.nombre, "- $" + producto.precio);
});
