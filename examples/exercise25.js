function terminanConS(arr) {
    return arr.filter(palabra =>
        palabra.toLowerCase().endsWith("s")
    );
}


console.log('25 exercise');
console.log('-------------------------------');
console.log(terminanConS(["pruebas", "arroz", "árbol", "tokens"]));
console.log(terminanConS(["beta", "delta", "gama"]));
console.log(terminanConS([]));
console.log('-------------------------------');