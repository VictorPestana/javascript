const leia = require("readline-sync");

let vetorStrings = ["Boxer", "Pastor Alemão", "Pinscher", "Husky", "Corgi"];
let vetorNumeros = [2,4,1,3,5,6,7,9,8,10];

let vetorInteiro = new Array(5);

/*
for (let i = 0; i < vetorInteiro.length; i++) {
  vetorInteiro[i] = leia.questionInt("Digite um numero: ");
}
*/

console.table(vetorInteiro);

console.table(vetorStrings.sort())

console.table(vetorNumeros.sort((a,b) => a - b))