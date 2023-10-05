// La boucle for...of renvoier les valeur d'un tableau dans une variable



let panier = ['fraise', 'banane', 'poire'];

for (const fruit of panier) {
        console.log(fruit);
        // Resultat:
        // fraise
        // banane
        // poire
}



// On récupére les index
for (const fruit of panier) {
        console.log(panier.indexOf(fruit));
        // Resultat:
        // 0
        // 1
        // 2
}

