let crie = `Toujour plus fort !, toujour plus haut !`; // Variable GLOBALE qui peut etre utilisée, modifier ou appeler dans tout l'environnement.

function crieDeGuerre() {
    let crie = `Toujour plus fort !`; // Variable LOCALE qui ne peut etre appeler, modifier ou utiliser que dans l'environnement quel a ete crée, en l'occurence ici la fonction.
    console.log(crie);
}

crieDeGuerre(); // Appel de la fonction et renvoie la valeur ` Toujour plus fort ! `

console.log(crie); // Retourne dans la console `Toujour plus fort !, toujour plus haut !`