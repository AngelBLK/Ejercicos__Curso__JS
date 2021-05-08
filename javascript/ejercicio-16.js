/**
 * 16) Programa una función que devuelva el monto final después de aplicar 
 * un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
 */

const descuento = (costo = undefined, rebaja = undefined) => {
    if(costo === undefined) return console.warn("No has ingresado un costo para evaluar");
    if(typeof costo !== "number") return console.error("Los valores ingresados deben ser números");
    if(rebaja === undefined) return console.warn("No has ingresado un costo para evaluar");
    if(typeof rebaja !== "number") return console.error("Los valores ingresados deben ser números");

    return console.log(`El descuento para ${costo} es del ${rebaja}0% tu compra quedaria en: ${(costo - (costo*rebaja))}`);
}

// Solucion del profesor 
const aplicarDescuento = (monto = undefined, descuento = 0) =>{
    if(monto === undefined) return console.warn("No ingresase un monto");
    if(typeof monto !== "number") return console.error(`El valor "${monto}" ingresado, NO es un número`);
    if(monto === 0) return console.error("El monto no puede se 0");
    if(Math.sign(monto)=== -1) return console.error("El monto no puede ser negativo");
    if(typeof descuento !== "number") return console.error(`El valor "${descuento}" ingresado, NO es un número`);
    if(Math.sign(descuento)=== -1) return console.error("El descuento no puede ser negativo"); 

    return console.info(`${(monto)} - ${descuento}% = $${monto - ((monto*descuento)/100)}`);

}


aplicarDescuento(1000, 20);