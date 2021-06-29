/**
 * 4) Progrmama una funcion que repita un texto X veces.
 * Ejemplo: mifuncion("Hola mundo") -> Hola mundo Hola mundo.
 */
let texto = "Hola mundo ";

const repetirTexto = (cadena = "", count = undefined) =>{
    (!count === undefined) ? console.warn(`No ingresaste una cantidad`)
    :(!cadena) ? console.warn(`No ingresaste una cadena`)
    :console.info(`${cadena.repeat(count)}`);
}

/** Solucion del profesor 
*/

const repetirElTexto = (text = "", veces = undefined) =>{
    if(!texto) return console.warn("No ingresaste un texto");
    if(veces === undefined) return console.error("No ingresaste el número de veces a repetir el texto");
    if(veces === 0) return console.error("El número de veces no puede ser 0");
    if(Math.sign(veces) === -1) return console.error("El numero ingresado no puede ser negativo");
    for(let i = 1; i <= veces; i++) console.info(`${texto}, ${i}`);
}

repetirElTexto(texto, 3);
repetirElTexto(texto, );

/**
 * Ejercios a resolver antes de ver el video de solucion.
 * 
 * 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
 * 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
*  7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
*  8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
 */