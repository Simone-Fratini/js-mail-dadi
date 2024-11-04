"use strict";


function dado() {
    return Math.random() * (6 - 1) + 1;
}
  
const punteggioGiocatore = dado();
const punteggioComputer = dado();

console.log("numero giocatore:", punteggioGiocatore);
console.log("numero computer:", punteggioComputer);

if (punteggioGiocatore > punteggioComputer) {
    alert("Il giocatore vince!");
} else if (punteggioGiocatore < punteggioComputer) {
    alert("Il computer vince!");
} else {
  alert("È un pareggio!");
}