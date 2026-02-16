function password(str) {
    return str
        .toLowerCase()
        .replace(/ /g, "")
        .replace(/a/g, "4")
        .replace(/e/g, "3")
        .replace(/i/g, "1")
        .replace(/o/g, "0");
}                 


console.log('20 exercise');
console.log('-------------------------------');
console.log(password("hola"));                  
console.log(password("esta es una prueba"));    
console.log(password(""));     
console.log('-------------------------------');
