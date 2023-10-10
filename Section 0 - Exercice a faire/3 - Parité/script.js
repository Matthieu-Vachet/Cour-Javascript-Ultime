import { prompt } from "./helper.js";

// npm run start

// Objectif : Créez une fonction verifierParite qui prend un nombre en entrée et renvoie un message indiquant s'il est pair ou impair.

console.log(`\u{1F522} Exercice 3, Parité des nombres`)

let userNumber = Number(prompt(`Merci de rentre un chiffre : `))

function verifierParite(nombre) {
    if (nombre%2 == 0) {
        console.log(`
Votre nombre et Pair \u{1F7E2}`);
    } else {
        console.log(`
Votre nombre et Impair \u{1F534}`);
    }
    return nombre
}

verifierParite(userNumber);


