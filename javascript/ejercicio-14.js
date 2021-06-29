/**
 * 14) Programa una función para 
 * convertir grados Celsius a Fahrenheit y viceversa, 
 * pe. miFuncion(0,"C") devolverá 32°F.
 */

const convertir = (num = 0, grados="") => {
    grados = grados.toLowerCase();
    if(!grados) return console.log(`No has ingresado la temperatura`);
    if(typeof num !== "number") return console.log(`DEben ser solo numeros`);

    if(grados === "c") return console.log(`La conversion de ${num}°C son ${((num * (9/5))+ 32)}°F`);
    if(grados === "f") return console.log(`La conversion de ${num}°F son ${((num - 32)* (5/9))}°C`);
}

convertir(0, "c");

//Solucion del profesor

const convertirGrados = (grados = undefined, unidad = undefined) =>{
    if(grados === undefined) return console.log("No ingresaste grados a convertir");
    if(typeof grados !== "number") return console.error(`El valor ${grados} ingresado, No es un número`);
    if(unidad === undefined) return console.warn("No ingresaste el tipo de grado a convertir");
    if(typeof unidad !== "string") return console.error(`El valor ${grados} ingresado,, No es una cadena de texto`);
    if(unidad.length !== 1 || !/(C|F)/.test(unidad)) return console.warn("valor de unidad no reconocido");

    if(unidad === "C"){
        return console.info(`${grados}°C = ${(Math.round((grados*(9/5)) + 32))}°F`);
    }else if (unidad === "F"){
        return console.info(`${grados}°C = ${(Math.round((grados - 32) * (5/9)))}°F`);
    }
}

convertirGrados(0, "C");
convertirGrados(32, "F");
convertirGrados(100, "C");