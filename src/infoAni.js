import data from "./data/ghibli/ghibli.js";
//import { films } from "./data.js";
const films = data.films;

let params = new URLSearchParams(window.location.search.substring(1));
const movie = params.get("info");

let film = films.find((anima) => anima.id === movie);
function cardsInfo () {
    document.getElementById("cardAbout").innerHTML = `
    <img src=${film.poster} class="cardImg" alt="Imagem da Animação">
    <div class="filmInfo">
        <h3>${film.title}</h3>
        <p>${film.description}</p>
        <p>Diretor: ${film.director}</p>
        <p>Produtor: ${film.producer}</p>
        <p>Nota do Filme: ${film.rt_score}</p>
        <p> Ano de Lançamento: ${film.release_date}</p>
    </div>`;
}
cardsInfo(params);