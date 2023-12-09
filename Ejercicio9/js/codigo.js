function rellenar(numeros, min, max) {
    posicion = 0;
    do {
        aleatorio = Math.floor(Math.random() * (max - min + 1) + min);
        numeros[posicion] = aleatorio;
        posicion++;
    }
    while(posicion < numeros.length);
}

function mostrar(numeros) {
    let suma = 0;
    for(let i = 0; i < numeros.length; i++) {
        suma = suma+ numeros[i];
        console.log("Número "+(i+1)+" = "+numeros[i]);
    }
    console.log("Suma de todos los números = "+suma);
}

let array = new Array(parseInt(prompt("Entra la cantidad de valores a crear")));
let min = parseInt(prompt("Entra el número mínimo deseado"));
let max = parseInt(prompt("Entra el número máximo deseado"));
rellenar(array, min, max);
mostrar(array);