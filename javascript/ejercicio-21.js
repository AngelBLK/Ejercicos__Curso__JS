/**
 * 21) Programa una función que dado un array numérico devuelve 
 * otro array con los números elevados al cuadrado, 
 * pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
 */

const powArray = (array = undefined) =>{
    if(array === undefined) return console.warn("No has ingresado un arreglo");
    if(!(array instanceof Array)) return console.warn(`El valor "${array}" NO es una areglo`);
    let newArray = [],
    newAdd = 0;
    for(let element of array){
        if(typeof element !== "number") return console.error("El arreglo debe ser de puros números");
        newAdd = Math.pow(element, 2);
        newArray.push(newAdd);
    }

    return console.info(`El array original era ${array} y el nuevo array es: ${newArray}`);
}

powArray([1, 4, 5]);

