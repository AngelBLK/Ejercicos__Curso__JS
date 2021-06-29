/**
 * 9) Programa una función que obtenga un 
 * numero aleatorio entre 501 y 600.
 */

let max = 600, min = 500;

const getRandom = (max = undefined, min = undefined) =>{
    if(max === undefined) return console.warn("No ingresaste un numero maximo");
    if(min === undefined) return console.warn("No ingresaste un numero minimo");
    
    return Math.round(Math.random() * (max - min) + min);
}

let task = getRandom(max, min);
// console.log(task);

// Solucion del profesor 

const aleatoria = () => console.info(Math.round((Math.random() * 100) + 500));

aleatoria();