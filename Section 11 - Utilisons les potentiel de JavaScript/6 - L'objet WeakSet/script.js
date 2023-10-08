let voitures = new WeakSet();


let voitureA = {
    constructeur: 'Tesla',
    modele: 'Cybertruck'
};

let voitureB = {
    constructeur: 'Audi',
    modele: 'Q7'
};

voitures.add(voitureA);
voitures.add(voitureB);

voitures.delete(voitureA);

console.log(voitures);