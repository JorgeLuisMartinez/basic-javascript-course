var estudiantes = ["marcos", "david", "rosa", "daniel"]

function saludar (estudiante){
    console.log(`Hola, ${estudiante}`);
}

while (estudiantes.length > 0) {
    var estudiante = estudiantes.shift();
    saludar(estudiante);
}

//metafora para entender:  Ambos ciclos se ocupan el for y el while. Con for podemos definir un fin de intentos y con el while mientras se cumpla que lo siga haciendo. Es como decir en while sería, seguir cocinando el pollo mientras siga crudo, realmente no sabemos cuando estará cocinado. Si usáramos for podría quedarnos crudo o muy quemado, a menos que fueras un super experto.

/*  Playground: En este desafío tu función solution recibirá 3 parámetros:

estudiantes: un array de strings con varios nombres de estudiantes.
deathCount: un número entero.
nuevo: un string con el nombre de un nuevo estudiante (que no aparecía antes en el array).
Tu función debe retornar un array de elementos con las siguientes indicaciones:

Si el parámetro deathCount es igual a 0, debes retornar un array con los mismos elementos que tenía el array de estudiantes y agregando el elemento nuevo al final.

Si el parámetro deathCount es mayor a 0, debes retornar un array con los mismos elementos del array estudiantes pero eliminando la cantidad de estudiantes que indica el número deathCount y agregando el elemento nuevo al final.

💡 Aclaración: NO debes eliminar TODOS los elementos del array original de estudiantes, sino eliminar la cantidad de estudiantes que indica el número deathCount.

Ejemplo 1:

El array estudiantes contiene los elementos "Nico" y "Zulle". El número deathCount es igual a 0. Y el nuevo estudiante es "Santi". Al deathCount ser igual a 0, "Nico" y "Zulle" se quedan. Y agregamos "Santi" al final.*/

function solution(estudiantes, deathCount, nuevo) {
    while (deathCount > 0) {
      estudiantes.pop();
      deathCount--;
    }
    estudiantes.push(nuevo);
    return estudiantes;
}