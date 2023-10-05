let monTableauSimple = ["un", "deux", "trois", "quatre"]; // index 0, 1, 2

monTableauSimple.splice(1, 0, "random", "pie"); // Resultat : ['un', 'random', 'pie', 'deux', 'trois', 'quatre']
console.log(monTableauSimple);

// 1 veut dire que l'on commence a un index [1] donc aprés "un"
// 0 veut dire que l'on supprime aucun élément apres cette index
// 'random', 'pie' les deux élémént seront rajouter a partire de l'index 1

// EXEMPLE : monTableauSimple.splice(1, 2); // Resultat : ["un", "quatre"]
// 1 on commence a l'index [1] (aprés "un")
// 2 on suprime deux élément a partire de l'index [1] donc "deux" et "trois"

let monTableau2D = [
        ["Mark", "Jeff", "Bill"], // Tableau 0 / index 0,1,2
        ["Zuckerberg", "Bezos", "Gates"], // Tableau 1 / index 0,1,2
];

monTableau2D.splice(2, 0, ["30", "40", "50"]); // Rajoute un troisiéme tableau.
console.log(monTableau2D);
