/**
 * 17) Programa una función que dada una fecha válida determine
 *  cuantos años han pasado hasta el día de hoy, 
 * pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
 */



const aniosTrasncurridos = (anio = undefined, mes = undefined, dia = undefined ) => {
    if(anio === undefined) return console.warn("No has ingresado un año para evaluar");
    if(mes === undefined) return console.warn("No has ingresado un mes para evaluar");
    if(dia === undefined) return console.warn("No has ingresado un dia para evaluar");
    if(typeof anio !== "number" || typeof mes !== "number" || typeof dia !== "number" ) return console.error("debemos trabajar las fechas como números");

    const toDay = new Date();   
    const userDate = new Date(anio, mes, dia);

    return console.log(toDay.getFullYear() - userDate.getFullYear());
}

aniosTrasncurridos(1984, 4, 23);

// Solucion del profesor.

const calcularAnios = (fecha = undefined) =>{
    if(fecha === undefined) return console.warn("No ingresaste una fecha");
    if( !(fecha instanceof Date)) return console.error(`El valor ${fecha} ingresado, NO es una fecha valida`);

    let hoyMenosFecha =  new Date().getTime() - fecha.getTime(),
    aniosEnMS = 1000 * 60 * 60 * 24 * 365, // esta expresion es para calcular años, desde segundos(Que son 1000 milisegundos en js), segundos, minutos, horas, dias y el año;
    aniosHumanos = Math.floor(hoyMenosFecha/aniosEnMS);

    return (Math.sign(aniosHumanos) === -1) 
    ? console.info(`Faltan ${Math.abs(aniosHumanos)} años para el año ${fecha.getFullYear()}`)
    : (Math.sign(aniosHumanos) === 1) 
    ? console.info(`Han pasado ${Math.abs(aniosHumanos)} años, desde ${fecha.getFullYear()}`)
    : console.info(`Estamos en el año actual, ${fecha.getFullYear()}`);
}

calcularAnios(new Date());
calcularAnios(new Date(1998, 7, 12 ));
calcularAnios(new Date(2099, 7, 12 ));