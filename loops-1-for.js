// loop for 
var estudiantes = ["marcos", "david", "rosa", "daniel"]

function saludar (estudiante){
    console.log(`Hola, ${estudiante}`);
}
// se inicializa el valor, se condiciona, que esta condicion es lo mismo que decir mientras que, la variable que inicializamos sea < menor que el tamaño de nuestro arreglo, adiciona 1 a la variable, y ejecuta el bloque de codigo acontinuacion
for (var index = 0; index < estudiantes.length; index++) {
     saludar(estudiantes[index]);
}

// loop for otra forma o manera

var estudiantes = ["marcos", "david", "rosa", "daniel"]

function saludar (estudiante){
    console.log(`Hola, ${estudiante}`);
}
// esto se traduce de la sgte creo una variable que sera mi index igualmente, y con of le digo que a con ese index recorra todo el arreglo y ejecute el bloque de codigo que esta abajo en este caso si el array es de estudiantes para que se entienda mejor es como ejecute este bloque de codigo con cada estudiante del(of) arreglo estudiantes.
for (var estudiante of estudiantes) {
    saludar(estudiante);
}


