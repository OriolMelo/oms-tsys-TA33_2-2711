function conversor(num) {
    let binario_reves = [];
    let binario;
    if(num == 0) {
        binario = "0";
    }
    else {
        let pos_array=0;
        while(num > 0) {
            let binario_actual = num%2;
            console.log(binario_actual);
            binario_reves[pos_array] = binario_actual.toString();
            num = Math.floor(num/2);
            pos_array++;
        }
        pos_array--;
        
        let binario_ordenado = new Array(binario_reves.length);
        
        for(let i=0, j=pos_array; i <= pos_array; i++, j--) {
            binario_ordenado[i]=binario_reves[j];
        }
        
        binario = binario_ordenado.join('');
    }
    return binario;
}

let num = prompt("Entra un número");
while(isNaN(num) || num == null){
    num = prompt("Entra un número");
}
console.log("El número "+num+" en binario es "+conversor(num));