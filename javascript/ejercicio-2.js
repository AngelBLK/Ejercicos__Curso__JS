/**
 * 2) Programar una función que devuelva el 
 * texto recortado segun el numero de caracteres 
 * indicados.
 * Ejemplo: miFunción("Hola mundo") devolvera "hola".
 */

let texto = "Hola mundo";
const recorte = (cadena = "", cortes = undefined) => {
    (!cadena) ? console.warn("No ingresaste una cadena")
    :(longitud === undefined) ? console.info("No ingresaste la longitud para recortar")
    :console.info(`La cadena "${cadena}" queda como: ${cadena.slice(0, cortes)}`);
}

recorte(texto, 16);

/**
 * Codigo del profesor.
 */

const recorteCadena = (cadena = "", cortes = undefined) => {
    (!cadena) ? console.warn("No ingresaste una cadena")
    :console.info(`La cadena "${cadena}" queda como: ${cadena.slice(0, cortes)}`);
}
