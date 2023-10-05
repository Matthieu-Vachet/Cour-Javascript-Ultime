// La boucle for...in renvoier les index d'un tableau dans une variable




let panier = ['fraise', 'banane', 'poire'];

for (const fruit in panier) {
        console.log(panier[fruit]);
        // Resultat:
        // fraise
        // banane
        // poire
}

for (const fruit in panier) {
        panier[fruit] = 'pomme'
}

console.log(panier); // Resultat : ['pomme', 'pomme', 'pomme']