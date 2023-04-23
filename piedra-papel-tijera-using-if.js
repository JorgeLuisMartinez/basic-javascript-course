//piedra papel o tijera con if
var uno = "piedra";
var dos = "papel";
var tres = "tijera";

function piedraPapelTijera (user, pc){
    if (user === uno && pc === dos){
        console.log("Perdiste");
    } else if(user === dos && pc === tres){
        console.log("Perdiste");
    } else if(user === tres && pc === uno){
        console.log("Perdiste");
    } else {
        console.log("Ganaste");
    }
}

piedraPapelTijera (uno, dos);