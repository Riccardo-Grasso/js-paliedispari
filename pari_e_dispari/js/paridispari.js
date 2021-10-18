function gioco(num1) {
    function numeroRandom(min, max) {
        const rand = Math.floor(Math.random() * (max - min + 1) + min);
        return rand;
    }
    const punteggioComputer = numeroRandom(1, 5);

    console.log(`Punteggio Computer: ${punteggioComputer}`);
    alert(`Punteggio Computer: ${punteggioComputer}`);

    const punteggioTotale = num1 + punteggioComputer;

    function totalePari(numero) {
        return numero % 2 === 0;
    }

    totalePari(punteggioTotale);
    console.log("Punteggio pari? " + totalePari(punteggioTotale));

    if ((totalePari(punteggioTotale) == true && sceltaUtente == "pari") || (totalePari(punteggioTotale) == false && sceltaUtente == "dispari")) {
        alert(`Totale: ${punteggioTotale}` + "\nCongratulazioni, Hai vinto!");
    } else {
        alert(`Totale: ${punteggioTotale}` + "\nMi dispiace, ha vinto il computer");
    }
}


const even = "pari";
const odd = "dispari";

let sceltaUtente = prompt("Benvenuto! Desideri PARI o DISPARI?");
let sceltaComputer;

if (!isNaN(sceltaUtente)) {
    alert("Valore inserito non valido, riprova.");
} else {
    if (sceltaUtente.toLowerCase() == "pari") {
        let sceltaComputer = odd;
        console.log(`L'utente ha scelto: ${sceltaUtente}`);
        console.log(`Il computer ha: ${sceltaComputer}`);

    } else if (sceltaUtente.toLowerCase() == "dispari") {
        let sceltaComputer = even;
        console.log(`L'utente ha scelto: ${sceltaUtente}`);
        console.log(`Il computer ha: ${sceltaComputer}`);
    }


    const punteggioUtente = parseInt(prompt("Scegli un valore tra 1 e 5: "));

    if (isNaN(punteggioUtente) || punteggioUtente < 1 || punteggioUtente > 5) {
        alert("Attenzione! Valore inserito non valido");
    } else {
        console.log(`L'utente ha scelto ${punteggioUtente}`);
        gioco(punteggioUtente);
    }
}
