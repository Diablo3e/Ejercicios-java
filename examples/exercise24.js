function empiezanConA(arr) {
    return arr.filter(palabra =>
        palabra[0]?.toLowerCase() === "a"
    );
}


console.log('24 exercise');
console.log('-------------------------------');
console.log(empiezanConA(["beta", "alfa", "Arbol", "gama"]));
console.log(empiezanConA(["beta", "delta", "gama"]));
console.log(empiezanConA([]));
console.log('-------------------------------');