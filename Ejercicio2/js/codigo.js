function generarAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let nrandoms = prompt("Número de aleatorios deseados:");

let min = parseInt(prompt("Min:"));
let max = parseInt(prompt("Max:"));

let numerosAleatorios = [];

for(let i = 0; i < nrandoms; i++){
    numerosAleatorios[i] = generarAleatorio(min, max);
}

console.log(numerosAleatorios);