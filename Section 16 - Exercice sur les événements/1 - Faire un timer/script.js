{/*
Exercice 1 : Faire un timer
Dans cet exercice, vous allez réaliser un Timer !

Nous allons pouvoir réviser les notions de conditions, de fonctions, et d’intervalles.

Voici comment va se dérouler notre Timer :

Un bouton s’affiche sur la page proposant de « Lancer le décompte »

L’utilisateur clique sur ce bouton, qui va lancer une fonction start(), qui s’occupera de créer un intervalle sur la fonction decompte() toutes les secondes, pendant 10 secondes.

La fonction decompte(), lorsqu’elle est appelée :

Décrémentera (retirera 1) à une variable secondes, qui contient comme valeur 10

Vérifiera si secondes est différent de 0, pour afficher dans la page le nombre de secondes restantes

Sinon, si secondes vaut 0, appellera la fonction stop(), qui aura pour but d’arrêter l’intervalle


Si vous souhaitez vous lancer sans aucune aide, allez-y ! Toutefois, je vous invite à suivre les étapes suivantes si vous souhaitez réaliser cet exercice dans les meilleures conditions possibles :



Avant de commencer
Vérifiez que vous avez bien lié votre fichier html avec votre fichier JavaScript. Si vous le souhaitez, vous pouvez partir de  ce fichier CodePen créé pour l’occasion.



Etape 1
Créez un bouton, avec le texte « Lancer le décompte », dans votre page HTML.



Etape 2
Récupérez grâce à JavaScript, votre élément button, et stockez-le dans une variable btn.



Etape 3
Ajoutez un évènement sur votre bouton, qui se déclenchera au clic, et qui appellera la fonction start().



Etape 4
Créez une fonction start() qui aura pour but de créer une variable stockant un intervalle. Cet intervalle devra appeler une fonction decompte() toutes les secondes. Je vous conseille d’initialiser toutes vos variables à l’extérieur de vos fonctions pour pouvoir les utiliser partout (hors, évidemment, la variable qui contient notre intervalle).



Etape 5
Créez une fonction decompte() qui décrémentera dans un premier temps la variable secondes. Créez cette variable en-dehors de votre fonction. Puis, vérifiez si secondes vaut 0. Si c’est le cas, appelez la fonction stop(), sinon, affichez dans la page HTML, grâce à JavaScript, le nombre de secondes restantes (par exemple, s’il reste 5 secondes, écrivez « 5 » dans la page, à la suite des autres secondes, comme dans l’exemple ci-dessus).



Etape 6
Créez une fonction stop() qui arrêtera l’intervalle et qui se chargera d’écrire « Stop ! » dans la page.



Amusez-vous bien !

*/}

let btn = document.querySelector('button');
let p;

let timer;
let secondes = 10;

// Fonctions start
function start() {
    timer = setInterval(decompte, 1000);
}

// Fonctions stop
function stop() {
    clearInterval(timer);
    let p = document.createElement('p')
    p.textContent = 'Terminé !';
    document.body.appendChild(p);  
}

// Fonctions decompte
function decompte() {
    if (secondes == 0) {
        stop();
    }else{
        secondes--;
        p = document.createElement('p')
        p.innerHTML = secondes;
        document.body.appendChild(p);
    }
}

// Evenement click
btn.addEventListener('click', start);