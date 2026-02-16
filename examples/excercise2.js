function calcularimpuestos(edad, ingresos){
    if (edad >= 18 && ingresos >= 1000){
        return ingresos *0.40;

    }else{
        return 0;
    }

}


console.log("SECOND EXERCISE");
console.log(calcularimpuestos(18, 1000));
console.log(calcularimpuestos(40, 10000));
console.log(calcularimpuestos(17, 5000));
console.log(calcularimpuestos(30, 500));
console.log('--------------------------------');
