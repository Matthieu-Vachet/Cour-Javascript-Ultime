// Une boucle do...while s'execute au minimum une fois car la condition et apres le code.

do {
    
    var prenom = prompt(`Quel est votre prénom ?`);

} while (prenom == "" || prenom == null);

alert(`Bonjour ${prenom}`);