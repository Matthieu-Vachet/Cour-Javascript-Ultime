let x = 10;

// "!" = NOT (true = true / !true = false)


// Le résultat et false car x et supérieur à 5 donc else 
if (x < 5) {
    console.log('x est inférieur à 5')
} else {
    console.log(`x n'est pas inférieur à 5`)
}

// ON change le contraire d'un résultat avec ! danc le cas de notre condition celle ci se transformera en true
if (!x < 5) {
    console.log('x est inférieur à 5')
} else {
    console.log(`x n'est pas inférieur à 5`)
}

console.log(true) // = true
console.log(!true) // = false