
function sommes(nombres) { // 3
    
        if (nombres == 1) {
            return 1;
        }

        return nombres + sommes(nombres - 1) // 2

            // retourner 2 + somme(1)

                // retourner 1

        // 3 + 2 + 1

    }

console.log(sommes(3)) // resultat 6