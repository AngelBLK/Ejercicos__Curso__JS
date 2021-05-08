/**
 * Programa una función que valide si una palabra o frase dada, 
 * es un palíndromo (que se lee igual en un sentido que en otro), 
 * pe. mifuncion("Salas") devolverá true.
 */

let texto = "Salas";
const esPalindromo = (cadena = "") => {
    if(!palabra) return console.log("No ingresaste una cadema");
    let nuevaCadena = cadena.toLowerCase().replace(/ /g, "");
    let cadenaInvertida = nuevaCadena.split("").reverse().join("");
    
    return (nuevaCadena === cadenaInvertida) 
    ?console.info(`Si es palindromo`)
    :console.info(`No es palindromo`) ;
}

esPalindromo(texto);