function rellenar(array, min, max) {
    let posicion = 0;
    do {
        let aleatorio = Math.floor(Math.random() * (max - min + 1) + min);
        array[posicion] = aleatorio;
        posicion++;
    }
    while(posicion < array.length);
}

function multiplicar(array1, array2) {
    let resultado = new Array(array1.length);
    for(let i = 0; i < array1.length; i++) {
        resultado[i] = array1[i] * array2[i];
    }
    return resultado;
}

function mostrar(array) {
    let suma = 0;
    for(let i = 0; i < array.length; i++) {
        suma = suma+ array[i];
        console.log("Número "+(i+1)+" = "+array[i]);
    }
}

let tamaño;
do {
    tamaño = parseInt(prompt("Introduce el tamaño del array (mayor que 0)"));
}
while(tamaño <= 0);

let array1 = new Array(tamaño);
let array2 = new Array(tamaño);

let min = parseInt(prompt("Introduce el número mínimo"));
let max = parseInt(prompt("Introduce el número máximo"));

rellenar(array1, min, max);
array2 = array1;
rellenar(array2, min, max);
let array_resultado = multiplicar(array1, array2);
mostrar(array1);
mostrar(array2);
mostrar(array_resultado);
