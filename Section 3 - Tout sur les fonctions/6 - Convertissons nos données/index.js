function prevoirAge() {
  
    let age = prompt("Quel est le premier nombre ?") // "30" + 1 = 301
    // age = parseInt(age);
    age = parseFloat(age);
    // age = Number(age); Convertie une chaine de caractére en nombre (Bonne méthode)
    
    // nombre = 45;
    // nombreEnString = nombre + ""; Convertie un nombre en string resultat "45" (Méthode Barbarre)
    // nombreEnString = nombre.toString(); Convertie un nombre en string resultat "45" (Bonne Méthode)
    alert("Bientôt vous aurez " + (age + 1) + " ans.");
    
  }
  
  prevoirAge();