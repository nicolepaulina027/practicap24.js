let productos = [
    { nombre: "Laptop", precio: 800 },
    { nombre: "Mouse", precio: 25 },
    { nombre: "Teclado", precio: 50 },
    { nombre: "Monitor", precio: 300 },
    { nombre: "Auriculares", precio: 60 }
];


let productoBuscado = productos.find(producto => producto.nombre === "Teclado");
console.log("Producto encontrado:", productoBuscado);


let totalCompra = productos.reduce((total, producto) => total + producto.precio, 0);
console.log("Total de la compra:", totalCompra);
