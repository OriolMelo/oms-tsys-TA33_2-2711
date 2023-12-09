function convertirEuros(euros, moneda) {
    const LIBRAS = 0.86;
    const DOLARES = 1.28611;
    const YENES = 129.852;
    let conversion = 0;
    if(euros<0){
        console.log("La cantidad tiene que ser mayor que 0");
    }
    else{
        switch(moneda.toUpperCase()) {
            case "LIBRAS":
                conversion = euros * LIBRAS;
                console.log(euros+ " euros son "+conversion+" "+moneda);
                break;
            case "DOLARES":
                conversion = euros * DOLARES;
                console.log(euros+ " euros son "+conversion+" "+moneda);
                break;
            case "YENES":
                conversion = euros * YENES;
                console.log(euros+ " euros son "+conversion+" "+moneda);
                break;
            default:
                console.log("Hay que introducir la moneda LIBRAS, DOLARES o YENES");
        }
    }
    
}

convertirEuros(prompt("Entra la cantidad de euros a convertir"), prompt("Entra la moneda a la que quieres convertir"));