/**
 * DEstructuración: es una expresión que nos permite desempaquetar 
 * valores de arrays u objetos en grupos de variables, 
 * permitiéndonos simplificar y crear código más legible.
 */

/**
 * En arrays
 */
const numeros = [1, 2, 3];
const [] = numeros;
const [one, two, three] = numeros;
//console.log(one, two);

/**
 * En Objetos.
 */

const persona = {
    nombre: "Miguel",
    apodo: "Dante",
    edad: 23
};
// const {nombre, apodo, edad} = persona;
// console.log(nombre, apodo, edad);

/**
 *  Objetos literales : Es una nueva manera de escribir metodos y atributos
 * incluso de asignar. 
 * Objetos que literalmente definimos en una variable y los utilizamos. 
 */

// Antes del estandar EMAC Escript
let nombre = "kEnAi";
let edad = 7;

const perro = {
    nombre: nombre,
    edad: edad,
    ladrar: function(){
        console.log("Woof woof");
    }
}

// console.log(perro);
// perro.ladrar();

// despues
const dog = {
    nombre,
    edad,
    raza: "Callejero",
    ladrar(){
        console.log("Woof Woof Woof");
    }
}

// console.log(dog);
// dog.ladrar();

/**
 * Parámetros Rest & operador Spread.
 * parametro REST: cuandono sabemos cuantos elementos vamos a recibir
 * podemos poner ... antes de la variable. (Son parametros que recibe una función)
 * 
 * Spread: cuando tengamos que expandir los argumentos de algun elemento. (Se usa en arrays)
 */

//Rest ...c
const sumar = (a, b, ...c) =>{
    let resultado = a + b;
    c.forEach(n =>{
        resultado +=n;
    });
    return resultado;
}

// console.log(sumar(1,2,3,4,5));

//Spread 

// const arr1 = [1,2,3,4,5,],
// arr2 = [6,7,8,9,0];
// const arr3 =[...arr1, ...arr2];
// console.log(arr3);

// Clases 

class Animal {
    //Constructor
    constructor(nombre, genero){
        //Atributos inicializados
        this.nombre = nombre;
        this.genero = genero;
    }

    //Metodos
    sonar(){
        console.log("Sonidos que confirman que estoy vivo");
    }

    saludar(){
        console.log(`Hola me llamo ${this.nombre}`)
    }

}

// Herencia.

class Perro extends Animal{
    constructor(nombre, genero, tamanio){
        //Con el metodo super(), se manda a llamar el 
        //constructor de la clase padre
        super(nombre, genero);
        this.tamanio = tamanio;
        this.raza = null;
    }

    sonar(){
        console.log("Soy un perro y ladro");
    }

    ladrar(){
        console.log("Woof Woof");
    }

    /**
     * Un método estático se puden ejecutar sin 
     * necesidad de instanciar la clase
     */

    static queEres(){
        console.log("Los perror somos animales mamífero que pertenecemos a la familia de los caninos. Somo considerados los mejores amigos del hombre");
    }

    /**
     * Los setters y getters son metodo especiales que
     * nos permiten establecer y obtener los valores de
     * atributos de nuestra clase.
     */

    get getRaza(){
        return this.raza;
    }

    set setRaza(raza){
        this.raza = raza;
    }
}

//Perro.queEres();

const scooby = new Perro("Scooby", "Macho", "Gigante");

// scooby.setRaza  = "Gran Danés";
// console.log(scooby.raza);
// console.log(scooby.nombre);
// // console.log(scooby.getRaza);

/**
 *  Objeto Console
 * 
 * warn()
 * info()
 * group
 * groupEnd()
 * clear()
 * table()
 * time()
 * TimeEnd()
 * count(): Dice cuantas veces se ejecuta un codigo
 * assert(condición, {valor1, valor2, mensaje}): 
 */

let vocales = [ "a" , "e", "i", "o", "u"];
//console.table(vocales);

/**
 * Objeto Date 
 * let fecha =new Date();
console.log(fecha.getDay());
console.log(fecha.getMonth());
console.log(fecha.getFullYear());
console.log(fecha.getHours());
console.log(fecha.getMinutes());
console.log(fecha.getSeconds());
console.log(fecha.toString());
console.log(fecha.toLocaleString());
console.log(fecha.toLocaleDateString());
console.log(fecha.getUTCDate());
console.log(fecha.getUTCHours());
console.log(Date.now());
let fechaDante = new Date(1998, 7, 17);
console.log(fechaDante);
 */

/**
 * Objeto Math 
 * random
 */

// console.log(Math.abs(-32));
// console.log(Math.ceil(7.9));
// console.log(Math.sign(-678));
// let numeroRandom = Math.random()*100;
// console.log(Math.round(numeroRandom));

// console.log("Valor izquierda" && "Valor derecha");


/**
 * *****Expresiones Regulares. ***** !Important
 * Secuencia de caracteres que forman 
 * un patron de busqueda, principalmente utilizada
 * paara la busqueda de patrones de cadenas de caracters.
 */

let cadena = "Lorem 22 ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis a quos dicta non necessitatibus molestiae accusamus soluta! Est, dolorem exercitationem adipisci."
//let expReg = new RegExp("lorem","ig");
let expReg2 = /[0-9]/; // Mas usado

// console.log(expReg2.test(cadena));
// console.log(expReg2.exec(cadena));

let re = /\w+\s/g;
let str = "Miguel Angel Bohorquez Lopez ";

let myArray = str.match(re);
// console.log(myArray);



