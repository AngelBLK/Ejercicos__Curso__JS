import saludar, {PI, Saludar} from "./constantes.js";
import {aritmetica as calc} from "./aritmetica.js";

console.log(PI);
console.log(`La suma es : ${calc.sumar(2,2)}\ny la resta es: ${calc.restar(6, 4)}`);
saludar();

console.log(Saludar);

let nuevoSaludo = new Saludar();

nuevoSaludo;