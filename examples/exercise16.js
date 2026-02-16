function capitalizar(frase) {

    if (frase.length === 0) return "";
    return frase[0].toUpperCase() + frase.slice(1);
}




console.log('16 exercise');
console.log('-------------------------------');
console.log(capitalizar("pedro")) // "Pedro"
console.log(capitalizar("hola mundo")) // "Hola mundo"
console.log(capitalizar("")) // ""
console.log('-------------------------------');
