import data from "./data/ghibli/ghibli.js"

// Primeiro filme apareça na tela
const films = data.films ;
//let imgFilm = films[0].poster;
//console.log(imageFilm)

addEventListener("load", infoAnimaTela)
function infoAnimaTela (films) {
    document.getElementById("infoAnimacoes").innerHTML = films.map((film) => ` 
        <div class="imageFilm">
            <img src=${film.poster} class="cardImg" alt="Imagem da Animação">
            <div class="cardBack">
                <h2>${film.title}</h2>
                <p>${film.director}</p>
                <p>${film.producer}</p>
                <p>${film.release_date}</p>
            </div>
        </div>
    `).join("")
}
infoAnimaTela(films);

//filtrooos
