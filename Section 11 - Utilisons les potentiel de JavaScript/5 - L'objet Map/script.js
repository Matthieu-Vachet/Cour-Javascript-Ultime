let monMap = new Map([
    ['prenom', 'Mark'],
    ['Nom', 'Zuykerberg']
]);

monMap.set('poste', 'PDG de facebook');

monMap.delete('poste');

console.log(monMap);

// Autre exemples

let utilisateurs = new Map();

utilisateurs.set('Mark Zuckerberg', {
    email: 'mark@facebook.com',
    poste: 'PDG',
});

utilisateurs.set('Bill Gates', {
    email: 'bill@apple.com',
    poste: 'Sauvez le monde',
});

console.log(utilisateurs);