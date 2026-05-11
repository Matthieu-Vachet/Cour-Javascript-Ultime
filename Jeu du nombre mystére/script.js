// Récupération des éléments du DOM
const userInput = document.getElementById("userInput");
const BtnTester = document.getElementById("submitBtn");
const tentatives = document.getElementById("attempts");
const btnReset = document.getElementById("resetBtn");
const difficulté = document.getElementById("difficulty");
const status = document.getElementById("status");
const historique = document.getElementById("historyList");
const feedback = document.getElementById("feedback");

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
  return Math.floor(Math.random() * nbr + 1);
}

let nombreSecret = nombreRandom(parseInt(difficulté.value)); // Variable pour stocker le nombre secret en fonction de la difficulté choisie
console.log("🎮 Nombre secret initial:", nombreSecret);

// Variable de Tentative
let compteurTentative = 0;

/**
 * @function resetGame
 * @description Réinitialise le jeu en générant un nouveau nombre secret et en réinitialisant les variables.
 */

function resetGame() {
  userInput.value = ""; // Réinitialise le champ de saisie
  userInput.disabled = false;
  BtnTester.disabled = false; // Réactive le bouton de test
  compteurTentative = 0; // Réinitialise le compteur de tentatives
  tentatives.textContent = compteurTentative; // Met à jour l'affichage du compteur de tentatives
  status.textContent = "En cours..."; // Réinitialise le statut du jeu
  historique.innerHTML = ""; // Réinitialise l'historique des essais
  nombreSecret = nombreRandom(parseInt(difficulté.value)); // Génère un nouveau nombre secret en fonction de la difficulté actuelle
  console.log("🎮 Jeu réinitialisé. Nouveau nombre secret:", nombreSecret);
}

// Choix de la difficulté
difficulté.addEventListener("change", function () {
  const selectedDifficulty = this.value;
  if (selectedDifficulty === "50") {
    nombreSecret = nombreRandom(50);
  } else if (selectedDifficulty === "100") {
    nombreSecret = nombreRandom(100);
  } else if (selectedDifficulty === "500") {
    nombreSecret = nombreRandom(500);
  }
  console.log(
    "🎮 Nouveau nombre secret:",
    nombreSecret,
    "Difficulté:",
    selectedDifficulty,
  );
});

// Vérification de la saisie utilisateur
userInput.addEventListener("input", function () {
  const value = this.value;
  if (
    value === "" ||
    isNaN(value) ||
    value < 1 ||
    value > parseInt(difficulté.value)
  ) {
    alert("⚠️ Veuillez entrer un nombre valide entre 1 et " + difficulté.value);
    userInput.value = ""; // Réinitialise le champ de saisie
  }
  console.log("🎮 Nombre utilisateur:", userInput.value);
});

/**
 * @function updateHistoriqueStatus
 * @description Met à jour l'historique des essais avec le message correspondant à chaque tentative.
 * Crée un nouvel élément de liste (li) pour chaque essai et l'ajoute à la liste d'historique.
 * Affiche le numéro de tentative, la valeur saisie par l'utilisateur et le message de statut (trop petit, trop grand
 * ou gagné).
 *
 * @param {string} message - Le message de statut à afficher pour l'essai actuel (ex: "Trop petit", "Trop grand", "Gagné").
 */

function updateHistoriqueStatus(message) {
  const li = document.createElement("li");
  li.textContent = `Essai ${compteurTentative}: ${userInput.value} (${message})`;
  historique.appendChild(li);
}

// Fonction de validation du nombre saisi
BtnTester.addEventListener("click", handleGuess)


/**
  * @function handleGuess
  * @description Gère la validation de la saisie de l'utilisateur lorsqu'il clique sur le bouton de test.
  * Vérifie si la valeur saisie est un nombre valide et dans la plage autorisée en fonction de la difficulté choisie.
  * Si la saisie est invalide, affiche une alerte et réinitialise le champ de saisie.
  * Si la saisie est valide, incrémente le compteur de tentatives, met à jour l'affichage du nombre de tentatives,
  * et appelle la fonction checkResult pour vérifier si l'utilisateur a trouvé le nombre secret ou s'il doit continuer à deviner.
 */
function handleGuess() {
  const UserValue = Number(userInput.value);

  if (isNaN(UserValue)) {
    alert("⚠️ Veuillez entrer un nombre valide entre 1 et " + difficulté.value);
    return;
  }
  compteurTentative++;
  tentatives.textContent = compteurTentative;
  checkResult(UserValue);
}


/**
 * @function checkResult
 * @description Vérifie si la valeur saisie par l'utilisateur correspond au nombre secret.
 * Affiche un message de victoire si l'utilisateur trouve le nombre secret, ou indique si la valeur est trop petite ou trop grande.
 * Met à jour le statut du jeu et l'historique des essais en fonction du résultat de chaque tentative.
 * @param {number} value - La valeur saisie par l'utilisateur à comparer avec le nombre secret.
 */
function checkResult(value) {
  if (value === nombreSecret) {
    win();
  } else if (value < nombreSecret) {
    status.textContent = "Trop petit !";
    updateHistoriqueStatus("Trop petit");
    userInput.value = ""; // Réinitialise le champ de saisie après chaque essai
  } else {
    status.textContent = "Trop grand !";
    updateHistoriqueStatus("Trop grand");
    userInput.value = ""; // Réinitialise le champ de saisie après chaque essai
  }
}

/**
 * @function win
 * @description Affiche le message de victoire lorsque l'utilisateur trouve le nombre secret.
 * Met à jour le statut du jeu, ajoute un message de félicitations dans la section de feedback,
 * et désactive le bouton de test et le champ de saisie pour empêcher de nouvelles tentatives après la victoire.
 */
function win() {
  status.textContent = `Gagné!`;
  const p = document.createElement("p");
  updateHistoriqueStatus("Gagné");
  p.textContent = `Bravo! Gagné en ${compteurTentative} tentatives !`;
  feedback.appendChild(p);
  BtnTester.disabled = true; // Désactive le bouton après victoire
  userInput.disabled = true;
}

// Bouton de réinitialisation du jeu
btnReset.addEventListener("click", resetGame);
