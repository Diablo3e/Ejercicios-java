function distancia(str1, str2) {
    let contador = 0;
    let maxLen = Math.max(str1.length, str2.length);

    for (let i = 0; i < maxLen; i++) {
        if (str1[i] !== str2[i]) contador++;
    }
    return contador;
}


console.log('31 exercise');
console.log(distancia("hola", "hola"));
console.log(distancia("sol", "tol"));
console.log(distancia("carro", "correr"));
console.log('-------------------------------');