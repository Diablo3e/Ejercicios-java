function sumarArreglo(arreglo){
    let suma_arreglo= 0;
    for(let i=0; i<arreglo.length; i++){
        suma_arreglo+= arreglo[i];
    }
    return suma_arreglo;
}






console.log('11 exercise');
console.log('-------------------------------');
console.log(sumarArreglo([3, 1, 2])) // 6
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // 55
console.log(sumarArreglo([])) // 0
console.log('-------------------------------');