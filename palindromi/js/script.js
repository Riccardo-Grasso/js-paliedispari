const container = document.querySelector(".container");
container.classList.add("text-center");




const btnVerifica = document.getElementById("#btn_verifica");



btnVerifica.addEventListener("click", function () {
    const word = document.querySelector("[name='word']");
    const parola = word.value;
    console.log(word.value);

    console.log("mia parola: " + parola);

    console.log(word.value);


    function controlloPalindromo(parola) {

        //Scompongo la parola nelle lettere che la compongono
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

    const parolaInvertita = controlloPalindromo(parola);
});



//controllo
if (parola == parolaInvertita) {
    alert(`La parola ${parola} è palindroma!`);
} else {
    alert(`La parola ${parola} non è palindroma!`);
}