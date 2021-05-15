/**
 * 23) Programa una función que dado un array de números devuelva un objeto con 2 
 * arreglos en el primero almacena los números pares y en el segundo los impares, 
 * pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
 */

const arrayParesImpares = (array = undefined) =>{
    if(array === undefined) return console.warn("No has ingresado un arreglo");
    if(!(array instanceof Array)) return console.warn(`El valor "${array}" NO es una areglo`);

    let arrPares = [],
    arrImpares = [];

    for (let element of array) {
        if(element % 2 === 0){
            arrPares.push(element);
        }else{
            arrImpares.push(element);
        }
    }

    return console.info({
        arrPares,
        arrImpares
    });
}

arrayParesImpares([1,2,3,4,5,6,7,8,9,0]);

// Solucion del profesor

const separarParesImpares = (arr = undefined) =>{
    if(arr === undefined) return console.warn("No has ingresado un arreglo de números");
    if(!(arr instanceof Array)) return console.warn(`El valor "${arr}" NO es una areglo`);
    if(arr.length === 0) return console.warn("No has ingresado un arreglo");
    for (let num of arr) {
        if(typeof num !== "number") return console.error(`El valor "${num}", NO es un número`);
    }

    return console.info({
        pares: arr.filter(num => num % 2 === 0),
        impares: arr.filter(num => num %2 === 1 )
    });
}

separarParesImpares([1,2,3,4,5,6,7,8,9,0]);