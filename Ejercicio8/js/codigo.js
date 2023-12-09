function rellenar(valores) {
    let añadidas=0;
    do {
        let valor = Number(prompt("Introduce un valor numérico"));
        valores[añadidas] = valor;
        añadidas++;
    }
    while(añadidas < 10);
}

function mostrar(valores) {
    for(let i = 0; i <valores.length; i++) {
            console.log("Índice "+i+" = "+valores[i]);
    }
}

let valores = new Array(10);

rellenar(valores);
mostrar(valores);