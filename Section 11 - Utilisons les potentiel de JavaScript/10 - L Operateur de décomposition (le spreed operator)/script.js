// Exemple 1 : fusionner plusieurs tableaux

let fruits = ['fraise', 'banane', 'poire'];
let aliments = ['chocolat', 'sucre', 'lait', ...fruits];

console.log(aliments); // Result [ 'chocolat', 'sucre', 'lait', 'fraise', 'banane', 'poire' ]

// Exemple 2 : Découper une chaîne de caractére en plusieur éléments

let phrase = 'Bonjour !';
let phraseTableau = [...phrase];

console.log(phraseTableau); // Result [ 'B', 'o', 'n', 'j', 'o', 'u', 'r', ' ', '!' ]

// Exemple 3 : sélectionner un élément, et sotcker les autres dans une varible

let devises = ['dollars', 'euro', 'yen'];
 
// Sans décomposition
//let premiereDevise = devises[0];
//let autres = [devises[1], devises[2]];

// Avec décomposition
let [premiereDevise, ...autres] = devises;

console.log(premiereDevise); // Result dollars
console.log(autres); // Result [ 'euro', 'yen' ]