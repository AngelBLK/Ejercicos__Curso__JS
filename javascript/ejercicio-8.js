/**
 * 8) Programa una función que elimine cierto patrón de 
 * caracteres de un texto dado, 
 * pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") 
 * devolverá  "1, 2, 3, 4 y 5.
 */

let texto = "xyz1, xyz2, xyz3, xyz4 y xyz5";

const borrarPatron = (cadena = "", palabra ="") =>{
    if(!cadena) return console.warn(`No ingresaste una cadena de texto`);
    if(!palabra) return console.warn(`No ingresaste una patron a eliminar`);
    let regex = new RegExp(`${palabra}`, "g");
    console.log(regex);
    return console.info(cadena.replace(regex, ""));
}

borrarPatron(texto,"xyz");

// Solucion del profesor 

const aliminarCaracteres = (texto = "", patron = "") =>{
    (!texto)
    ? console.warn("No ingresaste un texto")
    :(!patron) ? console.warn("No ingresaste un patron")
    :console.info(texto.replace(new RegExp(patron, "ig"), ""));
}