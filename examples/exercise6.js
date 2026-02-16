function fizzBuzz(number){ 
    if (number%3 === 0 && number%5 ===0){
        return 'fizzBuzz';
    }else if(number%5 ===0) {
        return 'buzz';        
    }else if(number%3 ===0 ){
        return 'fizz';
    }else{
        return number;
    }

}
console.log('sixth exercise');
console.log('-------------------------------');
console.log(fizzBuzz(6));
console.log(fizzBuzz(20));
console.log(fizzBuzz(30));
console.log(fizzBuzz(8));
console.log('-------------------------------');
