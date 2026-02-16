function numAsteriscos(arr) {
    return arr.filter(e => e === "*").length;
}


console.log('29 exercise');
console.log('-------------------------------');
console.log(numAsteriscos(['', '*', '', '*']));
console.log(numAsteriscos(['*', '*', '*']));
console.log(numAsteriscos([]));

console.log('-------------------------------');