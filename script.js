let parolapalindroma = prompt("Inserisci una parola:");

function isPalindroma(parolapalindroma) {
  for (let i = 0; i < parolapalindroma.length / 2; i++) {
    if (parolapalindroma[i] !== parolapalindroma[parolapalindroma.length - 1 - i]) {
      return false; 
    }
  }
  return true; 
}
if (isPalindroma(parolapalindroma)) {
  console.log("La parola " + parolapalindroma + " è palindroma.");
} else {
  console.log("La parola " + parolapalindroma + " non è palindroma.");
} 

function generaNumeroCasuale() {
  return Math.floor(Math.random() * 5) + 1;
}
function isPari(numero) {
  return numero % 2 == 0;
}
let sceltaUtente = prompt("Scegli pari o dispari:");
let numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5:"));
let numeroCausale = generaNumeroCasuale();
let somma = numeroUtente + numeroCausale;
let isSommaPari = isPari(somma);
if ((isSommaPari && sceltaUtente === "pari") || (!isSommaPari && sceltaUtente === "dispari")) {
  console.log("Hai vinto!");
} else {
  console.log("Hai perso!");
}



















































































/*function Numerocasuale(){
  return Math.floor(Math.random() * 5) + 1;
}

//parseint conserva stringa in numero
let ParioDispari = prompt(parseInt("inserisci numero"))
if(ParioDispari > 5){
  console.log("numero non valido");
};

let Numerocambio = Numerocasuale();
let */





