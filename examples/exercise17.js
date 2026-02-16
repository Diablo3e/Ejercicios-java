
function capitalizar(str) {
    if (str === "") return "";

    return str
        .split(" ")
        .map(palabra =>
            palabra[0].toUpperCase() + palabra.slice(1)
        )
        .join(" "); //toma ese arreglo de palabras y las convierte en una sola cadena 'Hola, Mundo' == 'Hola Mundo' por el ' '
}






console.log('17 exercise');
console.log('-------------------------------');
console.log(capitalizar("hola mundo")) // "Hola Mundo"
console.log(capitalizar("make it real")) // "Make It Real"
console.log(capitalizar("")) // ""
console.log('-------------------------------');
