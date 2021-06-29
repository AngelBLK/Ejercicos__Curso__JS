export const PI = Math.PI;

let usuario = "Miguel";
const password = "12345"; 


const saludar = () => console.log("hola modulos +ES6");
export default saludar ;

export class Saludar{
    constructor(){
        console.log("Hola módulos de clase +ES6");
    }
}

// Si es constante o variable primero haz la asignacion y despues exporta