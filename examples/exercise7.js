function contarRango(number1, number2) {
    let conta = 0;
    for (let i = number1; i < number2-1; i++) {
        conta++;
    }
    return conta;
}
console.log('seven exercise');
console.log('-------------------------------');
console.log(contarRango(1, 9));
console.log(contarRango(1332, 8743));
console.log(contarRango(5, 6));
console.log('-------------------------------');
