function transcribir(palabra) {
    let save_p = '';
    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i] =='G') {
            save_p+= 'C';
        }else if(palabra[i]== 'A'){
            save_p+= 'U';
        }else if(palabra[i]== 'C'){
            save_p+= 'G';
        }else if(palabra[i]== 'T'){
            save_p+= 'A';
        }

    }
    return save_p;
}



console.log('15 exercise');
console.log('-------------------------------');
console.log(transcribir("ACGT")) // "UGCA"
console.log(transcribir("ACGTGGTCTTAA")) // "UGCACCAGAAUU"
console.log('-------------------------------');