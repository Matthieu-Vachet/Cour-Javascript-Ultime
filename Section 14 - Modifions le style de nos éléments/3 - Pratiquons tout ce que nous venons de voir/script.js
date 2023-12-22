let supprimer = document.getElementById("a-supprimer").remove();

// 3 - Crée
let header = document.createElement("header");
let menu = document.createElement("div");
let text = document.createElement("p");


// 2 - Personnalisé
header.textContent = "Bienvenue";
header.style.background = "#ffbd69";
header.style.textAlign = "center";
header.style.padding = "20px";
header.style.color = "white";
header.style.fontSize = "30px";

menu.innerHTML = "<a href=`#`>Acceuil</a> / <a href=`#`>Une autre page</a>";
menu.style.background = "#f1d6ab";
menu.style.padding = "20px";

text.textContent = "Ceci et un paragraphe crée avec Javascipt";
text.style.margin = "20px";

// 3 - Afficher
document.body.prepend(header, menu, text);