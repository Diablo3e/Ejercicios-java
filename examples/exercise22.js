
function posiciones(arr) {
    let resultado = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            resultado.push(i);
        }
    }
    return resultado;
}


console.log('22 exercise');
console.log('-------------------------------');
console.log(posiciones([1, 2, 3, 4, 5, 6]));
console.log(posiciones([]));
console.log('-------------------------------');