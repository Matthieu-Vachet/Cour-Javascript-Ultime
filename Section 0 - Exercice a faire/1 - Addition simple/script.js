import { prompt } from "../helper/helper.js";

// Objectif Créez deux fonctions, additionner et soustraire, qui prennent deux nombres en entrée et renvoient le résultat de l'opération respective (addition ou soustraction).


console.log(`Addition et soustraction`)

let premiernombre = Number(prompt(`Veuillez entrer un premier nombre : `));
let secondNombre = Number(prompt(`Veuillez entrer un second nombre : `));

function addition(number1, number2) {
    return number1 + number2;
};

function soustraction(number1, number2) {
    return number1 - number2;
};

console.log(`------------------------`)

console.log(`==> ADDITION :
Le resultat de l'addition est : ${addition(premiernombre, secondNombre)}`);

console.log(`------------------------`)

console.log(`==> SOUSTRACTION :
Le resultat de la soustraction est ${soustraction(premiernombre, secondNombre)}`);