function cuisiner (nombreDeGateaux, minuteDePreparation = 10, minuteDeCuisson = 15) { // Les paramétres minuteDePreparation et minuteDeCuisson on une valeur par défaut.

    let resultat = nombreDeGateaux * (minuteDeCuisson + minuteDePreparation)

    return resultat
}

console.log(cuisiner(5)) // J'inquite a la fonction que j'ai 5 en nombre de gateau et il va prendre les valeur par défaut des deux autre paramétres pour me donner le resultat 125.

// si une pesonne n'aime pas gateau au chocolat mais un fraisier je crée deux variable avec la fonction :

let tempDePreparationChocolat = cuisiner(4); // 4 pour NombreDeGateaux.

let tempDePreparationFraisier = cuisiner(1, 20) // 4 pour le NombreDeGateaux et 20 pour la minute de préparation.

console.log(tempDePreparationChocolat + tempDePreparationFraisier) // 135 minutes