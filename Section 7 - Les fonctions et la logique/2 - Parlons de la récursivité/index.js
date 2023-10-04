function timer(secondes) { // 10
    
    if (secondes > 0) {
        console.log(secondes);
        timer(secondes - 1); // secondes vaut 9

            // afficher 9
            // timer(8)

                // afficher 8
                // timer(7)

                    // ...
    }
    else {
        console.log(secondes);
    }
}

timer(10); // on dit que secondes vaut 10

for (i = 15; i > 0 - 1 ; i--){
    console.log(i)
} // même principe mais avec une boucle for