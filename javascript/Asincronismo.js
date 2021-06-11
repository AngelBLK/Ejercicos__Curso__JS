/**
 ****** Asincronismo ******
*/

// **** Temporizadores. **** 


// console.log("hola mundo");
// setTimeout(() =>{ // Se ejecuta una sola vez 
//     console.log("Ejecutando un setTimeout");
// }, 3000);

// setInterval(() => { // Se ejecuta en cierto intervalo del tiempo.
//     console.log(new Date().toLocaleTimeString()); //toLocaleTimeString regresa la fecha
// }, 1000);

// clearTimeout Cancela el setTimeout, pero el setTime debe estar en una variable

//let temp = setInterval(() => { // Se ejecuta en cierto intervalo del tiempo.
//    console.log(new Date().toLocaleTimeString()); //toLocaleTimeString regresa la fecha
//}, 1000);

//clearInterval(temp);


/**  Procesamiento single thread y Multi thread
* Operaciones de CPU y Operaciones de I/O.
* Operaciones Concurrentes y Paralelas.
* Operaciones Bloqueantes y No Bloqueantes.
* Operaciones Síncronas y Asíncronas .
*/

/** 
 * Código Síncrono Bloqueante.
*/
/*(() =>{
    console.log("Código Síncrono");
    console.log("Inicio");

    function dos(){
        console.log("Dos");
    }

    function uno(){
        console.log("Uno");
        dos();
        console.log("Tres");
    }

    uno();
    console.log("Fin");

})();

console.log("**********");
/** 
 * Código Asíncrono No Bloqueante.
*/

/*(() =>{
    console.log("Código Asíncrono");
    console.log("Inicio");


    function dos(){
        setTimeout(function(){
            console.log("Dos");
        }, 1000);
    }

    function uno(){
        setTimeout(function(){
            console.log("Uno");
        }, 0);
        dos();
        console.log("Tres");
    }

    uno();
    console.log("Fin");
})();*/

/** Callbacks 
 *  Funcion que se ejecuta despues de 
 *  otra.
*/

// function cuadradoCallback(value, callback){
//     setTimeout(() => {
//         callback(value, value * value);
//     },0 | Math.random()*1000);
// }

// cuadradoCallback(0, (value, result)=>{
//     console.log("Inicia Callbac");
//     console.log(`Callback: ${value}, ${result}`);
//     cuadradoCallback(1, (value, result)=>{
//         console.log(`Callback: ${value}, ${result}`);
//         cuadradoCallback(2, (value, result)=>{
//             console.log(`Callback: ${value}, ${result}`);
//             cuadradoCallback(3, (value, result)=>{
//                 console.log(`Callback: ${value}, ${result}`);
//             });
//         });   
//     });
    
// });

/** Promesas 
 * Se puede ver como un if - else, si la 
 * promesa se cumple se ejecuta el resolve, 
 * en caso qeu falle, se ejecutara un 
 * reject.
 */

// function cuadradoPromise(value){
//     if(typeof value !== "number") return Promise.reject(`Error, el valor "${value}" ingresado no es un número`);

//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             resolve({
//                 value,
//                 result: value * value
//             });
//         },0 | Math.random()*1000);
//     });  
// }

// cuadradoPromise(0)
//     .then((obj) =>{
//         //console.log(obj);
//         console.log("Inicia promise");
//         console.log(`Promise: ${obj.value}, ${obj.result}`);
//         return cuadradoPromise(1);
//     })
//     .then(obj => {
//         console.log(`Promise: ${obj.value}, ${obj.result}`);
//         return cuadradoPromise(2);
//     })
//     .then(obj => {
//         console.log(`Promise: ${obj.value}, ${obj.result}`);
//         return cuadradoPromise(3);
//     })
//     .then(obj => {
//         console.log(`Promise: ${obj.value}, ${obj.result}`);
//         return cuadradoPromise(4);
//     })
//     .then(obj => {
//         console.log(`Promise: ${obj.value}, ${obj.result}`);
//         return cuadradoPromise(5);
//     })
//     .then(obj => {
//         console.log(`Promise: ${obj.value}, ${obj.result}`);
//         console.log("Fin de la promesa");
//     })
//     .catch(err => console.error(err));

    // Las promesas combienen cuando hay una concatenacion de varios procesos asincronos.


/** Funciones asincronas Async and Await  */

// function cuadradoPromise(value){
//     if(typeof value !== "number") return Promise.reject(`Error, el valor "${value}" ingresado no es un número`);

//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             resolve({
//                 value,
//                 result: value * value
//             });
//         },0 | Math.random()*1000);
//     });  
// }

// async function funcionAsincronaDeclarada(){
//     try{
//         console.log("Inicio Aync Function");
//         let = obj = await cuadradoPromise(0);
//         console.log(`Async Function: ${obj.value}, ${obj.result}`);

//         obj = await cuadradoPromise(1);
//         console.log(`Async Function: ${obj.value}, ${obj.result}`);

//         obj = await cuadradoPromise(2);
//         console.log(`Async Function: ${obj.value}, ${obj.result}`);

//         obj = await cuadradoPromise(3);
//         console.log(`Async Function: ${obj.value}, ${obj.result}`);

//         obj = await cuadradoPromise(4);
//         console.log(`Async Function: ${obj.value}, ${obj.result}`);

//         obj = await cuadradoPromise(5);
//         console.log(`Async Function: ${obj.value}, ${obj.result}`);
//     }catch(err){
//         console.error(err);
//     }
// }

// funcionAsincronaDeclarada();

// const funcionAsincronaExpresada  = async() =>{
//     try{
//         console.log("Inicio Aync Function");
//         let = obj = await cuadradoPromise(6);
//         console.log(`Async Function: ${obj.value}, ${obj.result}`);

//         obj = await cuadradoPromise(7);
//         console.log(`Async Function: ${obj.value}, ${obj.result}`);

//         obj = await cuadradoPromise(8);
//         console.log(`Async Function: ${obj.value}, ${obj.result}`);

//         obj = await cuadradoPromise(9);
//         console.log(`Async Function: ${obj.value}, ${obj.result}`);

//         obj = await cuadradoPromise(10);
//         console.log(`Async Function: ${obj.value}, ${obj.result}`);

//     }catch(err){
//         console.error(err);
//     }
// }

// funcionAsincronaExpresada();

/** Nuevos tipos de datos */
// Se mantienen privadas y perimiten crear identificadores unicos y de referencia 
// Es una buena practica crearlos como constantes 


// let id = "hola";
// let id2 = Symbol("hola");

// console.log(id === id2);

// const NOMBRE = Symbol();
// const SALUDAR = Symbol();

// const persona = {
//     [NOMBRE]: "Dante",
//     edad: 23
// }

// console.log(persona[NOMBRE]); // Asi accedemos al valor de la referencia
// console.log(persona[SALUDAR] = function(){
//     console.log(`Hola`);    
// });

// console.log(persona);
// persona[SALUDAR](); // Asi se accede a una funcion 

// for(let propiedad in persona){
//     console.log(propiedad);
//     console.log(persona[propiedad]);
// }

// console.log(Object.getOwnPropertySymbols(persona));

/** Estructura set: Similar a un array,, pero de datos unicos */

// const SET = new Set([1,2,3,3,4,4,5,6,7,8,"Hola", {}, true, "hola", "adios"]);
// console.log(SET);
// console.log(SET.size); // size es una propiedad para saber la longitud.
// const SET2 = new Set();
// SET2.add(1);
// SET2.add(1);
// SET2.add(2);
// SET2.add(true);
// SET2.add(true);
// SET2.add("hola");

// console.log(SET2);

// for(item of SET){
//     console.log(item);
// }
// console.log("***************");
// SET2.forEach(item => console.log(item));
// console.log("***************");

// let arreglo = Array.from(SET); // Asi se pueden pasar las estructuras de Set a un arreglo, para acceder a los elementos por su posicion.
// console.log(arreglo[0]);

// SET.delete("Hola"); // Para borrar elementos dentro de un Set.
// console.log(SET);

// console.log(SET.has("hola")); // has: para saber si un elemento se encuentra dentro de la estructura Set.

// SET.clear() // Para limpiar la estructura 
// console.log(SET);

/** Maps: Son objetos par almacenar conjuntos de valores asociados a manera de objeto. */

// let mapa = new Map();
// // Para agregar valores
// mapa.set("nombre", "Dante");
// mapa.set("edad", 23);
// // tambien cuenta con el metodo size para saber su tamaño.
// console.log(mapa);
// console.log(mapa.has("nombre"));
// // Para obtener los valores.
// console.log(mapa.get("nombre"));
// //Para eliminar datos de la coleccion.
// mapa.delete("edad");
// console.log(mapa);
// // Se pueden generar llaves que no sean cadenas de texto, no es muy aconsejable usarlo.
// mapa.set(19, "diecinueve");
// mapa.set({}, {});
// mapa.set(false, "falso");
// // Se puede recorrer con:
// for(let [key, value] of mapa){
//     console.log(`Llave: ${key}, Valor: ${value}`);
// }

// console.log("\n********************************\n")

// // Segunda forma de iniciar los valores a un Map.

// const mapa2 = new Map([
//     ["nombre", "Kenai"],
//     ["edad", 7],
//     ["animal", "perro"] 
// ]);

// console.log(mapa2)

// const llavesMapa2 = [...mapa2.keys()];
// const valoresMapa2 = [...mapa2.values()];
// console.log(llavesMapa2);
// console.log(valoresMapa2);

/** weakSets & weakMaps: solamente pueden almacenar referencias debiles, es decir, las llaves deben ser de tipo objeto. */
// No se pueden iterar
// Se puede ver si tiene alguna referencia con has();
// const ws = new WeakSet(); //WeakSet
// let valor1 = {"valor": 1},
// valor2 = {"valor2": 2},
// valor3 = {"valor3": 3};
// ws.add(valor1);
// ws.add(valor2);
// ws.add(valor3);
// console.log(ws);

// setInterval(() => console.log(ws), 1000);

// setTimeout(() => {
//     valor1 = null;
//     valor2 = null;
//     valor3 = null;
// }, 5000);

// WeakMap.

// const wm = new WeakMap()
// let llave1 = {};
// let llave2 = {};

/**Iterables e Iteradores */
// Iterable es el elemnto cuyo contenido se puede recorrer.
// Iterador elemento que recorre la estructura iterable.

// const ITERABLE = [1,2,3,4,5];
// //Accedemos al iterador de nuestra variable interable.
// const ITERADOR = ITERABLE[Symbol.iterator]();
// console.log(ITERADOR.next())
/**
 * const ITERABLE =  "Hola mundo";
 * const ITERABLE = new Set([1,2,3,4,5,6,6]);
 * const ITERABLE = new Map([["nombre", "dante"], ["edad", 23]]);
 * 
 */

// console.log(ITERADOR);
//     let next = ITERADOR.next();

//     while(!next.done){
//         console.log(next.value);
//         next = ITERADOR.next();
//     }

/** Generators 
 * vuelven iterables las funciones.
*/
//Estructura de un generador, Seguido de la palabra recervada function lleva un *(Asterisco).
// function* iterable(){
//     // Yield funciona como un return que sera llamado cuando se ejecute la funcion next de un iterador.
//     yield "Hola";
//     console.log("Hola consola");
//     yield "Hola de nuevo"
// }

// let iterador = iterable();

// for(let y of iterador){
//     console.log(y);
// }

// //Guardar en un arreglo el resultado de una funcion generadora(Solo los yield).

// const ARR = [...iterable()];

// function cuadrado(valor){
//     setTimeout(()=> {
//         return console.log({valor, resultado: valor * valor});
//     }, Math.random()*1000);

    
// }


// function* generador(){
//     console.log("Iniciando generator");
//     yield cuadrado(0);
//     yield cuadrado(1);
//     yield cuadrado(2);
//     yield cuadrado(3);
//     yield cuadrado(4);
//     yield cuadrado(5);
//     console.log("termina generador");
// }

// let gen = generador();
// for(let y of gen){
//     console.log(y);
// }


/** Proxies.
 *  Permite crear un objeto de un  objeto literal.
 *  recibe un objeto literal, genera una copia y permite ciertas validaciones.
 * Usa handle.
*/

// const peronsa = {
//     nombre: "",
//     apellido: "",
//     edad: 0
// };
// const manejador = {
//     set(obj, propiedad, valor){
//         if(Object.keys(obj).indexOf(propiedad) === -1){
//             return console.error(`La propiedad ${propiedad}, no existe en el objeto persona`);
//         }

//         if((propiedad === "nombre" || propiedad === "apellido") && !(/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g.test(valor))){
//             return console.error(`La propiedad ${propiedad}, Solo acepta letras y espacios en blanco`);
//         }  
//         obj[propiedad] = valor;
//     }
// };
// const dante = new Proxy(peronsa, manejador);
// dante.nombre = "Dante9";
// dante.apellido = "LK";
// dante.edad = 23;
// dante.twitter = "@danteLK"
// console.log(dante);

/**Propiedades dinámicas de los objetos */
// let aleatorio = Math.round(Math.random() * 100 + 5); 
// const objUsuarios = {
//     [`id_${aleatorio}`]: "valor aleatorio"
// };
// console.log(objUsuarios);
// const usuarios = ["Mario", "Rafa", "Dante", "Ketzali"];
// usuarios.forEach((usuario, index) => objUsuarios[`id_${index}`] = usuario);
// console.log(objUsuarios);

/** this 
 * Hace referencia al contexto donde estemos utilizando las cosas.
*/

// this.nombre = "Contexto global";

// function imprimir(){
//     console.log(this.nombre);
// }

// imprimir();

// const obj = {
//     nombre: "contexto Objeto",
//     imprimir: function(){
//         console.log(this.nombre);
//     }
// }

// obj.imprimir();

// // Las Arrow function no generan un scope, se rigen por el scope global.

// function Persona(nombre){
//     this.nombre = nombre;
//     //return console.log(this.nombre);

//     return () => console.log(this.nombre);
    
// }

// let dante = new Persona("Dante");
// dante();

/**
 *  call, 
 *  apply, 
 *  bind
 */

// this.lugar = "Contexto Global";

// function saludar(saludo, aQuien){
//     console.log(`${saludo} ${aQuien} desde el ${this.lugar}`);
// }

// saludar();

// const obj = {
//     lugar: "Contexto Objeto"
// }

// saludar.call(obj, "Hola", "Dante"); // recibe los demas atributos separandolos por comas.
// saludar.apply(obj, ["Adios", "Dante"]); // recibe los demas atributos por un arreglo.

// bind hace un enlace, como las arrow function no creo un scope

// const persona = {
//     nombre: "Dante",
//     saludar: function(){
//         console.log(`Hola ${this.nombre}`)
//     }
// }

// persona.saludar();

// const otraPersona ={
// saludar: persona.saludar.bind(this)
// }

// otraPersona.saludar();

/** JSON: JavaScript Object Notation */

//parse: Analiza una notación JSON y la convierte en un tipo de dato JS

// console.log(JSON.parse("{}"));
// console.log(JSON.parse("[]"));
// console.log(JSON.parse("[1,2,3,4]"));

// // stringify: Convierte un tipo de dato JS a notación JSON.

// console.log(JSON.stringify({}));
// console.log(JSON.stringify([]));
// console.log(JSON.stringify([1,2,3]));