const computerNumber = Math.floor(Math.random() * (7 - 1) + 1);

console.log("Il numero del computer è: " + computerNumber);

const userNumber = Math.floor(Math.random() * (7 - 1) + 1);

console.log("Il numero del utente è: " + userNumber);

if (computerNumber > userNumber) {
    console.log("Hai perso!");
} else if (userNumber > computerNumber) {
    console.log("Hai vinto!");
} else {
    console.log("Pareggio!");
}
