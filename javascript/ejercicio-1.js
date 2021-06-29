let texto = "Hola mundo";

const opcionUno = (cadena) => {
    let cont = 0;
    for(let i = 0; i < cadena.length; i++){
        cont++;
    }
    return cont;
}

let resultado1 = opcionUno(texto);
console.log(`Para la primer funcion el resultado es: ${resultado1}`);

const opcionDos = (cadena) =>{
    let cont = 0
    let array = cadena.split("");
    array.forEach(element => {
        cont++;
    });

    return cont;
}

let resultado2 = opcionDos(texto);
console.log(`Para la segunda funcion el resultado es: ${resultado2}`);

const opcionTres = (cadena = "") => {
    
    (!cadena)? console.warn("No ingresaste ningunga cadena")
    :console.info(`La cadena ${cadena} tiene: ${cadena.length} caracteres` );
}

opcionTres(texto);
opcionTres();

