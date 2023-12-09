let figura = prompt("Entra la figura deseada");

function areaCirculo(radio) {
    return Math.PI * Math.pow(radio, 2);
}

function areaCuadrado(lado) {
    return lado * lado;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

switch(figura){
    case "círculo":
        let radio = prompt("Entra radio del círculo:");
        alert("Área: " + areaCirculo(radio));
        break;
    case "cuadrado":
        let lado = prompt("Entra el lado del cuadrado:");
        alert("Área: " + areaCuadrado(lado));
        break;
    case "triángulo":
        let base = prompt("Entra la base del triángulo:");
        let altura = prompt("Entra la altura del triángulo:");
        alert("Área: " + areaTriangulo(base, altura));
        break;
    default:
        alert("La figura no es círculo, cuadrado ni triángulo");
}
