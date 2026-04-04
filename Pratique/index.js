// @ts-nocheck

/*
Compter les caractères d'une phrase
Compte le nombre de caractères dans la phrase :
"Apprendre JavaScript est amusant !"
*/

// let string = "Apprendre JavaScript est amusant !";

// function longueurMot(param) {
//   return param.length;
// }

// console.log(longueurMot(string));

/*
Longueur d’un mot spécifique
Crée une fonction getWordLength qui prend un mot en paramètre et retourne sa longueur.
Exemple : getWordLength("Programmation") → 13
*/

// function getWordLength(mot) {
//   return mot.length;
// }

// console.log(getWordLength("Programmation"));

// /*
// Vérifier si une phrase est trop longue
// Écris une fonction qui prend une phrase et vérifie si sa longueur dépasse 20 caractères.
// Si oui, affiche "Phrase trop longue", sinon "Phrase acceptable".
// */

// let maximumLongueur = 20;
// let phrase = prompt(`Merci de saisir une phrase :)`);

// if (phrase.length <= maximumLongueur) {
//   alert(`Phrase acceptable, votre phrase fait : ${phrase.length} caractéres.`);
// } else {
//   alert(
//     `Phrase trop longue ! Votre phrase fait ${phrase.length} alord que le maximum de caractére et de ${maximumLongueur}.`
//   );
// }

/*
Compter les caractères sans les espaces
Crée une fonction qui retourne le nombre de caractères d’une phrase en ignorant les espaces.
Exemple : "Je code en JS" → 10
*/

// let phrase = `Je code en JS`;

// function calculeCaractere(param) {
//   let phraseReduite = param.replace(/ /g, "").length;
//   return phraseReduite;
// }

// console.log(calculeCaractere(phrase));

/*
Trouver la longueur du mot le plus long
Écris une fonction qui prend une phrase et retourne la longueur du mot le plus long.
Exemple : "Coding is super fun" → 6 (pour "Coding")
*/

// let phrase = "Coding is super fun";

// function motPlusLong(param) {
//   let tableau = param.split(" ");

//   let longueurMax = 0;

//   for (let mot of tableau)
//     if (mot.length > longueurMax) {
//       longueurMax = mot.length;
//     }
//   return longueurMax;
// }
// console.log(motPlusLong(phrase));

/*
Vérifier la longueur d’un mot de passe
Crée une fonction isPasswordValid qui vérifie si un mot de passe contient au moins 8 caractères.
Retourne true ou false selon le cas.
*/

// let mdp = prompt("Quel et votre mot de passe ?");
// let longueurMin = 8;

// const isPasswordValid = (param) => mdp.length >= longueurMin;

// alert(
//   isPasswordValid(mdp)
//     ? `✅ Votre mot de passe et valide`
//     : `❌ Votre mot de passe n'est pas valide !`
// );

/*
Compter les voyelles dans un mot
Crée une fonction qui compte le nombre de voyelles dans un mot.
Indice : utilise length avec un filtre sur les voyelles (a, e, i, o, u, y).
*/

// let mots = "Matthieu";

// function compterVoyelle(param) {
//   const voyelles = ["a", "e", "i", "o", "u", "y"];

//   return param
//     .toLowerCase()
//     .split("")
//     .filter((letter) => voyelles.includes(letter)).length;
// }

// console.log(compterVoyelle(mots));

/*
Comparer la longueur de deux mots
Écris une fonction qui prend deux mots et retourne celui qui est le plus long.
Exemple : compareLength("chat", "ordinateur") → "ordinateur"
*/

// let motUn = prompt(`Veuillez renseigner un premier mot.`);
// let motDeux = prompt(`Veuillez renseigner un second mot.`);

// function compterLettre(a, b) {
//   // Si plus a plus grand que b
//   if (a.length > b.length) {
//     alert(`${a} contient ${a.length} lettres.
//       Il et donc plus grand que ${b} qui lui contient ${b.length} lettres.`);
//     // Si même longeur entre a et b
//   } else if (a.length === b.length) {
//     alert(`${a} contient ${a.length} lettres ainsi que ${b} aussi !
//       Ils fonts donc exactement le même nomnbre de lettre.`);
//     // Si b plus grand que a
//   } else {
//     alert(`${b} contient ${b.length} lettre.
//       Il et donc plus grand que ${a} qui lui contient ${a.length} lettres.`);
//   }
// }

// compterLettre(motUn, motDeux);

/*
Vérifier si un texte est vide
Crée une fonction qui prend une chaîne de caractères et vérifie si elle est vide (longueur = 0).
*/

// let questionUtilisateur = prompt("Quel et votre nom ?");
// while (questionUtilisateur.trim().length == 0) {
//   questionUtilisateur = prompt("Quel et votre nom ?");
// }
// alert(`Félicitation votre mot fait exactement ${questionUtilisateur.length}`);

/*
Répéter un mot selon sa longueur
Écris une fonction qui prend un mot et le répète autant de fois que sa longueur.
Exemple : "JS" → "JSJS" (2 fois)
"Code" → "CodeCodeCodeCode" (4 fois)
*/

// let mot = "Matthieu";

// function motRepeter(param) {
//   return param.trim().repeat(param.length);
// }

// console.log(motRepeter(mot));

// -------------

//Déclarez la variable firstName, lastName, country, city, age, isMarried, year et attribuez-lui
// une valeur et utilisez l'opérateur typeof pour vérifier différents types de données.

// let firstName = "Matthieu";
// let lastName = "Vachet";
// let country = "French";
// let city = "Guise";
// let age = 34;
// let isMarried = true;
// let year = 1990;

// console.log(typeof firstName);
// console.log(typeof lastName);
// console.log(typeof country);
// console.log(typeof city);
// console.log(typeof age);
// console.log(typeof isMarried);
// console.log(typeof year);

// let number = parseInt("9.8");

// number = 10 ? console.log("true") : console.log("false");

// console.log(4 > 3); // true
// console.log(4 >= 3); // true
// console.log(4 < 3); // false
// console.log(4 <= 3); // false
// console.log(4 == 4); // true
// console.log(4 === 4); //true
// console.log(4 != 4); // false
// console.log(4 !== 4); // false
// console.log(4 != "4"); // true
// console.log(4 == "4"); // false
// console.log(4 === "4"); // false

// Trouvez la longueur de Python et du jargon et faites une fausse déclaration de comparaison.

// let motUn = "Python";
// let motDeux = "jargon";

// let check = !(motUn.length < motDeux.length);
// console.log(check);

// console.log(4 > 3 && 10 < 12); // true
// console.log(4 > 3 && 10 > 12); // false
// console.log(4 > 3 || 10 < 12); // true
// console.log(4 > 3 || 10 > 12); // true
// console.log(!(4 > 3)); // false
// console.log(!(4 < 3)); // true
// console.log(!false); // true
// console.log(!(4 > 3 && 10 < 12)); // false
// console.log(!(4 > 3 && 10 > 12)); // true
// console.log(!(4 === "4")); // true

/*
Utilisez l'objet Date pour effectuer les activités suivantes

Quelle année sommes-nous aujourd'hui ?
Quel est le mois d'aujourd'hui en chiffres ?
Quelle est la date aujourd'hui ?
Quel est le jour d'aujourd'hui en tant que nombre ?
Quelles sont les heures maintenant ?
Quelle est la minute maintenant ?
Découvrez le nombre de secondes écoulées depuis le 1er janvier 1970 jusqu'à aujourd'hui.
*/

// const now = new Date();
// console.log(now);
// console.log(now.getFullYear());
// console.log(now.getMonth() + 1);
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getTime());

// Écrivez un script qui invite l'utilisateur à saisir la base et la hauteur du triangle et à calculer
// l'aire d'un triangle (aire = 0,5 xbxh).
// Enter base: 20
// Enter height: 10
// The area of the triangle is 100

// let base = prompt(`Merci de saisir la base du triangle`);
// let heigth = prompt(`Merci de saisir la hauteur du triangle`);
// let aire = 0.5;

// let result = aire * base * heigth;

// alert(result);

// Écrire un script qui invite un utilisateur à saisir les heures et le tarif horaire. Calculer le salaire de la personne ?

// Enter hours: 40
// Enter rate per hour: 28
// Your weekly earning is 1120

// let hours;
// let ratePerHour;

// function calcul() {
//   do {
//     hours = prompt(`Merci d'indiquer votre nombre d'heurs total`);
//   } while (isNaN(hours) || hours <= 0);

//   do {
//     ratePerHour = prompt(`Merci d'indiquer votre taux horaire`);
//   } while (isNaN(ratePerHour) || ratePerHour <= 0);

//   let calcule = Number(hours) * Number(ratePerHour);
//   alert(`Votre salaire hebdomadaire est de ${calcule}€`);
// }

// calcul();

// let firstName = "Matthieu";
// let lastName = "Vachet";

// firstName.length > lastName.length
//   ? console.log(
//       `Your first name, ${firstName} is longer than your family name, ${lastName}`
//     )
//   : console.log(
//       `Your family name, ${lastName} is longer than your first name, ${firstName}`
//     );

// À l'aide de l'invite, obtenez l'année de naissance de l'utilisateur et si
// l'utilisateur a 18 ans ou plus, autorisez-le à conduire, sinon dites-lui
// d'attendre un certain nombre d'années.

// Enter birth year: 1995
// You are 25. You are old enough to drive

// Enter birth year: 2005
// You are 15. You will be allowed to drive after 3 years.

// let year;

// function calculeAge() {
//   do {
//     year = prompt(`Veuillez saisir votre age :`);
//   } while (isNaN(year) || year <= 0);

//   Number(year) >= 18
//     ? alert(`Félicitation vous pouvez conduire :)`)
//     : alert(
//         `Vous avez ${year} ans. Vous pourrais conduire dans ${
//           18 - Number(year)
//         } ans`
//       );

//   return;
// }

// calculeAge();

// Écrivez un script qui demande à l'utilisateur de saisir le nombre d'années.
// Calculez le nombre de secondes qu'une personne peut vivre. Supposons que quelqu'un
// vive seulement cent ans

// Enter number of years you live: 100
// You lived 3153600000 seconds.

// let year;
// let second;

// function yearOfSecond() {
//   do {
//     year = prompt(`Veuillez saisir un nom d'année à convertir en seconde`);
//   } while (isNaN(year) || year <= 0);

//   year = Number(year);
//   second = year * 365 * 24 * 60 * 60;
//   alert(
//     `Selon la nombre d'année que vous avez donner vous pouvez espéré vivre ${second} seconde :)`
//   );
// }

// yearOfSecond();

// Créez un format d'heure lisible par l'homme à l'aide de l'objet Date/Heure

// let now = new Date();
// let year = now.getFullYear();
// let month = (now.getMonth() + 1).toString().padStart(2, "0");
// let day = now.getDay().toString().padStart(2, "0");
// let hours = now.getHours();
// let minute = now.getMinutes().toString().padStart(2, "0");

// // AAAA-MM-JJ HH:mm

// console.log(
//   `Voici la date du jour : ${year}-${month}-${day} ${hours}:${minute}`
// );

// // JJ-MM-AAAA HH:mm

// console.log(
//   `Voici la date du jour : ${day}-${month}-${year} ${hours}:${minute}`
// );

// // JJ/MM/AAAA HH:mm

// console.log(
//   `Voici la date du jour : ${day}/${month}/${year} ${hours}:${minute}`
// );

// Exercices : Niveau 1
// Obtenez l'avis de l'utilisateur à l'aide de l'invite (« Entrez votre âge : »).
// Si l'utilisateur a 18 ans ou plus, donnez un commentaire :
// « Vous avez l'âge requis pour conduire », mais s'il n'a pas 18 ans,
// donnez un autre commentaire indiquant d'attendre le nombre d'années dont il a
// besoin pour atteindre ses 18 ans.

// Enter your age: 30
// You are old enough to drive.

// Enter your age:15
// You are left with 3 years to drive.

// function calculAge() {
//   let age;
//   do {
//     age = prompt(`Entrez votre age :`);
//   if (age === null) return;
//   age = Number(age);
//   } while (isNaN(age) || age <= 0);

//   age >= 18
//     ? alert(`Vous avez l'âge requis pour conduire`)
//     : alert(
//         `Vous n'avez pas l'âge requis pour conduire, vous devez encore attendre ${
//           18 - age
//         } ans`
//       );
// }

// calculAge();

// Comparez les valeurs de myAge et yourAge en utilisant if … else.
// Sur la base de la comparaison, enregistrez le résultat dans la console en indiquant qui est
// le plus âgé (moi ou vous). Utilisez prompt(“Enter your age:”) pour obtenir l’âge en tant qu’entrée.
// Enter your age: 30
// You are 5 years older than me.

// let myAge = 34;

// function compareAge() {
//   let yourAge;

//   do {
//     yourAge = prompt(`Entrez votre age :`);
//     if (yourAge === null) return;
//     yourAge = Number(yourAge);
//   } while (isNaN(yourAge) || yourAge <= 0);

//   if (myAge < yourAge) {
//     alert(`Vous avez ${yourAge - myAge} ans de plus que moi.`);
//   } else if (myAge == yourAge) {
//     alert(`Nous avons exactement le même age.`);
//   } else {
//     alert(`Vous avez ${myAge - yourAge} de moins que moi.`);
//   }
// }

// compareAge();

// Si a est supérieur à b, renvoyez « a est supérieur à b » sinon « a est inférieur à b ».
// Essayez de l'implémenter de deux manières

// en utilisant si sinon
// opérateur ternaire.
//   let a = 4
//   let b = 3
//   4 is greater than 3

// let a = 4;
// let b = 3;

// if (a > b) {
//   console.log(`A est supérieur à B`);
// } else if (a === b) {
//   console.log(`A est B sont identiques`);
// } else {
//   console.log(`B est supérieur à A`);
// }

// // ternaire

// a > b
//   ? console.log(`A est supérieur à B`)
//   : a === b
//   ? console.log(`A est B sont identiques`)
//   : console.log(`B est supérieur à A`);

// Les nombres pairs sont divisibles par 2 et le reste est nul.
// Comment vérifier si un nombre est pair ou non à l'aide de JavaScript ?

// Enter a number: 2
// 2 is an even number

// Enter a number: 9
// 9 is is an odd number.

// function verificationNum() {
//   let num;
//   do {
//     num = prompt(`Enter a number :`);
//     if (num === null) return;
//     num = Number(num);
//   } while (isNaN(num) || num <= 0);

// if (num % 2 === 0) {
//   console.log(`Nombre pair`);
// } else {
//   console.log(`Nombre impair`);
// }

//   num % 2 == 0 ? alert(`is an even number.`) : alert(`is is an odd number.`);
// }

// verificationNum();

// Écrivez un code qui peut donner des notes aux étudiants en fonction de leurs résultats :
// 80-100, A
// 70-79, B
// 60-69, C
// 50-59, D
// 0-49, F

// function noteGlobal() {
//   let note;
//   do {
//     note = prompt("Saisissez une note :");
//     if (note === null) return;
//     note = Number(note);
//   } while (isNaN(note));

//   if (note < 0 || note > 100) {
//     alert(`La note que vous avez saisie n'est pas valide.`);
//     return;
//   }

//   let grade =
//     note < 50 ? "F" : note < 60 ? "D" : note < 70 ? "C" : note < 80 ? "B" : "A";

//   alert(`Votre note est ${note} : Vous avez obtenu un ${grade}`);
// }

// noteGlobal();

// Vérifiez si la saison est l'automne, l'hiver, le printemps ou l'été. Si la saisie de l'utilisateur est :
// Septembre, octobre ou novembre, la saison est l'automne.
// Décembre, janvier ou février, la saison est l'hiver.
// Mars, avril ou mai, la saison est le printemps
// Juin, juillet ou août, la saison est l'été

// function saison() {
//   let month;

//   do {
//     month = prompt(`Merci de saisir un mois de l'année (Exemple: janvier) :`);
//     if (month === null) return;
//     month = month.trim().toLowerCase();
//   } while (!month || !isNaN(month));

//   switch (month) {
//     case "décembre":
//     case "janvier":
//     case "février":
//       alert(`Nous sommes en ${month}, donc nous sommes en hiver.`);
//       break;
//     case "mars":
//     case "avril":
//     case "mai":
//       alert(`Nous sommes en ${month}, donc nous sommes au printemps.`);
//       break;
//     case "juin":
//     case "juillet":
//     case "août":
//       alert(`Nous sommes en ${month}, donc nous sommes en été.`);
//       break;
//     case "septembre":
//     case "octobre":
//     case "novembre":
//       alert(`Nous sommes en ${month}, donc nous sommes en automne.`);
//       break;
//     default:
//       alert(`Vous m'avez indiqué ${month}, mais je ne connais pas ce mois...`);
//       break;
//   }
// }

// saison();

// Vérifiez si un jour est un jour de week-end ou un jour ouvrable. Votre script prendra le jour comme valeur d'entrée.
//   What is the day  today? Saturday
//   Saturday is a weekend.

//   What is the day today? saturDaY
//   Saturday is a weekend.

//   What is the day today? Friday
//   Friday is a working day.

//   What is the day today? FrIDAy
//   Friday is a working day.

// function dayOfWeek() {
//   let days;

//   do {
//     days = prompt(`What is the day today?`);
//     if (days === null) return;
//     days = days.trim().toLowerCase();
//   } while (!days || !isNaN(days));

//   switch (days) {
//     case "lundi":
//     case "mardi":
//     case "mercredi":
//     case "jeudi":
//     case "vendredi":
//       alert(`${days} is a working day`);
//       break;
//     case "samedi":
//     case "dimanche":
//       alert(`${days} is a weekend.`);
//       break;
//     default:
//       alert(`Je ne connais pas ce jour ...`);
//       break;
//   }
// }

// dayOfWeek();

// Écrivez un programme qui indique le nombre de jours dans un mois.
//   Enter a month: January
//   January has 31 days.

//   Enter a month: JANUARY
//   January has 31 day

//   Enter a month: February
//   February has 28 days.

//   Enter a month: FEbruary
//   February has 28 days.

// function daysOfMonth() {
//   let month;
//   const validMonth = [
//     "janvier",
//     "février",
//     "mars",
//     "avril",
//     "mai",
//     "juin",
//     "juillet",
//     "août",
//     "septembre",
//     "octobre",
//     "novembre",
//     "décemnbre",
//   ];

//   do {
//     month = prompt(`Veuillez saisir un moi de l'année`);
//     if (month === null) return;
//     month = month.trim().toLowerCase();
//   } while (!month || !validMonth.includes(month));

//   switch (month) {
//     case "janvier":
//     case "avril":
//     case "juin":
//     case "septembre":
//     case "novembre":
//     case "décembre":
//       alert(`il y a 31 jours dans le mois de ${month}`);
//       break;
//     case "février":
//       alert(`il y a 28 jours dans le mois de ${month}`);
//       break;
//     case "mars":
//     case "mai":
//     case "juillet":
//     case "août":
//     case "octobre":
//       alert(`il y a 30 jours dans le mois de ${month}`);
//       break;
//     default:
//       alert(`Je ne connais pas ce jour ...`);
//       break;
//   }
// }

// daysOfMonth();

// ------------------------

// Conversion simple :
// Convertis la phrase "JAVASCRIPT EST PUISSANT" en minuscules.

// let array = `JAVASCRIPT EST PUISSANT`
// console.log(array.toLowerCase())

// Fonction de conversion :
// Crée une fonction convertToLower qui prend une chaîne en paramètre et retourne la chaîne en minuscules.
// let phrase = `JAVASCRIPT EST PUISSANT`;

// function convertToLower(params) {
//   return params.toLowerCase();
// }

// let convertToLower = (params) => params.toLowerCase();

// console.log(convertToLower(phrase));

// Phrase mixte :
// Transforme la phrase suivante en minuscules : "Le JAVASCRIPT Est FORMIDABLE" → "le javascript est formidable"

// let phrase = "Le JAVASCRIPT Est FORMIDABLE"
// .toLowerCase()

// console.log(phrase)

// Email en minuscules :
// Simule la vérification d’un email en le convertissant en minuscules : "Exemple@GMAIL.com" → "exemple@gmail.com"

// let email = "Exemple@GMAIL.com"

// let verifMail = (params) => params.toLowerCase()

// console.log(verifMail(email))

// Tableau de mots :
// À partir du tableau ["HTML", "CSS", "JAVASCRIPT"], crée un nouveau tableau où tous les éléments sont en minuscules.

// let skills = ["HTML", "CSS", "JAVASCRIPT"];

// function convertArray(params) {
//   return params.map((params) => params.toLowerCase());
// }

// console.log(convertArray(skills));

// Nom d’utilisateur :
// Demande à l'utilisateur d'entrer son prénom en majuscules (ex: "MATTHIEU") puis affiche-le en minuscules.

// let prenom;

// function demandePrenom() {
//   do {
//     prenom = prompt("Quel et votre prenom ?");
//     if (prenom === null) return;
//     prenom = prenom.trim().toLowerCase();
//   } while (!prenom || /\d/.test(prenom));

//   alert(`Votre prénom en minuscule et ${prenom}`);
// }

// demandePrenom();

// Comparaison insensible à la casse :
// Crée une fonction compareStrings qui compare deux chaînes de caractères sans tenir compte des majuscules/minuscules.
// Exemple : compareStrings("JavaScript", "javascript") doit retourner true.

// const compareStrings = (paramUn, paramDeux) =>
//   paramUn.toLowerCase() === paramDeux.toLowerCase();

// console.log(compareStrings("javascript", "JAVASCRIPT"));

// Format de texte propre :
// Prends la phrase : " CECI EST UN TEST AVEC DES ESPACES ", supprime les espaces inutiles avec trim() puis convertis le texte en minuscules.

// function textPropre() {
//   let phrase = " CECI EST UN TEST AVEC DES ESPACES ";

//   let strUn = phrase.trim();
//   let result = strUn.toLowerCase();

//   console.log(result);
// }

// textPropre();

// function textPropre() {
//   let phrase = " CECI EST UN TEST AVEC DES ESPACES ";

//   return phrase.trim().toLowerCase();
// }

// console.log(textPropre());

// Transformation d'un mot de passe :
// Convertis un mot de passe en minuscules pour vérifier s'il correspond à une version attendue.
// Exemple : "PaSsWorD123" → "password123" (sans changer les chiffres).

// let passwordRef = "password123";

// function transformPassword(params) {
//   return params.toLowerCase();
// }

// console.log(transformPassword("PaSsWorD123") === passwordRef);

// Concaténation & conversion :
// Concatène deux phrases : "BONJOUR" et "LE MONDE", puis affiche le résultat en minuscules :
// Résultat attendu : "bonjour le monde"

// function concat(stringUn, StringDeux) {
//   console.log(`${stringUn} ${StringDeux}`.toLowerCase());
// }

// concat("BONJOUR", "LE MONDE DE FOU");

// Déclarer un tableau vide ;

// const tableau = Array()
// console.log(tableau)

// Déclarer un tableau avec plus de 5 éléments

// const tableau = Array("HTML", "REACT", "JAVASCRIPT", "CSS", "NEXT.JS")
// console.log(tableau)

// Trouvez la longueur de votre tableau

// const tableau = Array("HTML", "REACT", "JAVASCRIPT", "CSS", "NEXT.JS")
// console.log(tableau.length)

// Obtenir le premier élément, l'élément du milieu et le dernier élément du tableau
// let tableau = Array("HTML", "REACT", "JAVASCRIPT", "CSS", "NEXT.JS");

// let resultUn = tableau[0];
// let resultDeux = tableau[Math.floor(tableau.length / 2)];
// let resultTrois = tableau[tableau.length - 1];

// let result = [resultUn, resultDeux, resultTrois];

// console.log(result);

// Déclarez un tableau appelé mixedDataTypes , placez différents types de données dans le tableau et recherchez la longueur du tableau. La taille du tableau doit être supérieure à 5

// let mixedDataTypes = Array();

// mixedDataTypes.push("html", "javascript", "react", "next.js", "css");

// console.log(mixedDataTypes);

// Déclarez une variable de tableau nommée itCompanies et attribuez-lui des valeurs
// initiales Facebook, Google, Microsoft, Apple, IBM, Oracle et Amazon

// let itCompanies = Array();
// itCompanies.push(
//   "Facebook",
//   "Google",
//   "Microsoft",
//   "Apple",
//   "IBM",
//   "Oracle",
//   "Amazon"
// );

// console.log(itCompanies);

// Imprimer le tableau en utilisant console.log()

// console.log(itCompanies);

// Imprimer le nombre d'entreprises dans le tableau

// console.log(itCompanies.length);

// Imprimez la première entreprise, la deuxième et la dernière entreprise

// console.log(
//   itCompanies[0],
//   itCompanies[Math.floor(itCompanies.length / 2)],
//   itCompanies[itCompanies.length - 1]
// );

// Imprimez chaque entreprise

// itCompanies.map((compagny) => console.log(compagny));

// Modifiez le nom de chaque entreprise en majuscules une par une et imprimez-les

// console.log(itCompanies[0].toUpperCase());
// console.log(itCompanies[1].toUpperCase());
// console.log(itCompanies[2].toUpperCase());
// console.log(itCompanies[3].toUpperCase());
// console.log(itCompanies[4].toUpperCase());
// console.log(itCompanies[5].toUpperCase());
// console.log(itCompanies[6].toUpperCase());

// Imprimez le tableau comme une phrase : Facebook, Google, Microsoft, Apple, IBM, Oracle et Amazon sont de grandes entreprises informatiques.

// console.log(
//   `${itCompanies[0]}, ${itCompanies[1]}, ${itCompanies[2]}, ${itCompanies[3]}, ${itCompanies[4]}, ${itCompanies[5]}, ${itCompanies[6]} sont de grandes entreprises informatiques.`
// );

// Vérifiez si une certaine entreprise existe dans le tableau itCompanies. Si elle existe, renvoyez l'entreprise, sinon renvoyez une entreprise introuvable

// function searchEntreprise() {
//   let response;

//   do {
//     response = prompt(`Veuillez rentré un nombre d'entreprise :)`);
//     if (response === null) return;
//     response = response.trim().toLowerCase();
//   } while (!response || !isNaN(response));

//   let result = itCompanies.find(
//     (compagny) => compagny.toLowerCase() === response
//   );

//   result
//     ? alert(`Votre entreprise est bien présente dans la liste : ${result}`)
//     : alert(`Votre entreprise n'est pas présente dans la liste.`);
// }

// searchEntreprise();

// Filtrer les entreprises qui ont plus d'un « o » sans la méthode de filtrage

// function filteredEntreprise() {
//   filtered = itCompanies.filter((compagny) => {
//     let count = compagny
//       .toLowerCase()
//       .split("")
//       .filter((letter) => letter === "o").length;
//     return count > 1;
//   });
//   console.log(filtered);
// }

// filteredEntreprise();

// Trier le tableau à l'aide de la méthode sort()

// function trieTableau() {
//   let sortedCompagny = [...itCompanies].sort();
//   console.log(sortedCompagny)
//   console.log(itCompanies)
// }

// trieTableau();

// Inverser le tableau en utilisant la méthode reverse()

// const reverseArray = () => {
//   let arrayCopie = [...itCompanies].reverse();
//   console.log(arrayCopie);
//   console.log(itCompanies);
// };

// reverseArray();

// Découpez les 3 premières entreprises du tableau

// let cutArray = () => {
//   let newArray = [...itCompanies].slice(0, 3);
//   console.log(newArray);
// };

// cutArray();

// Découpez les 3 dernières entreprises du tableau

// let cutArray = () => {
//   let newArray = [...itCompanies].slice(4, 7);
//   console.log(newArray);
//   console.log(itCompanies);
// };

// cutArray();

// let text =
//   "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

// function str(params) {
//   let result = params.replace(/[.,!?;:'"()\-]/g, "").split(" ").length;

//   console.log(result);
// }

// const str = (params) => {
//   let result = params.replace(/[.,!?;:'"()\-]/g, "").split(" ").length;
//   console.log(result);
// };
// str(text);

// Dans le panier suivant, ajoutez, supprimez, modifiez des articles

// ajoutez « Viande » au début de votre panier si elle n'a pas déjà été ajoutée
/*
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
shoppingCart.unshift("Viande");
console.log(shoppingCart);
*/

// ajoutez du sucre à la fin de votre panier s'il n'a pas déjà été ajouté
/*
shoppingCart.push("Sucre");
console.log(shoppingCart);
*/

// supprimez « Honey » si vous êtes allergique au miel
/*
let index = shoppingCart.indexOf("Honey");
if (index !== -1) shoppingCart.splice(index, 1);
console.log(shoppingCart);
*/

// modifier le Tea en « Tea vert »
/*
let indexTwo = shoppingCart.indexOf("Tea");
if (indexTwo !== -1) shoppingCart.splice(indexTwo, 1, "Tea Vert");
console.log(shoppingCart);
*/

// Dans le tableau des pays, vérifiez si « Ethiopia » existe dans le tableau.
// Si tel est le cas, imprimez « ETHIOPIA ». S'il n'existe pas, ajoutez-le à la liste des pays.
/*
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
*/
/*
function recherche(params) {
  countries.includes(params)
    ? console.log(params.toUpperCase())
    : countries.push(params);

  console.log(countries);
}

recherche("Ethiopia");
*/

// Dans le tableau webTechs, vérifiez si Sass existe dans le tableau et, s'il existe,
// imprimez « Sass est un préprocessus CSS ».
// S'il n'existe pas, ajoutez Sass au tableau et imprimez le tableau.
/*
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
  "Sass",
];
*/
/*
function recherche(params) {
  webTechs.includes(params)
    ? console.log(`${params} est un préprocessus CSS`)
    : webTechs.push(params);

  console.log(webTechs);
}

recherche("Sass");
*/

// Concaténez les deux variables suivantes et stockez-les dans une variable fullStack.

/*
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];

let fullStack = frontEnd.concat(backEnd);

console.log(fullStack);
*/

// Voici un tableau de 10 élèves par âge :

// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Trier le tableau et trouver l'âge minimum et maximum
/*
let sortArray = (params) => {
  let result = [...params].sort((a, b) => a - b);
  console.log(result);

  console.log(result[0]);
  console.log(result[result.length - 1]);
};

sortArray(ages);
*/
// Trouvez l'âge médian (un élément du milieu ou deux éléments du milieu divisés par deux)

/*
const findMedianAge = (arr) => {
  let sorted = [...arr].sort((a, b) => a - b);
  let mid = Math.floor(sorted.length / 2);

  return sorted.length % 2 === 0
    ? (sorted[mid - 1] + sorted[mid]) / 2 // Moyenne des deux éléments du milieu
    : sorted[mid]; // Élément du milieu si longueur impaire
};

console.log(findMedianAge(ages));
*/

// Trouvez l'âge moyen (tous les éléments divisés par le nombre d'éléments)
/*
const findAverageAge = (arr) => {
  let agesCopie =
    [...arr].sort((a, b) => a - b).reduce((a, b) => a + b, 0) / arr.length;

  console.log(agesCopie);
};

findAverageAge(ages);
*/

// Trouver la plage d'âges (max moins min)
/*
const findAverageAge = (arr) => {
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  let result = max - min;

  console.log(result);
};

findAverageAge(ages);
*/

// Découpez les dix premiers pays du tableau des pays

/*
let result = countries.slice(0, 10);
console.log(result);
*/

// Trouvez le(s) pays du milieu dans le tableau des pays
/*
const findMiddleResult = (arr) => {
  let middleResult = Math.floor(arr.length / 2);

  if (arr.length % 2 === 0) {
    return [arr[middleResult - 1], arr[middleResult]];
  } else {
    return [arr[middleResult]];
  }
};

console.log(findMiddleResult(countries));
*/
/*
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
];
*/
// Divisez le tableau des pays en deux tableaux égaux s'il est pair. Si le tableau des pays n'est pas pair, un pays de plus pour la première moitié.

/*
function cutArray(params) {
  let middle = Math.ceil(params.length / 2);

  let strA = params.slice(0, middle);
  let strB = params.slice(middle);

  return { strA, strB };
}

const { strA, strB } = cutArray(countries);
console.log(strA);
console.log(strB);
*/

// Extraction simple :
// Extrais le mot "Script" de la chaîne "JavaScript".

// let string = "JavaScript";
// let result = console.log(string.substring(4));

// Fonction des 3 premiers caractères :
// Crée une fonction getFirstThreeChars qui prend une chaîne en paramètre et retourne ses 3 premiers caractères.
// Exemple : getFirstThreeChars("Bonjour") → "Bon"

// function getFirstThreeChars(str) {
//   return str.substring(0, 3);
// }

// console.log(getFirstThreeChars("Bonjour"));

// Derniers caractères d'une chaîne :
// À partir de la chaîne "Développement", extrais les 4 derniers caractères. (Indice : utilise substring avec la longueur de la chaîne.)
// function getChars(str) {
//   return str.substring(str.length - 4);
// }

// console.log(getChars("Développement"));

// Extraction d’un prénom :
// À partir de la chaîne "Matthieu Dupont", extrais uniquement le prénom.

// function extractString(str) {
//   let index = str.indexOf(" ");
//   return str.substring(0, index);
// }

// console.log(extractString("Matthieu Dupont"));

// Sous-chaîne dynamique :
// Crée une fonction extractPart qui prend une chaîne, un indice de début et un indice de fin en paramètres, puis retourne la sous-chaîne correspondante.
// Exemple : extractPart("Programmation", 3, 8) → "gramm"

// function extractPart(str, indexStart, indexEnd) {
//   return str.substring(indexStart, indexEnd);
// }

// console.log(extractPart("Programmation", 3, 8));

// Mots extraits d'une phrase :
// À partir de la phrase "Le JavaScript est génial", extrais le mot "JavaScript".

// function extractString(str) {
//   let indexOne = str.toLowerCase().indexOf("javascript");
//   let indexTwo = indexOne + "javascript".length;
//   console.log(indexOne);
//   console.log(indexTwo);

//   return str.substring(indexOne, indexTwo);
// }

// console.log(extractString("Le Javascript est génial"));

// Découpage d’une date :
// À partir de la date "2025-02-10", extrais uniquement l'année. Résultat attendu : "2025".

// function extractYear(num) {
//   return num.substring(0, 4);
// }

// console.log(extractYear("2025-02-10"));

// Extraction de caractères pairs :
// Crée une fonction qui prend une chaîne et retourne un nouveau mot composé uniquement des caractères à des indices pairs.
// Exemple : "Bonjour" → "Bno" (indices 0, 2, 4).

// function newStringPair(str) {
//   let newString = "";

//   for (let i = 0; i < str.length; i++) {
//     if (i % 2 === 0) {
//       newString += str[i];
//     }
//   }

//   return newString;
// }
// console.log(newStringPair("Bonjour"));

// Initiales d’un nom complet :
// À partir de la chaîne "Jean Dupont", extrais la première lettre de chaque mot pour obtenir les initiales : "JD".

// function initialString(str) {
//   let initial = "";

//   let stringOne = str.substring(0, str.indexOf(" "));
//   let stringTwo = str.substring(str.indexOf(" ") + 1);

//   initial = stringOne[0] + stringTwo[0];

//   return initial.toUpperCase();
// }

// console.log(initialString("Matthieu Vachet"));

// Masquage d'un mot de passe :
// À partir de la chaîne "MotDePasse123", remplace tous les caractères sauf les 4 derniers par des astérisques (*).
// Résultat attendu : **"*******e123".

// function passwordTransform(str) {
//   let result = "";

//   let noReplaceString = str.substring(str.length - 4);
//   console.log(noReplaceString);

//   for (let i = 0; i < str.length - 4; i++) {
//     result += "*";
//   }
//   return result + noReplaceString;
// }

// console.log(passwordTransform("MotDePasse123"));

// let mot = "JavaScript";
// console.log(mot.substring(4));

// function substringMot(str, lenght)
// {
//   return str.substring(lenght);
// }

// console.log(substringMot("Matthieu", 0));
// function evenIndexChars(str) {
//   let result = "";

//   for (let i = 0; i < str.length; i += 2) {
//     result += str.substring(i, i + 1);
//   }
//   return result;
// }

// console.log(evenIndexChars("Bonjour"));

// function getInitial(str) {
//   if (typeof str !== "string") return "";
//   const words = str.trim().split(/\s+/);
//   if (words.length === 0) return "";

//   let initials = "";
//   for (let i = 0; i < words.length; i++) {
//     initials += words[i].substring(0, 1);
//   }
//   return initials.toUpperCase();
// }

// console.log(getInitial("Matthieu Vachet"));

// function getMotDePasse(str) {
//   if (typeof str !== "string") return "";
//   let n = str.trim();
//   console.log(n);

//   let s = str.length;
//   console.log(s);

//   if (s <= 4) return n;

//   let mot1 = n.substring(s - 4);
//   console.log(mot1);

//   let mot2 = "*".repeat(s - 4);
//   console.log(mot2);

//   let result = mot2 + mot1;

//   return result;
// }

// console.log(getMotDePasse("ma1234"));

// function getString(str) {
//   if (typeof str !== "string") return "";
//   let n = str.trim().toLowerCase();
//   if (n.length === 0) return "";

//   let s = n.slice(0, 1).toUpperCase();
//   return s;
// }

// console.log(getString("Clara"));

// function getString(str) {
//   if (typeof str !== "string") return "";
//   let a = str.trim().toLowerCase();
//   if (a.length === 0) return "";

//   let b = a.slice(a.length - 4);
//   return b;
// }
// console.log(getString("Matthieu"));

// const declarativeString = " DÉVELOPPEMENT WEB ";
// let a = declarativeString.trim().toLowerCase();
// let b = a.slice(2, 9);
// console.log(b);

// function inversedSlice(str) {
//   let inversed = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     inversed += str.slice(i, i + 1);
//   }
//   return inversed;
// }
// console.log(inversedSlice("abc"));

// function inverseAvecSlice2_debug(str) {
//   console.log("Input brut :", JSON.stringify(str));
//   console.log("Chars :", [...str]);
//   let inversed = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     const ch = str.slice(i, i + 1);
//     console.log(i, "->", JSON.stringify(ch));
//     inversed += ch;
//   }
//   return inversed;
// }

// console.log("Résultat final :", inverseAvecSlice2_debug("abc"));

// function codePostalSlice(str) {
//   if (typeof str !== "string") return "";
//   let a = str.trim().toLowerCase();
//   if (a.length === 0) return "";

//   let b = a.slice(a.length - 2);
//   return b;
// }

// console.log(codePostalSlice("75018"));

// let mail = "https://www.example.com/page";

// function extractMail(str) {
//   if (typeof str !== "string") return "Error";
//   let a = str.trim().toLowerCase();
//   if (a.length === 0) return "Error";

//   let b = a.slice(12, -9);
//   return b;
// }

// console.log(extractMail(mail));

// let mail = "https://www.example.com/page";

// function extractMail(str) {
//   if (typeof str !== "string") return "Error";
//   let a = str.trim().toLowerCase();
//   if (a.length === 0) return "Error";

//   let start = a.indexOf("www.") + 4;
//   console.log(start);

//   let end = a.indexOf(".com");
//   console.log(end);

//   let b = a.slice(start, end);
//   return b;
// }

// console.log(extractMail(mail));

// for (let i = 0; i <= 100; i++) {
//   console.log(`${i} * ${i} = ${i * i}`);
// }

// const countries = ["Finland", "Sweden", "Denmark", "Norway", "Iceland"];
// let newArray = [];

// for (let i = 0; i < countries.length; i++) {
//   newArray.push(countries[i].trim().toUpperCase());
// }
// console.log(newArray);

/*const numbers = [1, 2, 3, 4, 5];

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);*/
