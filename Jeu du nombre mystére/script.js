
// Récupération des éléments du DOM
const userInput = document.getElementById('userInput');
const BtnTester = document.getElementById('submitBtn');
const tentatives = document.getElementById('attempts');
const btnReset = document.getElementById('resetBtn');
const difficulté = document.getElementById('difficulty');
const status = document.getElementById('status')
const historique = document.getElementById('historyList')
const feedback = document.getElementById('feedback')

/**
 * @function nombreRandom
 * @description Génère un nombre entier aléatoire entre 0 (inclus) et nbr (exclus).
 * Utilise Math.random() pour générer une valeur pseudo-aléatoire et Math.floor() pour obtenir un entier.
 * Attention : cette fonction n'est pas cryptographiquement sécurisée et ne doit pas être utilisée pour des enjeux de sécurité.
 * 
 * @param {number} nbr - La limite supérieure exclusive du nombre aléatoire.
 *                       Doit être un entier positif supérieur à 0.
 *                       Ex: 100 génère un nombre entre 0 et 99
 * 
 * @returns {number} Un nombre entier aléatoire compris entre 0 et nbr - 1
 * @example
 * // Génère un nombre entre 0 et 99
 * const random = nombreRandom(100);
 * console.log(random); // affiche: 42
 */

function nombreRandom(nbr) {
  return Math.floor(Math.random() * nbr + 1)
}

let nombreSecret = nombreRandom(50); // Variable pour stocker le nombre secret en fonction de la difficulté choisie
console.log("🎮 Nombre secret initial:", nombreSecret);

// Variable de Tentative
let compteurTentative = 0;


/**
 * @function resetGame
 * @description Réinitialise le jeu en générant un nouveau nombre secret et en réinitialisant les variables.
 */

function resetGame() {
  userInput.value = "" // Réinitialise le champ de saisie
  BtnTester.disabled = false // Réactive le bouton de test
  compteurTentative = 0 // Réinitialise le compteur de tentatives
  tentatives.textContent = compteurTentative // Met à jour l'affichage du compteur de tentatives
  status.textContent = "En cours..." // Réinitialise le statut du jeu
  historique.innerHTML = "" // Réinitialise l'historique des essais
  nombreSecret = nombreRandom(parseInt(difficulté.value)) // Génère un nouveau nombre secret en fonction de la difficulté actuelle
  console.log("🎮 Jeu réinitialisé. Nouveau nombre secret:", nombreSecret)
}

// Choix de la difficulté
difficulté.addEventListener('change', function() {
  const selectedDifficulty = this.value;
  if (selectedDifficulty === "50") { 
    nombreSecret = nombreRandom(50)
  } else if (selectedDifficulty === "100") {
    nombreSecret = nombreRandom(100)
  } else if (selectedDifficulty === "500") {
    nombreSecret = nombreRandom(500)
  }
  console.log("🎮 Nouveau nombre secret:", nombreSecret, "Difficulté:", selectedDifficulty);
})

// Vérification de la saisie utilisateur
userInput.addEventListener('input', function() {
  const value = this.value
  if (value === '' || isNaN(value) || value < 1 || value > parseInt(difficulté.value)) {
    alert("⚠️ Veuillez entrer un nombre valide entre 1 et " + difficulté.value);
    userInput.value = ''; // Réinitialise le champ de saisie
  }
  console.log("🎮 Nombre utilisateur:", userInput.value);
})

/**
  * @function updateHistoriqueStatus
  * @description Met à jour l'historique des essais avec le message correspondant à chaque tentative.
  * Crée un nouvel élément de liste (li) pour chaque essai et l'ajoute à la liste d'historique.
  * Affiche le numéro de tentative, la valeur saisie par l'utilisateur et le message de statut (trop petit, trop grand
  * ou gagné).
  * 
  * @param {string} message - Le message de statut à afficher pour l'essai actuel (ex: "Trop petit", "Trop grand", "Gagné").
  * 
  * @example
  * // Après une tentative où l'utilisateur a saisi 25 et que le nombre secret est plus grand
  * updateHistoriqueStatus("Trop petit");
  * // Affiche dans l'historique: "Essai 1: 25 (Trop petit)"
  */

function updateHistoriqueStatus(message) {
  const li = document.createElement('li');
  li.textContent = `Essai ${compteurTentative}: ${userInput.value} (${message})`;
  historique.appendChild(li);
}

// Fonction de validation du nombre saisi
BtnTester.addEventListener('click', function() {
  const value = userInput.value;
  
  // Vérification que le champ n'est pas vide
  if (value === '' || isNaN(value)){
    alert("⚠️ Veuillez entrer un nombre valide entre 1 et " + difficulté.value);
    return;
  }
  
  const userGuess = parseInt(value);
  compteurTentative++;
  tentatives.textContent = compteurTentative;

  if (userGuess < nombreSecret) {
    status.textContent = 'Trop petit !'
    updateHistoriqueStatus('Trop petit');
    userInput.value = ""; // Réinitialise le champ de saisie après chaque essai
  } else if (userGuess > nombreSecret) {
    status.textContent = 'Trop grand !'
    updateHistoriqueStatus('Trop grand');
    userInput.value = ""; // Réinitialise le champ de saisie après chaque essai
  } else if (userGuess === nombreSecret) {
    status.textContent = `Gagné!`
    const p = document.createElement('p');
    updateHistoriqueStatus('Gagné');
    p.textContent = `Bravo! Gagné en ${compteurTentative} tentatives !`;
    feedback.appendChild(p);
    BtnTester.disabled = true; // Désactive le bouton après victoire
  }
})

// Bouton de réinitialisation du jeu
btnReset.addEventListener('click', resetGame);
