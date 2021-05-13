/**
 * 19) Programa una función que valide 
 * que un texto sea un nombre válido, 
 * pe. miFuncion("Jonathan MirCha") devolverá verdadero.
 */


const validaNombre = (name = "") =>{
    if(!name) return console.warn("No has ingresado un nombre a evaluar");
    if(typeof name !== "string") return console.error("No se permiten caracteres números, solo cadenas de texto ");

    let exp = /^([A-Z]{1}[a-zñáéíóú]+[\s]*)+$/,
    validated = exp.test(name);

    if(!validated) return console.error(`${name}, No es un nombre valido`);

    return console.info(`${name}, es un nombre valido`);
}

validaNombre("Miguel Angel");

// Solucion del profesor
// Acento circunplejo -> ^

const validarNombre = (nombre = "") =>{
    if(!nombre) return console.warn("No ingresaste un nombre");
    if(typeof nombre !== "string") return console.error("No se permiten caracteres números, solo cadenas de texto ");

    let expReg = /^[A-Za-zÑñÁáÉéÍíÓóÚúü\s]+$/g.test(nombre);

    return (expReg)
    ? console.info(`"${nombre}", es un nombre valido`)
    : console.info(`"${nombre}", NO es un nombre valido`);
}

validarNombre("Miguel Angel");