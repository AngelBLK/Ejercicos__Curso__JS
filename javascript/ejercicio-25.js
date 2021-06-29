/**
 * 25) Programa una función que dado un arreglo de elementos, elimine los duplicados,
 *  pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
 */

let duplicados = ["x", 10, "x", 2, "10", 10, true, true];

let unicos = Array.from(new Set(duplicados));

const eliminarDuplicados = (array = undefined) => {
    if(array === undefined) return console.warn("No has ingresado un arreglo de números");
    if(!(array instanceof Array)) return console.warn(`El valor "${array}" NO es una areglo`);
    if(array.length === 0) return console.warn("No has ingresado un arreglo");

    array = Array.from(new Set(array));
    return console.info(`El array sin duplicados queda:  [${array}]`);
}

eliminarDuplicados(["x", 10, "x", 2, "10", 10, true, true]);

// Solucion del profesor

const quitarDuplicado = (arr) =>{
    if(arr === undefined) return console.warn("No has ingresado un arreglo de números");
    if(!(arr instanceof Array)) return console.warn(`El valor que ingresaste NO es una areglo`);
    if(arr.length === 0) return console.warn("No has ingresado un arreglo");
    
    if(arr.length === 1) return console.warn("El arrglo debe tener al menos 2 elementos");

    return console.info({
        original: arr,
        //
        sinDuplicados: arr.filter((value, index, self) => self.indexOf(value) === index)
        // utilizando Set
        //(... new Set(arr))
    })

}

