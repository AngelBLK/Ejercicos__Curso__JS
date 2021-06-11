// console.log(window);
// console.log(document);


//let texto = "Hola, Soy Dante, futuro desarrollador de software"
// speechSynthesis es una API del navegador,una entre tantas.
// const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));

// hablar(texto);

// console.log("********** Elementos del Documento **********");
// console.log(document.head);
// console.log(document.documentElement);
// console.log(document.doctype);
// console.log(document.characterSet);
// console.log(document.title);
// console.log(document.links);
// console.log(document.images);
// console.log(document.forms);
// console.log(document.styleSheets);
// console.log(document.scripts);

// setTimeout(() =>{
//     console.log(document.getSelection().toString());
// }, 3000);
//El siguiente documento no es una buena practica utilizarlo.

//document.write("<h2> Hola mundo desde el DOM </h2>");

//

/** Nodos */

// console.log(document.getElementsByTagName("li"));

// console.log(document.getElementsByClassName("card"));
// console.log(document.getElementsByName("nombre"));
// Estos tres ya no se utilizan, fueron sustituidos por QuerySelector

// console.log(document.getElementById("menu")); // Para ID sigue siendo mejor getElementById.
// console.log(document.querySelector("#menu"));
// console.log(document.querySelector("a")); // Se detiene en la primer coincidencia.
// console.log(document.querySelectorAll("a")); // regresa todos los elementos.

// console.log(document.querySelectorAll("a").length);
// document.querySelectorAll("a").forEach((el) => console.log(el));
// console.log(document.querySelector(".card"));
// console.log(document.querySelectorAll(".card"));
// console.log(document.querySelectorAll(".card")[2]);
// console.log(document.querySelectorAll("#menu li"));

//

/** Atributos y Data-Attributes */

// console.log(document.documentElement.lang);
// console.log(document.querySelector(".link-dom").href);
// console.log(document.querySelector(".link-dom").getAttribute("href"));

// document.documentElement = "en";

// document.documentElement.setAttribute("lang", "es-MX");
// console.log (document.documentElement.lang);

// //Para reconocer las variables con relacion dcon el DOM se usa un $
// const $linkDOM = document.querySelector(".link-dom");

// $linkDOM.setAttribute("target", "_blank");
// //Para seguridad y queno haya una dependencia entre la pagina utilizada y la que se esta abriendo. 
// $linkDOM.setAttribute("rel", "noopener");
// $linkDOM.setAttribute("href", "https://youtube.com");
// $linkDOM.removeAttribute("rel");
// console.log($linkDOM.hasAttribute("rel"));

// // Data-Attributes.
// console.log($linkDOM.getAttribute("data-description"));
// console.log($linkDOM.dataset);
// //Modificar los data-attribute
// console.log($linkDOM.dataset.description);
// $linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento");
// console.log($linkDOM.getAttribute("data-description"));
// $linkDOM.dataset.description = "Suscribete a su canal y comparte";
// console.log($linkDOM.getAttribute("data-description"));

/** Estilos y variables la forma antigua. */

//Para obtener valores.
// const $linkDOM = document.querySelector(".link-dom");

// console.log($linkDOM.style);
// console.log($linkDOM.getAttribute("style"));
// console.log($linkDOM.style.color);
// console.log(window.getComputedStyle($linkDOM));
// console.log(window.getComputedStyle($linkDOM).getPropertyValue("color"));

// // Para asignar stilos

// $linkDOM.style.setProperty("text-decoration", "none");

// $linkDOM.style.setProperty("display", "block");

// $linkDOM.style.width = "50%";
// $linkDOM.style.textAling = "center";
// $linkDOM.style.marginLeft = "auto";
// $linkDOM.style.marginRight = "auto";
// $linkDOM.style.padding = "1rem";
// $linkDOM.style.borderRadius = ".5rem";
// console.log($linkDOM.getAttribute("style"));

// //Variables CSS - Custom Properties CSS.

// const $html = document.documentElement,
// $body = document.body;

// let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

// let varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

// let varBlueColor = getComputedStyle($html).getPropertyValue("--blue-color");

// console.log(varDarkColor, varYellowColor);

// $body.style.backgroundColor = varDarkColor;
// $body.style.color = varBlueColor;

// // Modificar las variables.

// $html.style.setProperty("--dark-color", "#222");

// varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color")

// $body.style.setProperty("background-color", varDarkColor);

/** Clases CSS. */

// const $card = document.querySelector(".card");

// console.log($card);
// console.log($card.className);
// console.log($card.classList);
// console.log($card.classList.contains("rotate-45"));
// $card.classList.add("rotate-45");
// console.log($card.className);
// console.log($card.classList);
// $card.classList.remove("rotate-45");
// $card.classList.toggle("rotate-45");
// $card.classList.replace("rotate-45", "rotate-135");

// $card.classList.add("opacity-80", "sepia");
// $card.classList.remove("opacity-80", "sepia");
// $card.classList.toggle("opacity-80", "sepia");

/**Texto y HTML. */

// const $whatIsDOM = document.getElementById("que-es");

// let text = `
//     <p> El modelo de Objetos del Documento (<b><i>DOM - Document Object Model</i></b>) es un API para documentos HTML y XML </p>
//     <p>
//     Éste Proveé una resentación estructural del documento, permietiendo modificar su contenido y presentacíon visual mediante código JS
//     </p>

//     <p>
//     <mark>El DOM no es parte de la especificación de JavaScript, es una API para los navegadores 
//     </p>`;
// // Esta salio para usarse en internet explorer, no es parte del estandar.
//     //$whatIsDOM.innerText = text;

// // La siguiente si es parte del estandar 
// // TextContent se usa cuando quieras agregar solo text
// $whatIsDOM.textContent = text;
// //innerHTLM es cuando quieras agregar etiquetas HTML.
// $whatIsDOM.innerHTML = text;
// // reemplaza el contenido del DOM por lo que se le asigne.
// $whatIsDOM.outerHTML = text;

//

/** Recorriendo el DOM */

// const $cards = document.querySelector(".cards");

// console.log($cards);
// // chikdren se refiere a las hijos etiquetas y
// console.log($cards.childrenNode);
// console.log($cards.children);
// console.log($cards.children[2]);
// console.log($cards.parentElement);
// //Marca el primer nodo, en este caso el espacio que hay.
// console.log($cards.firstChild);
// //aqui si regresa el nodo.
// console.log($cards.firstElementChild);
// //Los metodos sin la palabra element hace referencia a los nodos, por ejemplo, firstChild
// console.log($cards.previousElementSibling);
// console.log($cards.nextElementSibling);


// //Va a buscar el padre mas cercano del tipo de selector que nosotros le indiquemos.
// console.log($cards.closest("div"));
// console.log($cards.closest("body"));
// console.log($cards.children[3].closest("section"));


//

/** Creando elementos y fragmentos */

// Forma uno por unode agregar elemetos.


// Declarando los elementos a agregar en el dom.
// const $figure = document.createElement("figure"),
// $image = document.createElement("img"),
// $figcaption = document.createElement("figcaption"),
// $figcaptionText = document.createTextNode("Other Tech image")
// //Obteniendo el lugar donde colocaremostodos los elementos.
// $cards = document.querySelector(".cards");

// // Agregando los valores a los elementos respectivos 

// //Le modificamos los atributos a las imagenes
// $image.setAttribute("src", "https://placeimg.com/200/200/tech");
// $image.setAttribute("alt", "This is other card with tech image");

// //añadimos los elementos segun donde deben ir acomodados.
// $figcaption.appendChild($figcaptionText);
// $figure.appendChild($image);
// $figure.appendChild($figcaption);
// // Le agregamos la clase card, para que pueda tener los estilos ya marcado. 
// $figure.classList.add("card");

// $cards.appendChild($figure);


// // Forma no tan correcta.

// $figure2 = document.createElement("figure");
// $figure2.innerHTML = `
// <img src="https://placeimg.com/200/200/arch" alt="other arch">
// <figcaption>And another Arch</figcaption>
// `;
// $figure2.classList.add("card");
// $cards.appendChild($figure2);

// // forma dinamica.

// const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
// $ul = document.createElement("ul");

// // No es buena practica usar document.write()
// document.write(`<h3>The Four Seassons </h3>`);

// document.body.appendChild($ul);

// estaciones.forEach(el => {
//     const $li = document.createElement("li");
//     $li.textContent = el;
//     $ul.appendChild($li);
// });

// // Ejemplo con innerHTML.

// const continentes = ["África", "América", "Asia", "Europa", "Oceanía"];
// $ul2 = document.createElement("ul");

// document.write(`<h3>Continentes </h3>`);

// document.body.appendChild($ul2);
// //Es importante primero dejar bacio el inner del elemento cuando utilicemos esta forma.
// $ul2.innerHTML = "";
// continentes.forEach(element =>($ul2.innerHTML += `<li>${element}</li>`))

// // Forma de fragmento para aañadir elementos al DOM

// const months = [
//     "January",
//     "February",
//     "March",
//     "Aprill",
//     "May",
//     "Jun",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December"
// ],
// $ul3 = document.createElement("ul"),
// $fragment = document.createDocumentFragment();

// months.forEach(elem => {
//     const $li = document.createElement("li");
//     $li.textContent = elem;
//     $fragment.appendChild($li);
// });

// document.write(`<h3>Months</h3>`);
// $ul3.appendChild($fragment);
// document.body.appendChild($ul3);

//

/** Templates  */
// Otra forma de poder interactuar con el DOM.

// const $cards = document.querySelector(".cards"),
// $template = document.getElementById("template-card").content,
// $fragment = document.createDocumentFragment(),
// cardContent = [
// {
//     title: "Tecnologia",
//     img: "https://placeimg.com/200/200/tech"
// },

// {
//     title: "Animales",
//     img: "https://placeimg.com/200/200/animal"
// },

// {
//     title: "Gente",
//     img: "https://placeimg.com/200/200/people"
// },

// {
//     title: "Arquitectura",
//     img: "https://placeimg.com/200/200/arch"
// },

// {
//     title: "Naturaleza",
//     img: "https://placeimg.com/200/200/nature"
// }

// ];

// cardContent.forEach(el => {
//     $template.querySelector("img").setAttribute("src", el.img);
//     $template.querySelector("img").setAttribute("alt", el.title);
//     $template.querySelector("figcaption").textContent = el.title;

//     // importNode Ayuda a clonar un nodo,, aparte de la referencia recibe un boolean, si es true clonara todo si es false, solo copia las etiquetas nada más
//     let $clone = document.importNode($template, true);
//     $fragment.appendChild($clone);
// })

// $cards.appendChild($fragment);

// 

// /** modificando Elementos Old Style */

// const $cards = document.querySelector(".cards"),
// $newCard = document.createElement("figure"),
// //SI se le da false al metodo solo clonara la estructura,
// $cloneCards = $cards.cloneNode(true);

// $newCard.innerHTML = `
//     <img src="https://placeimg.com/200/200/any" alt="Any">
//     <figcaption>Any</figcaption>
// `;

// $newCard.classList.add("card");

// //Metodo que nos permite reemplazar un nodo hijo.

// // $cards.replaceChild($newCard, $cards.children[3]);

// //Insertarla al principio
// // $cards.insertBefore($newCard, $cards.firstElementChild);

// //Metodo para eliminar 

// // $cards.removeChild($cards.lastElementChild);

// // Usando el metodo clone

// document.body.appendChild($cloneCards);


//

 /** Modificando Elementos Cool Style */

/* .insertAdjacent...
    .insertAdjacentElement(position,el)
    .insertAdjacentHTML(position,html)
    .insertAdjacentText(position,text)

posiciones:
    beforebegin (hermano anterior)
    afterbegin (primer hijo)
    beforeend (ultimo hijo)
    afterend  (hermano siguiente)
*/

// const $cards = document.querySelector(".cards"),
// $newCard = document.createElement("figure");

// let $contentCard = `
// <img src="https://placeimg.com/200/200/any" alt="any">
// <figcaption></figcaption>
// `;

// $newCard.classList.add("card");
// $newCard.insertAdjacentHTML("beforeend", $contentCard);

// $newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any OMD");
// //$cards.insertAdjacentElement("afterbegin", $newCard);

// //Lo inserta al principio del nodo hijo.
// $cards.prepend($newCard);
// //Lo inserta justo despues del nodo anterior.
// $cards.before($newCard);
// //Lo inserta al final del nodo hijo.
// $cards.append($newCard);
// //Loinserta despues del nodo.
// $cards.after($newCard);


//

/** Manejadores de eventos */

/**
 *  Los Eventos

    Es aquel mecanismo que tenemos en JS para poder controlar las acciones del usuario y definir ciertos comportamientos del documento q sucedan en cierto momento o cuando se cumplan algunas condiciones.

    Ahora, las funciones q se ejecutan en un Evento es lo q se conoce como el Event Handler o traducido Manejadores de Eventos, o tmb Observadores o Escuchadores.
    
    Hay 3 maneras de definir los Eventos en JS : 
 */

//     function holaMundo(){
//         confirm("hola mundo");
//         console.log(event);
//     }

// const $eventoSemantico = document.getElementById("evento-semantico"),
// $eventoMultiple = document.getElementById("evento-multiple"),
// $eventoRemover = document.getElementById("evento-remover");

// // Sin parentesis, porque si los ponemos la funcion se 
// $eventoSemantico.onclick = holaMundo;
// $eventoSemantico.onclick = function(e){
//     alert("Hola, esto es un evento por Manejador de Eventos Semántico");

//     console.log(e);
// };

// // La forma mas chida
// $eventoMultiple.addEventListener("click", holaMundo);
// $eventoMultiple.addEventListener("click", (e) => {
//     alert("Hola mundo, Manejador de eventos multiples");
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(event);
// });

// // 

// /** Remover eventos y Agregar Parametros */

// function saludar(nombre = "Hola, deconocido"){
//     alert(`Hola ${nombre}`);
//     console.log(event);
// }

// // Forma para pasar parametros a una funcion que se ejecuta en un evento.

// // Toda funcion, no puede recibir otro parametro que no sea el evento en si.

// // Si es necesario trabajar con los parametros de una funcion, puedes utulizar arrow function

// // como la funcion manejadora ya no sera la funcion saludar, sino la arrow function, ahora si es necesario poner los parentesis en la función.
// $eventoMultiple.addEventListener("click", () => {
//     saludar("Dante")
// });

// // Para remover la funcion del evento debe estar declarada o expresada.

// const removerDobleClick = (e) => {
//     alert(`Removiendo el evento tipo ${e.type}`);
//     $eventoRemover.removeEventListener("dblclick", removerDobleClick);
//     $eventoRemover.disabled = true;
// }

// $eventoRemover.addEventListener("dblclick", removerDobleClick);


/** Flujo de Eventos
 * 
 * Fase de burbuja: el evento se origina desde lo mas interno, hasta el mas externo.
 * Si agregamos el tercer parametro de eventlistener en tru, el flujo cambiara, e ira desde el externo, hasta el interno.
 * 
 */

// function flujoEventos(e){
//     console.log(`hola te saluda ${this}, el click lo origino ${e.target.className}`);
//     //stopPropagation.
//     e.stopPropagation();
// }

/*$divsEventos.forEach(div => {
    //Fase burbuja.
    div.addEventListener("click", flujoEventos, true);
   //tambien puedes mandar un objeto con las propiedades del tercer argumento de la funcion Listener
    // div.addEventListener("click", flujoEventos, {
    //     capture: true,
    //     //El evento se ejecutara una sola vez
    //     once: true
    // });
})*/

/** stopPropagation & preventDefault */



/** Delegacion de los eventos */

// document.addEventListener("click", (e) =>{
//     console.log(`click en`, e.target);
    
//     if(e.target.matches(".eventos-flujo a")){
//         alert("Hola, no funciono :c");
//         e.preventDefault();
        
//     }

//     if(e.target.matches(" div")){
//         flujoEventos(e);
//     }
// })

/** BOM Propiedades y eventos */

/**window.addEventListener("resize", (e) =>{
    console.clear();
    console.log("****** Evento Resize ******");
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    console.log(window.outerWidth);
    console.log(window.outerHeight);
    console.log(e);
});
*/
// window.addEventListener("scroll", e => {
//     console.clear();
//     console.log("****** Evento scroll ******");
//     console.log(window.scrollX);
//     console.log(window.scrollY);
//     console.log(e);
// });

/**window.addEventListener("load", e =>{

    console.log("****** Evento load ******");
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);
});

document.addEventListener("DOMContentLoaded", e => {
    console.log("****** Evento DOMContentLoaded ******");
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);
});
*/ 
/**Eventos del BOM */

// confirm("Confirm");
// alert("alert");
// prompt("Prompt");

// const $btnAbrir = document.getElementById("abrir-ventana"),
// $btnCerrar = document.getElementById("cerrar-ventana"),
// $btnImprimir = document.getElementById("imprimir-ventana");
// let ventana;
// $btnAbrir.addEventListener("click", (e) =>{
//     ventana = open("https:youtube.com");
// });
// $btnCerrar.addEventListener("click", (e) =>{
//     ventana.close();
// });
// $btnImprimir.addEventListener("click", (e) =>{
//     window.print();
// });

// 
/**Objetos en el BOM.
 * 
 * Objeto URL(location);
 * Objeto Location;
 * Objeto Navigation;
*/

console.log(window.location);
console.log(window.history);

console.log(navigator.connection);
console.log(navigator.geolocation);
console.log(navigator.mediaDevices);
console.log(navigator.mimeTypes);
console.log(navigator.onLine);
console.log(navigator.serviceWorker);
console.log(navigator.storage);
console.log(navigator.usb);
console.log(navigator.userAgent);

