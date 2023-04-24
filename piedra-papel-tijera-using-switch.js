//piedra papel o tijera con switch
var piedra = "piedra";
var papel = "papel";
var tijera = "tijera";

function piedraPapelTijera (user, pc){
    switch (true){
    case user === piedra && pc === papel:
        console.log("perdiste");
        break;
    case user === tijera && pc === piedra:
        console.log("perdiste");
        break;
    case user === papel && pc === tijera:
        console.log("perdiste");
        break;
    case user === tijera && pc === papel:
        console.log("ganaste");
        break;
    case user === piedra && pc === tijera:
        console.log("ganaste");
        break;
    case user === papel && pc === piedra:
        console.log("ganaste");
        break;
    case user == pc:
        console.log("empate");
        break;
    }
}

piedraPapelTijera (piedra, piedra);

// Playground:
/*En este desafío debes retornar un mensaje distinto dependiendo del artículo de tecnología que recibas:

Si recibes una "computadora", debes retornar el mensaje "Con mi computadora puedo programar usando JavaScript".
Si recibes un "celular", debes retornar el mensaje "En mi celular puedo aprender usando la app de Platzi".
Si recibes un "cable", debes retornar el mensaje "¡Hay un cable en mi bota!".
Y si no recibes ninguno de estos valores, debes retornar el mensaje "Artículo no encontrado". */

function solution(article) {
    switch (article) {
        case "computadora":
            return "Con mi computadora puedo programar usando JavaScript";
        case "celular":
            return "En mi celular puedo aprender usando la app de Platzi";
        case "cable":
            return "¡Hay un cable en mi bota!";
        default:
            return "Artículo no encontrado";
    }
}

solution("computadora");