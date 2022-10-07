// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// Dati
const pricePerKm = 0.21;

// Chiedere qunti km l'utente deve percorrere
const userKm = parseFloat(prompt("Quanti km vuoi percorrere?"));
console.log(userKm, typeof userKm);

// Chiedere l'età del passeggero
const userAge = parseInt(prompt("Quanti anni ha il passeggero?"));
console.log(userAge, typeof userAge);

// Calcolare prezzo base
const basePrice = userKm * pricePerKm;
console.log(basePrice);

// SE il passeggero ha meno di 18 anni
// Sconto 20%
// ALTRIMENTI SE passeggero ha più di 65 anni
// Sconto 40%
// ALTRIMENTI
// Sconto 0%

let discountPercentage = 0;
if (userAge < 18) {
  discountPercentage = 20;
} else if (userAge > 65) {
  discountPercentage = 40;
}

console.log(discountPercentage);

// Calcolo il prezzo scontato: totalPrice = basePrice - (basePrice * sconto / 100)
let finalPrice = basePrice - (basePrice * discountPercentage / 100);

finalPrice = finalPrice.toFixed(2);

// Scrivo output
document.getElementById("result").innerHTML = `
    <h2>Il prezzo base è €${basePrice.toFixed(2)}</h2>
    <p>Lo sconto è di ${discountPercentage}%</p>
    <h2>Il prezzo finale è €${finalPrice}</h2>
`;