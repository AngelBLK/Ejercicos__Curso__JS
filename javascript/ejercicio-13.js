/**
 * 13) Programa una función que determine si 
 * un número es par o impar, 
 * pe. miFuncion(29) devolverá Impar.
 */

const esPar = (num = 0) =>{
    if(typeof num !== "number") return console.log(`Trabajaremos solo con números`);
    if(num % 2 === 0) return console.log(`El número ${num}, es par`);
    return console.log(`El numero ${num}, es impar`);
}

esPar(28);

//Solución del profesor.

const numeroParImpar = (numero = undefined) => {
    if(numero === undefined) return console.log("No ingresaste un número a evaluar");
    if(typeof numero !== "number") return console.log("No podemos evaluar cadenas de texto");

    return ((numero % 2) === 0) 
    ? console.log(`El número ${numero}, es Par`)
    : console.log(`El número ${numero}, es Impar`);
}

numeroParImpar();