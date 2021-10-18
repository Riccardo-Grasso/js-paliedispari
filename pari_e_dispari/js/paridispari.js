
const even = "pari";
const odd = "dispari";

let sceltaUtente = prompt("Benvenuto! Desideri PARI o DISPARI?");
let sceltaComputer;

switch (sceltaUtente) {
    case "pari":
        sceltaComputer = odd;
        break;
    case "dispari":
        sceltaComputer = even;
        break;
}

/* if (sceltaUtente.toLowerCase == "pari") {
    sceltaComputer = odd;

} else if (sceltaUtente.toLowerCase == "dispari") {
    sceltaComputer = even;
} */

console.log(`L'utente ha scelto: ${sceltaUtente}`);
console.log(`Il computer ha: ${sceltaComputer}`);

const punteggioUtente = parseInt(prompt("Scegli un valore tra 1 e 5: "));
console.log(`L'utente ha scelto ${punteggioUtente}`);


function numeroRandom(minNumber = 1, maxNumber = 5) {
    const rand = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
    return rand;
}
const punteggioComputer = numeroRandom(1, 5);

console.log(`Punteggio Computer: ${punteggioComputer}`);
alert(`Punteggio Computer: ${punteggioComputer}`);

const punteggioTotale = punteggioUtente + punteggioComputer;

function totalePari(numero) {
    return numero % 2 === 0;
}

totalePari(punteggioTotale);
console.log(totalePari(punteggioTotale));

if ((totalePari == true && sceltaUtente == "pari") || (totalePari == false && sceltaUtente == "dispari")) {
    alert(`Totale: ${punteggioTotale}` + "\nCongratulazioni, Hai vinto!");
} else {
    alert(`Totale: ${punteggioTotale}` + "\nMi dispiace, ha vinto il computer");
}