function rellenar(array, min, max, num_encontrados, digito) {
    let posicion_aleatorios = 0;
    do {
        let aleatorio = Math.floor(Math.random() * (max - min + 1) + min);
        array[posicion_aleatorios] = aleatorio;
        if(aleatorio%10 == digito) {
            num_encontrados++;
        }
        posicion_aleatorios++;
    }
    while(posicion_aleatorios < array.length);
    
    return num_encontrados;
}

function añadirCorrectos(aceptados, aleatorios,  digito) {
    if(aceptados.length > 0) {
        let j = 0;
        for(let i = 0; i < aleatorios.length; i++) {
            if(aleatorios[i]%10 == digito) {
                aceptados[j] = aleatorios[i];
                j++;
            }
        }
    }
}

function mostrar(array) {
    if(array.length == 0) {
        console.log("No ha habido ningún número acabado en ese dígito");
    }
    for(let i = 0; i < array.length; i++) {
        console.log("Número "+(i+1)+" = "+array[i]);
    }
}


let tamaño;
do {
    tamaño = parseInt(prompt("Introduce el tamaño del array (mayor que 0)"));
}
while(tamaño <= 0);

let digito;
do {
    digito = parseInt(prompt("Introduce el dígito final deseado de 0 a 9"));
}
while(digito < 0 || digito > 9);

let min = 1;
let max = 300;
let num_encontrados = 0;
let aleatorios = new Array(tamaño);
num_encontrados=rellenar(aleatorios, min, max, num_encontrados, digito);
let aceptados = new Array(num_encontrados);
añadirCorrectos(aceptados, aleatorios, digito);
console.log("Números generados");
mostrar(aleatorios);
console.log("Números acabados en "+ digito);
mostrar(aceptados);
