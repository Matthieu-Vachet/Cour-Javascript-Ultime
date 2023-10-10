// Objectif : Créez une variable factorielle. Ensuite, créez une fonction calculerFactorielle qui prend un nombre en entrée et renvoie sa factorielle.

// Exemple :
// 5! = 5 x 4 x 3 x 2 x 1 = 120

let factoriel = 1;
let nombre = 5;

function calculerLeFactoriel(nombre) {
  for (let i = 1; i <= nombre; i++) {
    factoriel *= i;
		console.log(factoriel);
  }
  return factoriel;
}

let result = calculerLeFactoriel(nombre);

console.log("La factoriel de " + nombre + " est : " + result);