/**
 * 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos,
 *  el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, 
 * pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }
 */

const ordenar = (array = undefined) =>{
    if(array === undefined) return console.warn("No has ingresado un arreglo de números");
    if(!(array instanceof Array)) return console.warn(`El valor "${array}" NO es una areglo`);
    if(array.length === 0) return console.warn("No has ingresado un arreglo");
    for (let num of array) {
        if(typeof num !== "number") return console.error(`El valor "${num}", NO es un número`);
    }
    let firstArr = array;
    let ordenado = array.sort((a, b) => a - b);

    return console.info(`El arreglo original es ${firstArr}\ne menor a mayor ${ordenado},\nde mayor a menos es ${ordenado.reverse()}`);
}

ordenar([7, 5,7,8,6]);

// Solucion del profesor

const ordenarArreglo= (arr = undefined) =>{
    if(arr === undefined) return console.warn("No has ingresado un arreglo de números");
    if(!(arr instanceof Array)) return console.warn(`El valor que ingresaste NO es una areglo`);
    if(arr.length === 0) return console.warn("No has ingresado un arreglo");
    for (let num of arr) {
        if(typeof num !== "number") return console.error(`El valor "${num}", NO es un número`);
    }

    return console.info({
        arr,
        asc: Map(el => el).sort(),
        desc: Map(el => el).sort().reverse()
    })
}

