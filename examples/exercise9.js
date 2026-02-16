function numeroDeAes(palabra) {
    let conta_a = 0;
    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i] == 'a') {
            conta_a++;
        }

    }
    return conta_a;
}






console.log('nine exercise');
console.log('-------------------------------');
console.log(numeroDeAes("abracadabra"))
console.log(numeroDeAes("etinol"))
console.log(numeroDeAes(""))
console.log('-------------------------------');
