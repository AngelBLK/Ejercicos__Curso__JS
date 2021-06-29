/**
 * Programa una función que reciba un número 
 * y evalúe si es capicúa o no 
 * (que se lee igual en un sentido que en otro), 
 * pe. miFuncion(2002) devolverá true.
 */

let num = 212.212;


const esCapicua = (num = undefined) =>{
    if(num === undefined) return console.log(`No ingresaste un numero a evaluar`);
    if(num < 0) return console.log("Trabajaremos solo con positios por favor");

    num = num.toString();
    let reverseString = num.split("").reverse().join("");
    if(num === reverseString) return console.log(`El numero ${num} es capicúo: ${reverseString}`);
    else return console.log(`El numero ${num} no es capicúo: ${reverseString}`);
}

esCapicua(num);

// Solucion del profesor

const capicua = (numero = 0) =>{
    if(!numero) return console.warn("No ingresaste un numero");
    if(typeof numero !== "number" ) return console.error(`El valor "${numero}" ingresado NO es un numero!`);

    numero = numero.toString();
    let alReves = numero.split("").reverse().join("");

    return (numero === alReves) ? console.info(`Si es capícua, Número original ${numero}, Número al reves ${alReves}`)
    : console.info(`No es capícua, Número original ${numero}, Número al reves ${alReves}`);
}

capicua(212.212)



