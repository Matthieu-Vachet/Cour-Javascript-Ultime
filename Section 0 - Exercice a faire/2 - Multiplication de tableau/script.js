import { prompt } from "./helper.js";

// Objectif : Créez une variable multiplication. 
// Ensuite, créez une fonction multiplierTableau qui prend un tableau de nombres en entrée et renvoie le résultat de leur multiplication.

let tableauDeMultiplication = [];

console.log(`😎 Multiplication de Tableau 

`);

tableauDeMultiplication.push(Number(prompt(`- Veuillez saisir un premier nombre : `)))
tableauDeMultiplication.push(Number(prompt(`- Veuillez saisir un second nombre : `)))
tableauDeMultiplication.push(Number(prompt(`- Veuillez saisir un troisieme nombre : `)))

function multiplierTableau(tableau) {
    
    let resultat = 0;

    for (let i = 0; i < tableauDeMultiplication.length; i++) {
        resultat *= tableau[i];
    }
    return resultat
}
console.log(multiplierTableau[resultat]);