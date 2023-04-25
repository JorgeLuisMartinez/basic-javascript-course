//metodos para recorrer arrays, en este ejemplo, la idea es recorrer un array de objetos y como poder acceder a alguna de las propiedades de esos objetos

var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "Tv", costo: 2500},
    { nombre: "Libro", costo: 250},
    { nombre: "Celular", costo: 10000},
    { nombre: "Laptop", costo: 20000},
    { nombre: "Teclado", costo: 500},
    { nombre: "Audifonos", costo: 1700}
];
// vamos a utilizar el primer metodo reservado para filtrar en arrays: filter, dentro de este llamamos una funcion para ejecutar, este va a recibir un parametro parametro el cual vamos a retornar aplicando una condicion esta condicion va a ser el filtro. en este caso retorname los articulos del array articulos que tengan un costo menor a 500
var articulosFiltrados = articulos.filter((articulo)=>{
    return articulo.costo <= 500;
})

articulosFiltrados

// Tenemos un segundo metodo que es map que lo que hace es crear un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
var nombreArticulos = articulos.map((articulo)=>{
    return articulo.nombre
})

nombreArticulos

// el siguiente metodo es el metodo find que consiste en encontrar el primer elemento de un array que cumpla con la condición especificada en la función (callback). Si ningún elemento cumpla con la condición, retornará undefined.

var encuentraArticulo = articulos.find((articulo)=>{
    return articulo.nombre === "Laptop";
})

encuentraArticulo

// aporte diferencia entre find y filter:
// El método find () devuelve el primer valor que coincide de la colección. Una vez que coincida con el valor en los resultados, no verificará los valores restantes en la colección de matriz.
// El método filter () devuelve los valores coincidentes en una matriz de la colección. Verificará todos los valores de la colección y devolverá los valores coincidentes en una matriz.

// for each es uno de los metodos, muy interesante ya que consiste en ejecutar una función (callback) para cada uno de los elementos iterados. Iterar significa repetir una acción varias veces. Este método no retorna ningún valor.

articulos.forEach((articulo)=>{
    console.log(articulo.nombre);
})

// some es muy similar a filter solo que este me va a regresar un booleano si la condicion que ponermos dentro de la funcion se cumple nos retorna true y si no false

articulos.some((articulo)=>{
    return articulo.costo <= 700;
})
