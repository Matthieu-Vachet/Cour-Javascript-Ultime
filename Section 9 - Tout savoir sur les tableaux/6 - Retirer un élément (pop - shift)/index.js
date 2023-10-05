let monTableauSimple = ["un", "deux", "trois", "quatre"]; // index 0, 1, 2

monTableauSimple.pop(); // Resultat : ['un', 'deux', 'trois'] / le dérnier élément et supprimer.
console.log(monTableauSimple);

monTableauSimple.shift(); // Resultat : [ 'deux', 'trois' ] / le premier élément du tableau et supprimer.
console.log(monTableauSimple);




let monTableau2D = [
        ["Mark", "Jeff", "Bill"], // Tableau 0 / index 0,1,2
        ["Zuckerberg", "Bezos", "Gates"], // Tableau 1 / index 0,1,2
];

monTableau2D[0].pop(); // Resultat : [ [ 'Mark', 'Jeff' ], [ 'Zuckerberg', 'Bezos', 'Gates' ] ] / le dernier élément du tableau 0 et supprimer.
console.log(monTableau2D);




let monTableauAssociatif = {
        prenom: "Mark",
        nom: "Zuckerberg",
        poste: "PDG de Facebook",
};

delete(monTableauAssociatif.poste); // Resultat : { prenom: 'Mark', nom: 'Zuckerberg' } / Poste a etait supprimer du tableau.
console.log(monTableauAssociatif);
