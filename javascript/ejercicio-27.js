/**
 * 
 * 27) __ Programa una clase llamada Pelicula.
    La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
        __- Todos los datos del objeto son obligatorios.
        __- Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
        __- Valida que el título no rebase los 100 caracteres.
        __- Valida que el director no rebase los 50 caracteres.
        __- Valida que el año de estreno sea un número entero de 4 dígitos.
        __- Valida que el país o paises sea introducidos en forma de arreglo.
        __- Valida que los géneros sean introducidos en forma de arreglo.
        __- Valida que los géneros introducidos esten dentro de los géneros aceptados*.
        __- Crea un método estático que devuelva los géneros aceptados*.
        __- Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.
        __- Crea un método que devuelva toda la ficha técnica de la película.
        - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
 * ["Action","Adult", "Adventure", "Animation", "Biography","Comedy", "Crime", "Documentary" ,"Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"]
 */

class Pelicula{
    constructor(idMovie, title, director, releaseYear, countries, genres, rate){

        this.idMovie = idMovie;
        this.title = title;
        this.director = director;
        this.releaseYear = releaseYear;
        this.countries = countries;
        this.genres = genres;
        this.rate = rate;
    }

    static validGenres(){

        const valid = ["Action","Adult", "Adventure", "Animation", "Biography","Comedy", "Crime", "Documentary",   "Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"];
        
        return console.info(`These are the valid genres to register the movie:\n[${valid.join(", ")}]`);
    }

    dataSheet(){
        console.info(`
        \tMovie Data Sheet 
        IMDB ID: ${this.idMovie}\n
        Title: ${this.title}\n
        director(s): ${this.director}\n
        Release Year: ${this.releaseYear}\n
        Countrie(s): ${this.countries}\n
        Genre(s): ${this.genres}\n
        IMDB Rate: ${this.rate}
        `);
    }
}

const validArr = (id = "", title= "", director = undefined, year = undefined, countries = undefined, genres = undefined, rate = undefined ) =>{

    const genresValid = ["Action","Adult", "Adventure", "Animation", "Biography","Comedy", "Crime", "Documentary",   "Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"];

    let regId = /^[A-Z]{2}[0-9]{7}/.test(id),
    regYear = /[0-9]{4}/.test(year),
    regRate = /j/;

    if(!id) return console.warn(`El campo id es obligatorio`);
    if(!title) return console.warn(`El campo title es obligatorio`);
    if(!director) return console.warn(`El campo director es obligatorio`);

    if(year === undefined) return console.warn(`El campo year es obligatorio`);
    if(countries === undefined) return console.warn(`El campo countrie es obligatorio`);
    if(genres === undefined) return console.warn(`El campo genres es obligatorio`);
    if(rate === undefined) return console.warn(`El campo rate es obligatorio`);

    if(!regId) return console.error(`El id ingresado "${id}", no cumplre con lo necesario para valido`);
    if(title.lenght > 100) return console.error(`El nombre es demasiado grande `);
    if(director.lenght > 50) return console.error(`El nombre de los directores no puede exceder los 50 caracteres `);
    if(!regYear) return console.error(`El año debe ser un digito de 4 cifras`);
    if(!(countries instanceof Array)) return console.error(`Los Paises deben introducirse en forma de arreglo`);
    if(!(genres instanceof Array)) return console.error(`Los generos deben introducirse en forma de arreglo`);
    for (let gen of genres) {
        if(!(genresValid.includes(gen))) return console.error(`El genero, no es uno de los generos disponibles`);
    }
    if(rate > 10) return console.error(`La calificacion  no puede superar el 10`);

    return new Array(id, title, director, year, countries, genres, rate.toFixed(1));
}


const instanceGenerated = (array = undefined) =>{
    if(array === undefined) return("No ingresaste un array con los datos de las peliculas");
    if(!(array instanceof Array)) return("Debes ingresasr un array con los elementos a evaluar");

    let clase;
    for (let arr of array) {
        try{
            validArr(...arr);
            clase = new Pelicula(...arr);
            console.info(clase.dataSheet());
        }catch(error){
            console.warn(error)
        }
        
    }

}


let array = [["AB1234567", "Batman Dark Knight", "Nolan", 2006, ["USA"], ["Adventure", "War"], 9.56], 
["AC1234568", "The Amazing Spider-Man 2", "Marc webb", 2014, ["USA"], ["Adventure", "Action"], 10],
["AD1234569", "Avengers End Game", "Joe Russo, Anthony Russo", 2006, ["USA"], ["Action","Sci-Fi"], 9.56]]

let prueba =instanceGenerated(array);

console.log(prueba);

let num = 1994;