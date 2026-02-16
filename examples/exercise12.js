function multiplicarArreglo(arreglo) {
    let mult_arreglo = 1;
    for (let i = 0; i < arreglo.length; i++) {
        mult_arreglo = mult_arreglo * arreglo[i];
    }
    return mult_arreglo;
}





console.log('12 exercise');
console.log('-------------------------------');
console.log(multiplicarArreglo([4, 1, 2, 3])) // 24
console.log(multiplicarArreglo([1, 2, 3, 4, 5, 6, 7, 8])) // 40320
console.log(multiplicarArreglo([])) // 1
console.log('-------------------------------');