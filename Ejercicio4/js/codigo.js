function factorial(num) {
    let factorial = num;
    if(num < 0) {
        alert("Introduce un número positivo");
    }
    else {
        if(num == 0) {
            factorial = 1;
        }
        else {
            for(let i=num-1; i>=1; i--) {
                factorial = factorial * i;
            }
        }
        alert("El factorial de " +num+ " es " +factorial);
    }
}

let num = prompt("Entra un número");
while(isNaN(num) || num == null){
    num = prompt("Entra un número");
}
factorial(num);