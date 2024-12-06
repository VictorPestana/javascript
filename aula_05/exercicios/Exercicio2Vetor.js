// Elabore um algoritmo que leia 10 números inteiros e armazene em um vetor. Em seguida, mostre na tela:
// Todos os elementos dos índices ímpares do vetor
// Todos os elementos do vetor que são números pares
// A Soma de todos os elementos do vetor
// A Média de todos os elementos do vetor, armazenada em uma variável do tipo real

const leia = require("readline-sync");

let vetorInteiros = new Array(10);

for (let indice = 0; indice < vetorInteiros.length; indice++) {
  vetorInteiros[indice] = leia.questionInt("Digite 10 numeros: ");
}

console.log("Elementos Pares: ");
for (let indice = 0; indice < vetorInteiros.length; indice++) {
  if (vetorInteiros[indice] % 2 == 0) {
    console.log(vetorInteiros[indice]);
  }
}

console.log("Elementos Impares: ");
for (let indice = 0; indice < vetorInteiros.length; indice++) {
  if (vetorInteiros[indice] % 2 != 0) {
    console.log(vetorInteiros[indice]);
  }
}

let soma = 0;
for (let indice = 0; indice < vetorInteiros.length; indice++) {
  soma = vetorInteiros[indice] + soma;
}
console.log("Soma = ", soma);

for (let indice = 0; indice < vetorInteiros.length; indice++) {
  media = soma / vetorInteiros.length;
}
console.log("Média = ", media.toFixed(2));
