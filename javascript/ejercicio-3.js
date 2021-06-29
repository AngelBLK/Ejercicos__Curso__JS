/**
 * 3) Programa una función que dada una String te devuelva 
 * un array de textos separados por cierto caracter.
 * Ejemplo: miFuncion("Hola mundo") retorna ["hola", "mundo"]
 */

let texto = "Hola,mundo";

const textosSeparados = (cadena = "", caracter) =>{ 
    (!cadena) ? console.warn(`No has ingresado, ninguna cadena`)
    : console.info(cadena.split(caracter));
} 

textosSeparados(texto, ",");
/**
 * Solución del profesor.
 */
const cadenaAAreglo = (cadena = "", separador = undefined) =>{ 
    (!cadena) ? console.warn(`No has ingresado, ninguna cadena`)
    :(!caracter === undefined) ? console.warn(`No has ingresado, ningun separador`)
    : console.info(cadena.split(separador));
} 