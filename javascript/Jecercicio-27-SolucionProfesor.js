class Pelicula{
    constructor({id, titulo, director, estreno, pais, generos, calificacion}){
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.estreno = estreno;
        this.pais = pais;
        this.generos = generos;
        this.calificacion = calificacion;

        this.validarIMDB(id);
        this.validarTitulo(titulo);
        this.validarDirector(director);
        this.validarEstreno(estreno);
        this.validarPais(pais);
        this.validarGenero(generos);
        this.validarCalificacion(calificacion);
        
    }

    static get listaGeneros(){
        return  ["Action","Adult", "Adventure", "Animation", "Biography","Comedy", "Crime", "Documentary" ,"Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"];
    }

    static generosAceptados(){
        return console.info(`Los generos aceptados son: ${Pelicula.listaGeneros.join(", ")}`);
    }
    validarCadena(propiedad, valor){
        if(!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);
        if(typeof valor !== "string") return console.error(`${propiedad} "${valor}" ingresado, NO es una cadena de texto`);
        return true;
    }

    validarLongitudCadena(propiedad, valor, longitud){
        if(valor.length > longitud) return console.error(`${propiedad} "${valor}" excede el número de caracteres permitidos (${longitud})`);
        return true;
    }

    validarNumero(propiedad, valor){
        if(!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);
        if(typeof valor !== "number") return console.error(`${propiedad} "${valor}" ingresado, No es un número`);
    }

    validarArreglo(propiedad, valor){
        if(!valor) return console.warn(`${propiedad} "${valor}" esta vacío`);
        if(!(valor instanceof Array)) return console.error(`${propiedad} "${valor}" ingresado, NO es un arreglo`);
        if(valor.length === 0) return console.error(`${propiedad} "${valor}" no tiene datos`);
        for (let cadena of valor) {
            if(typeof cadena !== "string") return console.error(`El valor "${cadena}" ingresado, NO es una cadena de texto`);
        }

        return true;
    }

    validarIMDB(id){
        if(this.validarCadena("IMDB id", id))
            if(!(/^([a-z]){2}([0-9]){7}$/.test(id)))return console.error(`IMDB id "${id}" no es valido, debe tener 9 caracteres, los 2 primeros letras minúsculas, los 7 restantes números`);   
    }

    validarTitulo(titulo){
        if(this.validarCadena("Titulo", titulo))
            this.validarLongitudCadena("Título", titulo, 100);
    }

    validarDirector(director){
        if(this.validarCadena("Director", director))
            this.validarLongitudCadena("Director", director, 50);
    }

    validarEstreno(estreno){
        if(this.validarNumero("Estreno", estreno))
            if(!(/^([0-9]){4}$/.test(estreno)))return console.error(`Año de estreno "${estreno}" no es valido, debe ser un número de 4 digitos`);   
    }

    validarPais(pais){
        this.validarArreglo("País", pais);
    }

    validarGenero(generos){
        if(this.validarArreglo("Generos", generos)){
            for (let genero of generos){
                if(!Pelicula.listaGeneros.includes(genero)){
                    console.error("Generos incorrectos");
                    Pelicula.generosAceptados();
                } 
                
            }
        }

    }

    validarCalificacion(calificacion){
        if(this.validarNumero("Calificación", calificacion))
            return(calificacion < 0 || calificacion >10) 
            ? console.error(`La calificación tiene que estar entre un rango de 0 y 10`)
            : this.calificacion = calificacion.toFixed(1);
    }

    fichaTecnica(){
        console.info(`Ficha Técnica:\nTítulo: "${this.titulo}"\nDirector "${this.director}"\nAño: "${this.estreno}"\nPaís: "${this.pais.join("-")}"\nGéneros: "${this.generos.join(", ")}"\nCalificación: "${this.calificacion}"\nIMDB id: "${this.id}"`)
    }
}

// const peli = new Pelicula({
//     id: "tt1234567",
//     titulo: "Título de la pelicula",
//     director: "Director de la peli",
//     estreno: 2021,
//     pais: ["México"],
//     generos: ["Adventure"],
//     calificacion: 10
// });

// peli.fichaTecnica();

const misPelis = [
    {
        id: "tt1234567",
        titulo: "Título de la pelicula",
        director: "Director de la peli",
        estreno: 2021,
        pais: ["México"],
        generos: ["Adventure"],
        calificacion: 10
    },

    {
        id: "tt1236567",
        titulo: "Título de la pelicula 2",
        director: "Director de la peli 2",
        estreno: 2020,
        pais: ["México"],
        generos: ["Adventure"],
        calificacion: 9.5
    },

    {
        id: "tt1224567",
        titulo: "Título de la pelicula 3",
        director: "Director de la peli 3",
        estreno: 2021,
        pais: ["México"],
        generos: ["Adventure"],
        calificacion: 5.9
    }
];

misPelis.forEach(elemento =>  new Pelicula(elemento).fichaTecnica());