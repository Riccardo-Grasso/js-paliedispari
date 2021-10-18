const container = document.querySelector(".container");
container.classList.add("text-center");

const btnVerifica = document.getElementById("btn_verifica");
const word = document.getElementById("parola");

let parolaInvertita;

btnVerifica.addEventListener("click", function () {

    const parola = word.value;

    function controlloPalindromo(parola) {

        const parolaDivisa = parola.split("");
        console.log("parola split: " + parola);

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
});
