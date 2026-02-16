function ibm(peso, altura) {
    let result = peso / altura ** 2;
    if (result < 18.5) {
        return 'Bajo de peso';
    } if (result > 18.5 && result < 24.9) {
        return 'Normal';
    } if (result > 25 && result < 29.9) {
        return 'Sobrepeso';
    } if (result >= 30) {
        return 'Obeso';
    }

}

console.log('THIRD EXERCISE')
console.log(ibm(65, 1.8));
console.log(ibm(72, 1.6));
console.log(ibm(52, 1.75));
console.log('----------------------')