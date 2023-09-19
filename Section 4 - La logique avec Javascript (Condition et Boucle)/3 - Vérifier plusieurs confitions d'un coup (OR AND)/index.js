let gareDeDepart = "Valenciennes";
let gareDarriver = "Gare du Nord";
let chauffeur = "";

// || = OR/OU
// && = AND/ET

if ((gareDeDepart != "" || gareDarriver != "") && chauffeur != "") {
    console.log(`Le train va démarrer`);
} else {
    console.log(`Le train ne peut pas démarrer`)
}