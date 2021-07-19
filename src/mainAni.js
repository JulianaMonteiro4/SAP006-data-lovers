import data from "./data/ghibli/ghibli.js"
import { filtered, orderAni } from "./data.js";

// Primeiro filme apareça na tela
const films = data.films;
let ordefilt = films;
//const orderChar = films[0].title ; 

function infoAnimaTela (films) {
    document.getElementById("infoAnimacoes").innerHTML = films.map((film) => `
        <a class="cards" id="cards" href="./infoAni.html?info=${film.id}" target="_blank">
        <div class="imageFilm">
            <img src=${film.poster} class="cardImg" alt="Imagem da Animação">
            <div class="cardBack">
                <h2>${film.title}</h2>
                <p> Diretor: ${film.director}</p>
                <p> Produtor: ${film.producer}</p>
                <p> Ano de Lançamento: ${film.release_date}</p>
                <img src="img/pngegg.png" alt="Imagem Card">
            </div>
        </div>
        </a>
    `).join("")
}
infoAnimaTela(films);

//filtro
function filterInfo (f) {
    const value = f.target.value;
    const nameOfRed = value.split(":");
    if ( value.includes("director")) {
        infoAnimaTela(filtered(films, "director", nameOfRed[1]));
    } else if ( value.includes("producer")) {
        infoAnimaTela(filtered(films, "producer", nameOfRed[1]));
    } else if (value === "Filters") {
        infoAnimaTela(ordefilt);
    }
}
document.getElementById("filter").addEventListener("change", filterInfo);

//ordenar
function orderInfo (o) {
    const value = o.target.value;
    if (value === "sorter") {
        infoAnimaTela(films);
    } else {
        infoAnimaTela(orderAni(ordefilt, value));
    }
}
document.getElementById("order").addEventListener("change", orderInfo);
 
// mostar menu
/*const iconeMenu = document.getElementById("barraMenu");

function showMenu () {
    const barra = document.getElementById("nav");
    barra.classList.toggle("active");
}

iconeMenu.addEventListener("click", showMenu);*/
