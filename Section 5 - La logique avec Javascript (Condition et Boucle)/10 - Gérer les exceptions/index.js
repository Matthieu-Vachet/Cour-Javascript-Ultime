try {
    // Erreur ?
    alert(hello);
}
catch(error) {
    // Erreur !
    alert(`La variable Hello n'existe pas`);
}


// alert(error.name)                        = le nom de l'erreur
// alert(error.message)                     = le message de l'erreur
// alert(error.stack)                       = l'erreur complete
// alert(`La variable Hello n'existe pas`)  = message personalisé 



// AUTRE EXEMPLES

try {
    //Erreur ?
    let recompense = prompt(`Choisissez une récompense : épée, arc ou haches`);
    let degats;

    switch (recompense) {
        case `épée`:
            degats = 40;
            break;
        case `arc` :
            degats = 30;
            break;
        case `haches` :
            degats = 20;
            break;
        default:
            throw new error(`Vous ne pouvez pas tricher.`);
    }

    alert(`Vous avez choisi : ${recompense} (${degats} dégats).`);
}
catch(error) {
    // Erreur !
    alert(error);
}

// Le code dans finally sera tout le temp exectuer.
finally {
    alert(`Fin du programme`);
}