let a = document.querySelector('a');
let button = document.querySelector('button');
let body = document.querySelector('body');

// fonction fléchée onclick redirection vers believemy.com
a.addEventListener('click', () => {
    if(confirm('Etes-vous sûr ?')) {
        location.href="https://believemy.com"
    };
    });

// fonction changement de couleur du background
function changeColor() {
    body.style.backgroundColor = 'white';
};
  
// fonction fléchée mouseover background rouge au survole de la souris
button.addEventListener("mouseover", () => {
    body.style.backgroundColor = 'red';
  });

// fonction fléchée mouseout utiliant la fonction changeColor
button.addEventListener('mouseout', changeColor);;

// Suppression de l'écouteur d'évènement mouseout utilisant la fonction changeColor
button.removeEventListener('mouseout', changeColor);
