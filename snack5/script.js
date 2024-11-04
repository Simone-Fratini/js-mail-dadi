"use strict";

let numeri = [];
let input = 0;

for(let i = 1; i <= 6; i++){
    input = prompt(`Inserisci il ${i}° numero`);

    if(input % 2 !== 0){
        numeri.push(input);
    }

    console.log(numeri); 
}
