/**
 * 18) Programa una función que dada una cadena
 *  de texto cuente el número de vocales y consonantes, 
 * pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
 */

const contadorasCadenas = (cadena = "") =>{
    if(typeof cadena !== "string") return console.log(`El elemnto ${cadena} ingresado no puede ser un número`);
    if(!cadena) return console.log("No has ingresado una cadena para evaluar");
    const vocales = ["a", "e", "i", "o", "u"];

    cadenaNueva = cadena.toLowerCase().split(" ").join("");
    let cont = 0;

    for(let i = 0; i < cadenaNueva.length; i++){
        for(let j = 0; j < vocales.length; j++){
            if(cadenaNueva[i] === vocales[j]){
                cont++;
            }
        }
    }

    return console.info(`La cadena ${cadena}, tiene ${cont} vocales y ${(cadenaNueva.length - cont)} consonantes`);
}

contadorasCadenas("Miguel Angel Bohorquez Lopez");
contadorasCadenas(32);

// Solucion del profesor

const contarLetras = (cadena = "") =>{
    if(!cadena) return console.log("No ingresaste una cadena de texto");
    if(typeof cadena !== "string") return console.log(`El valor "${cadena}" ingresado, NO es una cadena de texto`);
    
    let vocales = 0,
    consonante = 0;

    cadena = cadena.toLowerCase();

    for (let letra of cadena) {
        if(/[aeiouáéíóíuü]/.test(letra)) vocales++;

        if(/[bcdfghjklmnñpqrstvwxyz]/.test(letra)) consonante++;
    }

    return console.info(
        cadena,
        vocales,
        consonante
    )
}

contarLetras("Hola mundo");