function likes(megusta){

    if( megusta< 1000){
        return megusta;
    }if(megusta >= 1000 && megusta< 1000000){
        return Math.floor(megusta / 1000) +' K';
    }else if(megusta>=1000000 && megusta < 1000000000){
        return Math.floor(megusta/ 1000000) + ' M';
    }
}
//math.floor redondea un numero hacia abajo, diferente a tofixed que lo hace hacia arriba
console.log('Fifth exercise');
console.log('-------------------------------');
console.log(likes(983));
console.log(likes(1900));
console.log(likes(54000));
console.log(likes(120800));
console.log(likes(25222444));
console.log('-------------------------------');