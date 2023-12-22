// Méthode 1 Décomposer
let header = document.querySelector("header");
header.style.background = "#ffbd69";

// Méthode 2 Direct
let h1 = document.querySelector("h1").style.color = "#111d5e";
h1 = document.querySelector("h1").style.textAlign = "center";

// Méthode 3 Avec un ID
document.querySelector("header").className = "ma_class";