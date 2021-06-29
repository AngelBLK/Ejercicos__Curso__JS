/**
 * 22) Programa una función que dado un array devuelva el número 
 * mas alto y el más bajo de dicho array, 
 * pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
 */

const mayorYMenor = (array = undefined) =>{
    if(array === undefined) return console.warn("No has ingresado un arreglo");
    if(!(array instanceof Array)) return console.warn(`El valor "${array}" NO es una areglo`);
    for(let element of array){
        if(typeof element !== "number") return console.error("El arreglo debe ser de puros números");
    }
    let newArr = [];
    newArr.push(Math.max(...array));
    newArr.push(Math.min(...array));

    return console.info(`El array original es [${array}] y el maximo y minimo de este array son [${newArr}]`);
}

// mayorYMenor([1, 4, 5, 99, -60]);
// mayorYMenor();
// mayorYMenor(32);

// Solucion del profesor

const arrayMinMax = (arr = undefined)=>{
    if(arr === undefined) return console.warn("No has ingresado un arreglo de números");
    if(!(arr instanceof Array)) return console.warn(`El valor "${array}" NO es una areglo`);
    if(arr.length === 0) return console.warn("No has ingresado un arreglo");
    for (let num of arr) {
        if(typeof num !== "number") return console.error(`El valor "${num}", NO es un número`);
    }

    return console.info(`Arreglo original ${arr}\nValor mayor ${Math.max(...arr)},\nValor menor ${Math.min(...arr)}`);
}

arrayMinMax([1,10, 5, 2]);