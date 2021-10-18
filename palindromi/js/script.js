const container = document.querySelector(".container");
container.classList.add("text-center");


//Indico il mio BTN
const btnVerifica = document.getElementById("btn_verifica");
const word = document.getElementById("parola");

let parolaInvertita;

//Evento click
btnVerifica.addEventListener("click", funzionePalindromi);

//Funzione esterna, riclabile
function funzionePalindromi() {

    const parola = word.value;
    console.log("Parola iniziale: " + parola);
    function controlloPalindromo(parola) {

        //divido la parola in lettere
        const parolaDivisa = parola.split("");
        console.log("parola split: " + parolaDivisa);

        //Inverto l'array che contiene le lettere
        const parolaReverse = parolaDivisa.reverse();
        console.log("parola reverse: " + parolaReverse);

        //ricompongo l'array per ottenere la parola invertita
        const parolaJoin = parolaReverse.join("");
        console.log("parola join: " + parolaJoin);

        return parolaJoin;
    }

    parolaInvertita = controlloPalindromo(parola);
    if (parola == parolaInvertita) {
        alert(`La parola ${parola} è palindroma!`);
    } else {
        alert(`La parola ${parola} non è palindroma!`);
    }
}
