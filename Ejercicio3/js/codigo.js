function esPrimo(num) {
    let i = 2;
    let primo = true;
    if(num < 2) {
        primo = false;
    }
    while(i <= num/2 && primo) {
        if(num%i == 0) {
            primo = false;
        }
        i++;
    }
    return primo;
}

console.log(esPrimo(prompt("Entra un numero")));