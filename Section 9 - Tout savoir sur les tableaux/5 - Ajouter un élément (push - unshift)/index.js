
let monTableauSimple = ['un', 'deux', 'trois', 'quatre']; // index 0, 1, 2, 3

monTableauSimple.push("cinq"); // = ['un', 'deux', 'trois', 'quatre', "cinq"]
monTableauSimple.unshift("zero"); // = ["zero, 'un', 'deux', 'trois', 'quatre', "cinq"]
console.log(monTableauSimple);





let monTableau2D = [ 
    ['Mark', 'Jeff', 'Bill'], // Tableau 0 / index 0,1,2
    ['Zuckerberg', 'Bezos', 'Gates'] // Tableau 1 / index 0,1,2
];

monTableau2D[0].push('Matthieu'); // = [ 'Mark', 'Jeff', 'Bill', 'Matthieu' ]
monTableau2D[1].unshift('Vachet'); // = [ 'Vachet', 'Zuckerberg', 'Bezos', 'Gates' ]
console.log(monTableau2D);





let monTableauAssociatif = {
    'prenom' : 'Mark',
    'nom'    : 'Zuckerberg',
    'poste'  : 'PDG de Facebook'
};

monTableauAssociatif['Age'] = 32; 
monTableauAssociatif['Ville'] = 'Guise';

// = { prenom: 'Mark',
// nom: 'Zuckerberg',
// poste: 'PDG de Facebook',
// Age: 32
// Ville : 'Guise }

console.log(monTableauAssociatif) 