"use strict";

let numeriCubo = [];

let input = prompt("Inserisci il fino a che numero vuoi avere il cubo");

for(let i = 1; i <= input; i++){
    numeriCubo.push(Math.pow(i, 3));
}
alert(numeriCubo + " questi sono i cubi dei numeri fino a " + input);

