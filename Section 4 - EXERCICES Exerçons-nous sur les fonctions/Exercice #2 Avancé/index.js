// Dans cet exercice, je vous propose de réutiliser tout ce que nous avons vu jusqu'à maintenant. 
// Si vous le réussissez, vous pourrez définitivement valider toutes les notions que nous avons déjà vu ensemble !

// Voici ce que nous allons faire : un calculateur d'IMC !

// Nous allons récupérer deux valeurs grâce à notre utilisateur : 
// poids et taille, qui seront respectivement associées au poids et à la taille de notre utilisateur. 
// Vous pouvez demander à vos utilisateurs leur taille en centimètres ou en mètres. 
// Dans tous les cas, vous devrez convertir cette taille en mètres pour calculer son IMC.

// Il faudra ensuite passer ces valeurs à notre fonction, grâce à ses paramètres. J'insiste sur ce point.

// Dans cette fonction calculerIMC nous aurons une formule mathématique, que je vais vous donner car 
// il n'y a pas d'intérêt à la chercher :


// Notez bien que le poids doit être en kg, et la taille en mètres. Donc, par exemple : 53kg et 1.50m.


// Ici, vous avez le choix : faire le grand saut et essayer d'écrire cette équation par vous-même, ou alors, 
// vous pouvez aller sur ce lien dans lequel je vous ai préparé quelques indices pour pouvoir mettre au carré un nombre 
// (ici la taille).



// Enfin, l'objectif pour notre fonction sera de nous retourner ce résultat afin que nous puissions l'afficher à notre 
// utilisateur, directement via une boîte de dialogue en dehors de notre fonction.

let poidsUtilisateur  = prompt(`veuillez entrer votre poid en kg, Exemple pour 70,5Kg = 70.5`);
let tailleUtilisateur = prompt(`Veuillez entrer votre taille en cm, Exemple pour 1,80m = 180`);

function CalculerImc(poid, taille) {

  let tailleEnMetres   = taille / 100;
  let tailleCalculee   = Math.pow(tailleEnMetres, 2);
  let resultat         = poid / tailleCalculee;

  return resultat;
}

alert(`Voitre Imc et de: ${CalculerImc(poidsUtilisateur, tailleUtilisateur)}`);
