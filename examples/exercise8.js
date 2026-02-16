function sumarRango(number1, number2){
    let suma= 0;
    for (let i = number1; i < number2+1; i++) {
        suma += i;
    }
    return suma;
}

console.log('eight exercise');

console.log('-------------------------------');
console.log(sumarRango(0, 10));
console.log(sumarRango(12, 14));
console.log(sumarRango(5, 5));
console.log('-------------------------------');
