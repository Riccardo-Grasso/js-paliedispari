//Creo funzione
function controlloPalindromo(parola1) {

    //Scompongo la parola nelle lettere che la compongono
    const parolaDivisa = parola1.split("");
    console.log("parola split: " + parola1);

    //Inverto l'array che contiene le lettere
    const parolaReverse = parolaDivisa.reverse();
    console.log("parola reverse: " + parolaReverse);

    //ricompongo l'array per ottenere la parola invertita
    const parolaJoin = parolaReverse.join("");
    console.log("parola join: " + parolaJoin);

    return parolaJoin;
}
