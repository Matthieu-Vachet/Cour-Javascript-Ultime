let i = 0;

while (i < 5) {
  
  // Break
  if (i == 3) {
    break; // La boucle stop a 3
  }
  
  // Continue
  if (i == 3) {
    i++;
    continue; // La boucle n'affichera pas 3
  }
  
  console.log('Ligne : ' + i);
  i++;
  
}