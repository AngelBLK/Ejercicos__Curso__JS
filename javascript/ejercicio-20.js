/**
 * 20) Programa una función que valide que un texto sea un email válido,
 *  pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
 */

// Para validar correos usar la expresion regular -> /[\w]+@{1}[\w]+\.[a-z]{2,3}/

const validaEmail = (mail = "") =>{
    if(!mail) return console.warn("No has ingresado un nombre a evaluar");
    if(typeof mail !== "string") return console.error("No se permiten caracteres números, solo cadenas de texto ");

    let exp = /[\w]+@{1}[\w]+\.[a-z]{2,3}/,
    validate = exp.test(mail);

    if(!validate) return console.error(`La cadena ${mail} NO es una correo electronico valido`);

    return console.info(`La cadena ${mail} SI es una correo electronico valido`);
}

validaEmail("jaidenze@gmail.com");

// Solucion del profesor

const validarEmail = (email = "") =>{
    if(!email) return console.warn("No ingresaste un email");
    if(typeof email !== "string") return console.error("No se permiten caracteres números, solo cadenas de texto ");
    
    let expReg =  /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);

    return (expReg)
    ? console.info(`"${email}", es un email valido`)
    : console.info(`"${email}", NO es un email valido`);
}

validarEmail("jonmircha@gmail.com");

//Bonus fucion ejercico 19 y 20

const validarPatron = (cadena = "", patron = undefined) =>{
    if(!cadena) return console.warn("No ingresaste una cadena de texto a evaluar");
    if(typeof cadena !== "string") return console.error(`El valor "${cadena}" ingresado, No es una cadena valida`);
    if(patron === undefined) return console.warn("No ingresaste un patron a evaluar");
    if(!patron) return console.warn("No ingresaste una patron a evaluar");
    if( !(patron instanceof RegExp) ) return console.error(`El valor "${patron}" ingresado, No es una expreión regular `);
    
    let expReg =  patron.test(cadena);

    return (expReg)
    ? console.info(`"${cadena}", cumple con el patron ingresado`)
    : console.info(`"${cadena}", NO cumple con el patron ingresado`);
}

validarPatron("jaidenze@gmail.com", /[\w]+@{1}[\w]+\.[a-z]{2,3}/);