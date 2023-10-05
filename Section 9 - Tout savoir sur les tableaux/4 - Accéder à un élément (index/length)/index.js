
let monTableauSimple = ['un', 'deux', 'trois']; // index 0, 1, 2

console.log(monTableauSimple[0]) // = 'un'
console.log(monTableauSimple.length) // = 3
console.log(monTableauSimple[monTableauSimple.length - 1]) // = "trois"


let monTableau2D = [ 
    ['Mark', 'Jeff', 'Bill'], // Tableau 0 / index 0,1,2
    ['Zuckerberg', 'Bezos', 'Gates'] // Tableau 1 / index 0,1,2
];

console.log(monTableau2D[1][0]); // = 'Zuckerberg'


let monTableauAssociatif = {
    'prenom' : 'Mark',
    'nom'    : 'Zuckerberg',
    'poste'  : 'PDG de Facebook'
};

console.log(monTableauAssociatif['poste']) // = 'PDG de Facebook'