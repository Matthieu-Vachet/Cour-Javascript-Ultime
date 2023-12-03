// L'objet Window a pour fonction d'englober l'ensemble des fonctions, et autres objets de JavaScript. C'est de lui que tout part.


// Ouvrir une fenêtre

window.open('https://believemy.com');

// --------------------------------------

// Redimensionner une fenêtre

let fenetre = window.open('https://believemy.com', '', 'width=900, height=700');

function resize() {
fenetre.resizeTo(700, 470);
}

// --------------------------------------

// Fermer une fenêtre

let fenetres = window.open('https://believemy.com', '', 'width=900, height=700');

function resize() {
fenetre.close();
}


// https://codepen.io/believemy/full/XWJbZBw
// PLus d'exemple : https://developer.mozilla.org/fr/docs/Web/API/Window

