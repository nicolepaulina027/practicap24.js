
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numerosCuadrado = numeros.map(function(numero) {
    return numero * numero;
});

console.log(numerosCuadrado);

let numerosMayoresQue40 = numerosCuadrado.filter(function(numero) {
    return numero > 40;  
});

console.log(numerosMayoresQue40);
