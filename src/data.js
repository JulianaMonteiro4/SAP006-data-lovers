import data from "./data/ghibli/ghibli.js";
export const films = data.films;

export const filterAni = (arr, key, value) => 
    arr.filter((item) => item[key] === value);

export const orderAni = (arr, order) => {
    if (order === "A-Z"){
        return arr.sort((a, z) => (a.title > z.title ? 1 : -1));
    }else if (order === "Z-A") {
        return arr.sort((a, z) => (a.title > z.title ? -1 : 1));
    }
};
