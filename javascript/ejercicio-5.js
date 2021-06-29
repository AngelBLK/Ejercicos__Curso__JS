/**
 * 5) Programa una función que invierta las palabras de una cadena de texto,
 *  pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
 */

let texto = "Hola mundo";

const invertiCadena = (cadena = "") =>{
    if(!cadena){ 
        console.warn("No has ingresado una cadena");
    }else{
        let arr = cadena.split("");
        let nuevaCadena = arr.reverse().join('');
        console.log(`La cadena ${cadena} invertida seria: ${nuevaCadena}`);
    } 
}

invertiCadena(texto);