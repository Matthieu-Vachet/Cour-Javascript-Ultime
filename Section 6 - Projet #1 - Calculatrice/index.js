
// Variables
let choix;
let premierNombre;
let secondNombre;
let resultat;
let restart = false;

//Fonctions
function addition(number1, number2) {
    return number1 + number2;
};

function multiplication(number1, number2) {
    return number1 * number2;
};

function soustraction(number1, number2) {
    return number1 - number2;
};

function division(number1, number2) {
    if (number2 == 0){
        throw new Error(`Erreur il est impossible de diviser par "0"`)
    } else {
        return number1 / number2;
    }
};

//Prompt
do {
do {
    
    choix = Number(prompt(`Que souhaitez-vous faire ?
    
    1 - Addition
    2 - Multiplication
    3 - Soustraction
    4 - Division`));

} while (isNaN(choix) || choix < 1 || choix > 4);

console.log(`Vous avez choisi le numéro ${choix}`);

do {
    premierNombre = Number(prompt(`Veuillez rentré un premier nombre.`));
    secondNombre = Number(prompt(`Veuillez rentré un second nombre.`))
} while (isNaN(premierNombre) || isNaN(secondNombre));

// do {
//     var premierNombre = parseFloat(prompt(`Veuillez rentré un premier nombre.`));
// } while (isNaN(premierNombre) || premierNombre == "");

// console.log(premierNombre);

// do {
//     var secondNombre = parseFloat(prompt(`Veuillez rentré un deuxième nombre.`));
// } while (isNaN(secondNombre) || secondNombre == "");

console.log(premierNombre, secondNombre);

//Switch choix
try {
switch (choix) {
    case 1:
        resultat = addition(premierNombre, secondNombre);
        break;
    case 2:
        resultat = multiplication(premierNombre, secondNombre);
        break;
    case 3:
        resultat = soustraction(premierNombre, secondNombre);
        break;
    case 4:
        resultat = division(premierNombre, secondNombre);
        break;
    default:
        throw new error(`Une erreur et survenu !`);
}    
    alert(`Le résultat est ${resultat}`);
} catch (error) {
    alert(error);
}

restart = confirm(`Voulez vous refaire un calcule ?`);

} while(restart);




