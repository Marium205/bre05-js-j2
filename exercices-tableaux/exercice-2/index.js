let animals_even = ["Dog", "Cat", "Spider"];
let animals_odd = ["Bat", "Snake", "Bear"];
for (let i = 0; i < animals_even.length; i++) {
    if (i % 2 === 0) {
        console.log("PAIR :", animals_even[i]);
    }
}
for (let i = 0; i < animals_odd.length; i++) {
    if (i % 2 !== 0) {
        console.log("IMPAIR :", animals_odd[i]);
    }
}


// pour le tableau animals_even : afficher les animaux dont la clé est un nombre pair

// pour le tableau animals_odd : afficher les animaux dont la clé est un nombre impair
