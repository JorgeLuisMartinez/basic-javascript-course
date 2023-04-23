// ejemplo de switch
var numero = 10

switch (numero){
    case 1: 
        console.log("Soy 1");
        break;
    case 10:
        console.log("soy un 10");
        break;
    case 100:
        console.log("soy un 100");
        break;
    default:
        console.log("error");
}

// es importante poner el break por que eso rompe el switch si el caso cumple con la condicion
// los debemos usar Cuando tenemos múltiples casos a evaluar y evitar el uso de múltiples “if else”.