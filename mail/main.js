const validEmails = [
    "hello@email.com",
    "me@email.com",
    "manager@email.com",
    "no-reply@email.com",
    "admin@gmail.com",
];

const userEmail = prompt("Inserisci un email");

let isUserEmailValid = false;

for (let i = 0; i < validEmails.length; i++) {
    if (validEmails[i] === userEmail) {
        isUserEmailValid = true;
    }
}

isUserEmailValid
    ? console.log("Sei in lista")
    : console.log("Non sei in lista");
