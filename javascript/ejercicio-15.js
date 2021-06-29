/**
 * 15) Programa una función para convertir números 
 * de base binaria a decimal y viceversa, 
 * pe. miFuncion(100,2) devolverá 4 base 10.
 */

const convertirBinDec = (numero = undefined, base = undefined) =>{
    if(numero === undefined) return console.warn("No has ingresado un número para evaluar");
    if(typeof numero !== "number") return console.error("No podemos evaluar una dato que no sea número");

    if(base === undefined) return console.warn("No has ingresado una base para evaluar");
    if(typeof base !== "number") return console.error("No podemos evaluar una dato que no sea número");

    if( !/([2]|[10])/.test(base)) return console.error("Opcion invalida")

    if(base === 10){
        return console.info(`El número ${numero} decimal seria ${numero.toString(2)} en binario`);
    }else if(base === 2){
        return console.info(`El numero ${numero} binario seria ${parseInt(numero, base)} decimal `);
    }
}

convertirBinDec(10, 2);

// solucion del profesor

const convertirBinarioDecimal = (numero = undefined, base = undefined) =>{
    if(numero === undefined) return console.warn("No ingresaste el número a convertir");
    if(typeof numero !== "number") return console.error(`El valor ${numero} ingreado, No es un número`);
    if(base === undefined) return console.warn("No ingresaste la base a convertir");
    if(typeof base !== "number") return console.error(`El valor ${numero} ingreado, No es un número`);

    if(base === 2){
        return console.info(`${numero} base ${base} = ${parseInt(numero, base)} base 10`);
    } else if(base === 10){
        return console.info(`${numero} base ${base} = ${parseInt(numero, base)} base 10`);
    }

}