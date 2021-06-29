/**
 * Factorial de un numero.
 */

let numero = 3;

const elFactorial = (num = undefined) => {
    if(!num === undefined) return console.log(`No has ingresado un número `);
    if(num === 0) return 1;
    else return num * elFactorial(num - 1);
}

console.log(elFactorial(numero));

//Solucion del profesor 

const factorial = (numero = undefined) =>{
    if(numero === undefined) return console.warn("No ingresaste un número");
    if(typeof numero !== "number")  return console.error(`El valor ${numero} ingresado No es numero`);
    if(numero === 0) return console.error("El numero no puede ser 0");
    if(Math.sign === -1) return console.error("El numero no puede ser negativo"); 

    let factorial = 1;

    for(let i = numero; i > -1 ; i--){
        factorial *= i;
    }

    return console.info(`El factorial de ${numero} es ${factorial}`);
}