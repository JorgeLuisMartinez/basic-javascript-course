// Operadores de operación
//Operadores binarios
5 + 2;

50 - 10;

10 * 20;

20 / 2;

//Concatenar strings
"Clear" + "Master";

//Operadores unitarios
// negación, como negar que false sea false:
!false

//Operadores de asignación el =
var a = 1;

//Operadores de comparacion ==
3 == "3"
// el resultado seria true puesto que el compara el contenido mas no valida el tipo de dato

//Operador de validacion compara de manera estricta incluso el tipo de dato ===
3 === "3"
// el resultado seria false, puesto que uno dato es de tipo num y el otro de tipo string

// Otros operadores de comparacion < > <= >=
5 < 3
// daria falso pues 5 no es menor que 3

5 > 3
// true, mas de lo mismo

5 <= 6

5 >= 6

// operador "tambien" o "y"
a && b

// operador "o"
a || b

//operadores aritmeticos
var edad = 40;
// para incrementar el valor de la variable ++ disminuir -- aumentar por 2 =+ 2
edad++;
edad--;
edad+= 2;

console.log(edad);

// EJERCICIO 
/*En este desafío vas a recibir un parámetro secreto en la función solution. 
Debes retornar true si el número secreto es mayor a 5 y false si es menor o igual.*/

export function solution(secreto) {
    if (secreto > 5) {
      return true;
    } else {
      return false;
    }
  }