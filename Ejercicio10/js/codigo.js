function rellenar(numeros, min, max) {
    let posicion = 0;
    let mayor_primo = -1;
    do {
        let aleatorio =-1;
        do {
            aleatorio = Math.floor(Math.random() * (max - min + 1) + min);
        }while(!esPrimo(aleatorio));
        
        numeros[posicion] = aleatorio;
        if(aleatorio>mayor_primo)
            mayor_primo = aleatorio;
        posicion++;
    }
    while(posicion < numeros.length);

    return mayor_primo;
}

function mostrar(numeros, mayor_primo) {
    let suma = 0;
    for(let i = 0; i < numeros.length; i++) {
        suma = suma+ numeros[i];
        console.log("Número "+(i+1)+" = "+numeros[i]);
    }
    console.log("Mayor primo del array = "+mayor_primo);
}

function esPrimo(num) {
    let i = 2;
    let primo = true;
    if(num < 2) {
        primo = false;
    }
    while(i <= Math.floor(num/2) && primo) {
        if(num%i == 0) {
            primo = false;
        }
        i++;
    }
    return primo;
}

function existenPrimos(min, max) {
    let existen = false;
    let i = min;
    while(i <= max && !existen) {
        if (esPrimo(i))
            existen = true;
        i++;
    }
    return existen;
}

let tamaño = 0;
do {
    tamaño = parseInt(prompt("Introduce el tamaño del array (mayor que 0)"));
}
while(tamaño <= 0);


let numeros = new Array(tamaño);

let min, max;
let rango_primos = false;
do {
    min = parseInt(prompt("Introduce el número mínimo (mayor o igual que 0)"));
    while(min < 0) {
        min = parseInt(prompt("Introduce el número mínimo (mayor o igual que 0)"));
    }
    max = parseInt(prompt("Introduce el número máximo (mayor o igual que 0)"));
    while(max < 0) {
        max = parseInt(prompt("Introduce el número máximo (mayor o igual que 0)"));
    }
    if(!existenPrimos(min, max)) {
        console.log("No hay números primos entre esos dos valores, vuelve a introducir un rango");
    }
    else {
        rango_primos = true;
    }
}while(!rango_primos);

let mayor_primo = rellenar(numeros, min, max);
mostrar(numeros, mayor_primo);