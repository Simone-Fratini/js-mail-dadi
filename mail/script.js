"use strict";

let mail = ["pippo@gmail.com", "francesco@gmail.com", "simone@gmail.com"];
let psw = ["pippo123", "francesco1234", "simone1234"];

let mailUsr = prompt("Inserisci la tua mail");
let atCheck = mailUsr.includes("@");

while (mailUsr === "" || atCheck === false) {

    if (atCheck === false) {
        mailUsr = prompt("la mail inserita non ha una formattazione corretta riprova");
        atCheck = mailUsr.includes("@");
    } else if (mailUsr === ""){
        mailUsr = prompt("la mail inserita è vuota riprova");
        atCheck = mailUsr.includes("@");
    }
}

if (mail.includes(mailUsr)) {
    let pswUsr = prompt("Inserisci la password");
    let i = mail.indexOf(mailUsr);
    while (pswUsr === "" || pswUsr !== psw[i]) {
        pswUsr = prompt("Password sbagliata riprova");
    }
    alert("accesso consentito " + mailUsr);
}else {
    alert("accesso negato utente non trovato");
}
