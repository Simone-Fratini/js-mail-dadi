"use strict";

let somma = 0;
let media = 0;

for(let i = 0; i < 10; i++){
    somma += i;
}

media = somma / 10;

console.log("La somma dei primi 10 numeri è: " + somma);

console.log("La media dei primi 10 numeri è: " + media);