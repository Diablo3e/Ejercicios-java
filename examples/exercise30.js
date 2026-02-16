function numAsteriscos(matriz) {
    let contador = 0;
    for (let fila of matriz) {
        for (let e of fila) {
            if (e === "*") contador++;
        }
    }
    return contador;
}


console.log('30 exercise');
console.log('-------------------------------');
console.log(numAsteriscos([
    ['*', '', '*'],
    ['', '*', ''],
    ['*', '', '*']
]));

console.log('-------------------------------');