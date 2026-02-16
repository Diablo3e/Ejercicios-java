function numerosAPalabras(arr) {
    const palabras = [
        "cero","uno","dos","tres","cuatro",
        "cinco","seis","siete","ocho","nueve"
    ];

    return arr.map(num => palabras[num]);
}


console.log('27 exercise');
console.log('-------------------------------');
console.log(numerosAPalabras([0,1,2,3,4]));
console.log(numerosAPalabras([5,6,7,8,9]));
console.log('-------------------------------');