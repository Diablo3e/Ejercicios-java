function sumarArreglo(arreglo, ps1, ps2) {
    let sum_arry=0;
    for (let i = ps1; i <= ps2; i++) {
        sum_arry+= arreglo[i];
    }
    return sum_arry;
}






console.log('14 exercise');
console.log('-------------------------------');
console.log(sumarArreglo([1, 2, 3], 1, 2)) // 5
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 6)) // 22
console.log(sumarArreglo([7, 8, 9], 0, 0)) // 0
console.log('-------------------------------');