let age = 17;

if (age < 18) {
        console.log("Vous n'êtes pas majeur");
} else if (age <= 20) {
        console.log("Vous êtes majour en France");
} else {
        console.log("Vous êtes majour partout, à vous les casinos !");
}

// heure == 11;     égale à 11
// heure === 11;    égal à la valeur et au type (number) heure = string et 11 = number donc false pas égale
// heure != 11;     n'est pas égale à 11
// heure < 11;      inférieur à 11
// heure > 11;      supérieur à 11
// heure <= 11;     inférieur ou égale à 11
// heure >= 11;     supérieur ou égale à 11



//Si nous prenons un exemple, voici la différence entre l'opérateur == et === :

let nombre = 3;
if(nombre == "3"){  // vaudra "true"

}
if(nombre === "3") { // vaudra "false" (car la variable nombre est de type Number, 
                     // alors que nous lui demandons de vérifier s'il s'agit bien d'une chaîne de caractères qui vaut 3.
}