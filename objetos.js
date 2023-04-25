// Objetos como se declaran, palabras claves, o atributos de mi objeto
var auto = {
    marca: "audi",
    modelo: "R8",
    año: "2022"
};
// Como una propiedad de mi objeto
auto.marca

// Con el mismo ejemplo: metodos de objetos, son funciones que tambien son propiedades del objeto:

var auto = {
    marca: "audi",
    modelo: "R8",
    año: "2022",
    detalleDelAuto: function (){
        // cabe aclara que this es lo mismo que una variable que hace referencia al objeto en el que estamos, es lo incluso podemos traducir este codigo como ${auto.modelo} ${auto.año}. 
        console.log(`Auto:${this.modelo} Año:${this.año}`);
    }
};
//Para acceder a una propiedad del objeto que es una funcion es igual que cualquier otro tipo de propiedad excepto que una funcion debe declararse con los dos ().
auto.detalleDelAuto();

//Objetos: funcion constructora como construir objetos. Existe un problema al momento de construir varios objetos a partir de un código base, los atributos deben cambiar con respecto a la nueva información. Para esto se utiliza una función constructora.
// Una función constructora sirve para crear varios objetos a partir de nueva información, esto es recibido argumentos.
// se declara como una funcion comun y corriente solo que le damos un enfoque diferente si nuestra funcion es auto, veamoslo como crearAuto(y aca en los parametros irian las propiedades de nuestros autos, propiedades generales).
function auto(marca, modelo, año) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
}

// como crear objetos con nuestra funcion constructura usando el operador new o nuevo objeto
// con este codigo estamos creando un objeto con new una instancia de objeto y la almacenamos en una variable que es el auto de samuel y simplemente le damos las propiedades individuales de ese auto
var autoDeSamuel = new auto("Audi", "R8", "2020")


// Construir una funcion constructora y hacer un loop para poder generar una lista de 30 autos que se construyan solos.

var listaDeAutos = []

function auto(marca, modelo, año) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
}

for (let index = 0; index < 5; index++) {
    var marc = prompt("Ingresa la marca del auto: ");
    var model = prompt("Ingresa el modelo del auto: ");
    var annio = prompt("y por ultimo Ingresa el año del auto: ");

    var nuevoAuto = new auto(marc, model, annio);
    listaDeAutos.push(nuevoAuto);
    //este log es simplemente para ir viendo cada auto que ingresamos
    console.log(listaDeAutos[index]);
}

console.log(listaDeAutos);

// Playground: 
// En este desafío vas a recibir un objeto car como parámetro de la función solution. Este objeto puede contener diferentes propiedades. Debes asegurarte de que tenga la propiedad licensePlate (la placa del auto). Si sí la tiene, devuelve el objeto original con la propiedad drivingLicense como true. Si no la tiene, devuelve el objeto original con la propiedad drivingLicense como false.

function solution(car) {
    car.licensePlate ? car.drivingLicense = true : car.drivingLicense = false;
    return car;
}
