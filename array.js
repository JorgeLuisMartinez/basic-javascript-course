// se declara con []

var frutas = ["Manzana", "Pera", "Cereza", "Banano"];

console.log(frutas);

// length nos sirve para saber el tamaño del array se declara con un punto despues del array

console.log(frutas.length);

//como acceder a cada uno de los elementos del array, se debe tener el cuenta que los elementos del array se cuentan desde 0 por ende para llegar a cereza tendriamos que tener en cuenta que es el elemento dos del array

console.log(frutas[2]);

//metodos de arrays: mutar el array = push: añade elementos al final del array

var frutas = ["Manzana", "Pera", "Cereza", "Banano"];

frutas.push("Uvas");
//De esta forma agregamos otro elemento al array en este caso al final, y ahora el array cuenta con 0 1 2 3 4 elementos siendo 4 el elemento nuevo

console.log(frutas);

//metodos de arrays: mutar el array = pop: elimina el ultimo elemento del array

frutas.pop();

console.log(frutas);

//metodos de arrays: mutar el array = unshift: añade elementos al inicio del array

frutas.unshift("Uvas");
console.log(frutas);

//metodos de arrays: mutar el array = shift: elimina el primer elemento del array

frutas.shift();
console.log(frutas);

// metodos de array: posicion del array = indexOf puede obtener la pocision de los elementos del array
var frutas = ["Manzana", "Pera", "Cereza", "Banano"];
frutas.indexOf("Cereza");
frutas[2].pop();

//playground: En este desafío vas a recibir un parámetro arraySecreto en la función solution. Debes retornar true si el primer elemento del arraySecreto es de tipo string y debes retornar false si es de cualquier otro tipo.

function solution(arraySecreto) {
    if (typeof arraySecreto[0] === "string") {
        return true;
    } else {
        return false;
    }
}
//otra forma de hacerlo

function solution(arraySecreto) {
    return typeof arraySecreto[0] === "string" ? true:false
}