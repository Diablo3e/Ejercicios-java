function numeroDeCaracteres(caracter, caracter_contar_) {

    let conta_caracter = 0;
    for (let i = 0; i < caracter.length; i++) {
        if (caracter[i] == caracter_contar_) {
            conta_caracter++;

        }
    }
    return conta_caracter;
}



console.log('10 exercise');
console.log('-------------------------------');
console.log(numeroDeCaracteres("Hola Mundo", "o"))
console.log(numeroDeCaracteres('pepe el pollo', 'p'))
console.log(numeroDeCaracteres("MMMMM", "m"))
console.log(numeroDeCaracteres("eeee", 'e'))
console.log('-------------------------------');