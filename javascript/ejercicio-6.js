/**
 * 6) Programa una función para contar el número 
 * de veces que se repite una palabra en un texto 
 * largo, 
 * pe. miFuncion("hola mundo adios mundo", "mundo") 
 * devolverá 2.
 */

let textos = "Hola mundo y adios mundo";

const vecesPalabra = (cadena = "", palabra = "") => {
    if(!cadena) return console.log("No has ingresado una cadena");
    if(!palabra){ 
        console.log("No ingresaste una palabra a abuscar");
    } else {
        let count = 0;
        let palabraNueva = cadena.replace(/,/g, "").split(" ");

        for(let i = 0; i < palabraNueva.length; i++){
            if(palabra === palabraNueva[i]) count++;
        }
        console.log(`La palabra '${palabra}' se repite ${count} veces`);
    }
}

vecesPalabra(textos, "mundo");

// Solucion del profesor

const textoEnCadena = (cadena = "", texto = "") =>{
    if(!cadena) return console.warn("No ingresaste el texto largo");
    if(!texto) return console.warn("No ingresaste la palabra a evaluar");

    let i = 0,
    contador = 0;

    while(i !== -1){
        i = cadena.indexOf(texto, i);
        if(i !== -1){
            i++;
            contador++
        }
    }
    return console.info(`La palabra ${texto} se repite ${contador} veces`);
}

textoEnCadena(textos, "mundo");