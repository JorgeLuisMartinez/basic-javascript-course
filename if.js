// Condicion if y sus subcondiciones else y else if
if (false) {
    console.log("Hola");
}
// otro ejemplo con else
if (false) {
    console.log("Hola");
} else {
    console.log("Soy falso");
}
// ejemplo con condicion con if, else if y else.
var edad = 17;
if (edad === 18) {
    console.log("Puedes votar");
} else if (edad > 18) {
    console.log("Puedes volver a votar");
} else {
    console.log("No puedes votar");
}
// operador ternario: condition ? true : false;
// ejemplo con operador ternario 
// los dos puntos separan que si el la condicion se culple guarda en la variable lo que esta antes de los dos puntos y si no lo que desta despues de los dos puntos.
var numero = 2;

var resultado = numero === 1 ? "Sí soy un uno" : "No, no soy 1"

console.log(resultado);

// que retorna el sgt codigo:
if (false === !true) { 
    console.log(false == true) 
} else { 
    console.log(true === !false) 
}
// retorna falso pues se cumple la condicion de if false es igual a false (!true = false) y el log de esa condicion es da falso, puesto que false no es == true.



