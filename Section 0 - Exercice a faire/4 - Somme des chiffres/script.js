// Objectif : Créez une variable sommeChiffres. Ensuite, créez une fonction calculerSommeChiffres qui prend un nombre entier en entrée et calcule la somme de ses chiffres.


function calculerSommeChiffres(nombre) {

    let result = 0;
    let number;

    let numberString = Math.abs(nombre).toString();

    for (let i = 0; i < numberString.length; i++) {
        number = parseInt(numberString.charAt(i));
        result += number;
    }

    return result;
}

console.log(calculerSommeChiffres(5469));

