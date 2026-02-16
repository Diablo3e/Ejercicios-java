function palabrasANumeros(arr) {
    const mapa = {
        cero:0, uno:1, dos:2, tres:3, cuatro:4,
        cinco:5, seis:6, siete:7, ocho:8, nueve:9
    };

    return arr.map(palabra =>
        mapa[palabra] ?? -1
    );
}




console.log('28 exercise');
console.log('-------------------------------');
console.log('-------------------------------');
console.log(palabrasANumeros(["cero","uno","dos","tres","what?","cuatro"]));
console.log(palabrasANumeros(["cinco","seis","siete","ocho","nueve"]));
console.log('-------------------------------');