let nombreUn = 4;
let nombreDeux = 7;

function calculeAddition(nombreA, nombreB) {
        let resultat = nombreA + nombreB;
        // console.log(resultat); // Affiche le resultat de reusltat dans la console donc 11

        return resultat; // la fonction s'arrete au return le resultat donc 11
}

console.log(calculeAddition(nombreUn, nombreDeux)); // On affiche le resultat de la fonction calculeAddition avec les deux variables globale en remplacement des parramétre ce qui retourne 11.

// Calcule plus complexe avec les return

function calculeDivision (nombreA, nombreB) {
    let resultat = nombreA / nombreB;

    return resultat
}

let resultatAddition = calculeAddition(nombreUn, nombreDeux) // Stocke le resultat du return de la fonction calculeAddition dans une variable.
let resultatDivision = calculeDivision(nombreUn, nombreDeux) // Stocke le resultat du return de la fonction calculeDivision dans une variable.

console.log(resultatAddition * resultatDivision) // Affiche le resultat des deux nouvelle variable multiplier.