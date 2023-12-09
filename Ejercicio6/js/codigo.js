function contarCifras(num) {
    let cifras = 0;
    
    if(num<0) {
        cifras = -1;
    }
    else if(num==0) {
        cifras = 1;
    }
    else {
        while(num>0) {
            num=Math.floor(num/10);
            cifras++;
        }
    }
    return cifras;
}
let num = prompt("Entra un número");
let entero = /^[0-9]+$/;

while(!entero.test(num)){
    num = prompt("Entra un número postivo");
}

console.log("El número "+num+" tiene "+contarCifras(num)+" cifras");