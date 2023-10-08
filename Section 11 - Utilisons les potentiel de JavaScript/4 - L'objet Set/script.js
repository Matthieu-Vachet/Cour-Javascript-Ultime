let nombres = [10, 45 ,75, 10, 24, 45];

//let monSet = new Set(nombres); // Result = { 10, 45, 75, 24} / 45 n'est afficher q'une fois car set supprime les doubles

let monSet = new Set();

monSet.add('70'); // On ajoute 70
monSet.add(87); // On ajoute 87

monSet.delete(87); // On retire 87

console.log(monSet); // Result Set { '70' }

console.log(monSet.size); // Result 1