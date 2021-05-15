/**
 * 26) Programa una función que dado un arreglo de números obtenga el promedio,
 *  pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
 */


const sacarPromedio = (array = undefined) => {
    if(array === undefined) return console.warn("No has ingresado un arreglo de números");
    if(!(array instanceof Array)) return console.warn(`El valor "${array}" NO es una areglo`);
    if(array.length === 0) return console.warn("No has ingresado un arreglo");
    for (let num of array) {
        if(typeof num !== "number") return console.error(`El valor "${num}", NO es un número`);
    }

    let prom = (array.reduce((a, b) => a + b)) / array.length;
    return console.info(`El promedio es: ${prom}`);
}

sacarPromedio([9,8,7,6,5,4,3,2,1,0]);

// Solucion del profesor

const promedio = (arr = undefined) =>{
    if(arr === undefined) return console.warn("No has ingresado un arreglo de números");
    if(!(arr instanceof Array)) return console.warn(`El valor que ingresaste NO es una areglo`);
    if(arr.length === 0) return console.warn("No has ingresado un arreglo");
    for (let num of arr) {
        if(typeof num !== "number") return console.error(`El valor "${num}", NO es un número`);
    }

    return console.info(
        arr.reduce((total, num, index, arr) =>{
            total += num;
            if(index === arr.length - 1){
                return `El promedio de [${arr.join(" + ")}] es ${total / arr.length}`
            }else{
                return total; 
            }
        })
    )
}

promedio([9,8,7,6,5,4,3,2,1,0]);