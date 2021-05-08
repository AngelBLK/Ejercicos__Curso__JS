/**
 * 12) Programa una función que determine si un número es 
 * primo (aquel que solo es divisible por sí mismo y 1) 
 * o no, pe. miFuncion(7) devolverá true.
 */

let num = 7;

const esPrimo =(num = undefined)=>{
if(num === undefined) return console.log("No has ingresado un numero a evaluar");
if(num === 0) return console.log("No podemos evaluar a cero");
if(typeof num !== "number") return console.log("No puedo evaluar cadenas de textpo");
if(Math.sign(num) === -1) return console.error("El numero no puede ser negativo"); 
if(num % 2 !== 0) return console.log(`EL numero ${num} es primo`);

return console.log(`${num}, no es primo`);

}
esPrimo(num);

// Solucion del Profesor.

const numeroPrimo = (numero = undefined) =>{
    if(numero === undefined) return console.log("No has ingresado un numero a evaluar");
    if(numero === 0) return console.log("No podemos evaluar a cero");
    if(typeof numero !== "number") return console.log("No puedo evaluar cadenas de texto");
    if(Math.sign(numero) === -1) return console.error("El numero no puede ser negativo"); 
    if(numero === 1) return console.log("No podemos evaluar a uno");

    let divisible = true;

    for(let i = 2; i < numero; i++){
        if((numero % i) === 0){
            divisible = false;
            break;
        }
    }

    return (!divisible) 
    ? console.log(`El número ${numero}, NO es primo`)
    : console.log(`El número ${numero}, SÍ es primo`)
}

numeroPrimo(7);
numeroPrimo("33");
