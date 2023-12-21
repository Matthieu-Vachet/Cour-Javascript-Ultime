// 1ére méthode : Ecrire juste un texte

document.write("Bonjour tout le monde !");

// -----------------------
// 2éme méthode : Ajouté un élément brut

let h1 = document.querySelector("h1");
h1.append("Bonjour tout le monde !");

// -----------------------
// 3éme méthode : Celle pour les objets

let helloWorld = document.createElement("div");
helloWorld.textContent = "Bonjour tout le monde !";

// l'ajouter a notre page
// document.body.append(helloWorld);
// document.body.appendChild(helloWorld);

// document.body.insertBefore(helloWorld, document.querySelector(".container"));

document.querySelector(".container").prepend(helloWorld);