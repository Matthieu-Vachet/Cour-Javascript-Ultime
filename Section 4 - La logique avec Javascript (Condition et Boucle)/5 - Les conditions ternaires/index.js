let gareDeDepart = "Valencienne";
let gareDarriver = prompt(`Ou souhaitez-vous allez ?`) || "Gare du Nord"; // Ajout de "Gare du Nord comme paramétre par défault"
let chauffeur = "Matthieu-Vachet";

if ((gareDeDepart != "" || gareDarriver != "") && chauffeur != "") {
    alert(`Le train va démarrer à destination de ${gareDarriver}.`);
} else {
    alert(`Le train ne peut pas démarrer.`)
}

// ---------------------------------------------------------------------------

// EXEMPLE:


// let x = 1;

// if (x < 3) {
    // console.log(`x est supérieur à trois`);
//} else {
    // console.log(`x est inférieur à trois`);
//}



// On transforme le if else en CONDITION TENRAIRE

// x < 3 ? console.log(`x est supérieur à trois`) : console.log(`x est inférieur à trois`);